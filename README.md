# Integration Desk

Aplicación local para trabajar con Boomi, Salesforce y OData. Las conexiones se guardan cifradas en el perfil de tu navegador.

**[Descargar la última versión para Windows, macOS o Linux](https://github.com/Fermartyni/integration-desk-releases/releases/latest)**

## Abrir Integration Desk

Descarga el ZIP que corresponda a tu equipo y extrae la carpeta completa. Cada paquete incluye Node.js y la aplicación. Conserva la carpeta del lanzador.

| Equipo                                        | ZIP             | Archivo que abre la aplicación   |
| --------------------------------------------- | --------------- | -------------------------------- |
| Windows con procesador Intel o AMD de 64 bits | `windows-x64`   | `Abrir Integration Desk.cmd`     |
| Windows con procesador ARM de 64 bits         | `windows-arm64` | `Abrir Integration Desk.cmd`     |
| Mac con chip de Apple (serie M)               | `macos-arm64`   | `Abrir Integration Desk.command` |
| Mac con procesador Intel                      | `macos-x64`     | `Abrir Integration Desk.command` |
| Linux con procesador Intel o AMD de 64 bits   | `linux-x64`     | `./abrir-integration-desk.sh`    |
| Linux con procesador ARM de 64 bits           | `linux-arm64`   | `./abrir-integration-desk.sh`    |

El runtime incluido requiere Windows 10 o posterior, macOS 13.5 o posterior, o Linux con kernel 4.18 o posterior, glibc 2.28 y libstdc++ con GLIBCXX_3.4.25 o posteriores. Para las conexiones necesitas un navegador con Web Crypto e IndexedDB. [Plataformas compatibles de Node.js 24.22.3](https://github.com/nodejs/node/blob/v24.22.3/BUILDING.md#platform-list)

El lanzador abre Integration Desk en tu navegador. Mantenlo abierto mientras trabajas. Para salir, pulsa Ctrl+C en la terminal del lanzador.

Si ya tienes conexiones, cierra el lanzador anterior y utiliza el mismo navegador, perfil y dirección que antes (por defecto, `http://127.0.0.1:4310`). Tu bóveda cifrada, idioma y tema pertenecen a ese perfil.

Las nuevas versiones de la aplicación se descargan en segundo plano. Cuando el aviso indique que una versión está preparada, cierra y vuelve a abrir el lanzador para usarla.
