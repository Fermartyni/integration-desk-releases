// The application and its packaging inputs were signed by the private repository.
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { installer } from "./scripts/installer.mjs";
import { targets } from "./scripts/node-runtime.mjs";
const manifest = JSON.parse(await readFile("releases/integration-desk-manifest.json"));
assert.equal("incoming/v" + manifest.version, process.env.GITHUB_REF_NAME);
const config = JSON.parse(await readFile("scripts/release-channel.json"));
assert.equal(config.publicKey, await readFile("update-public.pem", "utf8"));
assert.equal(config.repository, process.env.GITHUB_REPOSITORY);
const channel = { ...config, version: manifest.version, sha256: manifest.sha256 };
const payload = await readFile("releases/integration-desk-app.json.gz");
const bootstrap = [];
for (const name of ["runtime/launcher.mjs", "runtime/updater.mjs"]) {
  bootstrap.push([name, await readFile(name)]);
}
for (const target of targets) await installer("releases", target, channel, payload, bootstrap);
