import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { mkdtemp } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { setTimeout as delay } from "node:timers/promises";

const dir = path.resolve("Integration-Desk/runtime");
const executable = path.join(dir, process.platform === "win32" ? "node.exe" : "node");
const child = spawn(executable, [path.join(dir, "launcher.mjs")], {
  cwd: dir,
  stdio: ["ignore", "pipe", "inherit"],
  env: { ...process.env, INTEGRATION_DESK_PORT: "0",
    INTEGRATION_DESK_RUNTIME_DIR: await mkdtemp(path.join(tmpdir(), "desk-ci-")) },
});
const exited = once(child, "exit");
let output = "";
child.stdout.on("data", part => { output += part; });
try {
  let origin;
  for (let i = 0; i < 300 && child.exitCode === null; i++) {
    origin = /Integration Desk [0-9.]+: (http:\/\/127\.0\.0\.1:\d+)/.exec(output)?.[1];
    if (origin) break;
    await delay(100);
  }
  assert(origin, "El lanzador terminó sin responder. " + output);
  const status = await (await fetch(origin + "/api/update-status")).json();
  assert.equal("v" + status.version, process.env.TAG);
  assert.equal((await fetch(origin)).status, 200);
  const session = await (await fetch(origin + "/api/session")).json();
  assert.match(session.token, /^[a-f0-9]{64}$/);
  console.log("Arranque, UI y sesión verificados en " + process.env.TARGET);
} finally {
  child.kill();
  if (child.exitCode === null && !child.signalCode) await exited;
}
