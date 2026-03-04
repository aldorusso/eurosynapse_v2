import { createQwikCity } from "@builder.io/qwik-city/middleware/node";
import qwikCityPlan from "@qwik-city-plan";
import render from "./entry.ssr";
import { createServer } from "node:http";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";

const { router, notFound, staticFile } = createQwikCity({
  render,
  qwikCityPlan,
});

const app = express();
const PORT = process.env.PORT ?? 3000;

const distDir = join(fileURLToPath(import.meta.url), "..", "..", "dist");

app.use(
  "/build",
  express.static(join(distDir, "build"), {
    immutable: true,
    maxAge: "1y",
  }),
);
app.use(express.static(distDir, { redirect: false }));

app.use(router);
app.use(staticFile);
app.use(notFound);

const server = createServer(app);
server.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}/`);
});
