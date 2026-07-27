import { mkdir, readFile, readdir, copyFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const assetsDir = join(dist, "assets");
const serverDir = join(dist, "server");
const openAiDir = join(dist, ".openai");

const indexHtml = await readFile(join(dist, "index.html"), "utf8");
const assetFiles = await readdir(assetsDir);
const assets = {};

for (const file of assetFiles) {
  const bytes = await readFile(join(assetsDir, file));
  const ext = file.split(".").pop();
  const type =
    ext === "css"
      ? "text/css; charset=utf-8"
      : ext === "js"
        ? "text/javascript; charset=utf-8"
        : "application/octet-stream";

  assets[`/assets/${file}`] = {
    type,
    body: bytes.toString("base64")
  };
}

await mkdir(serverDir, { recursive: true });
await mkdir(openAiDir, { recursive: true });
await copyFile(join(root, ".openai", "hosting.json"), join(openAiDir, "hosting.json"));

const serverSource = `const indexHtml = ${JSON.stringify(indexHtml)};
const assets = ${JSON.stringify(assets)};

function response(body, type, status = 200) {
  return new Response(body, {
    status,
    headers: {
      "content-type": type,
      "cache-control": type.startsWith("text/html") ? "no-cache" : "public, max-age=31536000, immutable"
    }
  });
}

function decodeAsset(asset) {
  const binary = atob(asset.body);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const asset = assets[url.pathname];

    if (asset) {
      return response(decodeAsset(asset), asset.type);
    }

    if (url.pathname === "/" || !url.pathname.includes(".")) {
      return response(indexHtml, "text/html; charset=utf-8");
    }

    return response("Not found", "text/plain; charset=utf-8", 404);
  }
};
`;

await readFile(join(dist, "index.html"), "utf8");
await import("node:fs/promises").then(({ writeFile }) => writeFile(join(serverDir, "index.js"), serverSource));
