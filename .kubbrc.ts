import { defineConfig } from "@kubb/core";
import createSwagger from "@kubb/swagger";
import createSwaggerTS from "@kubb/swagger-ts";
import createSwaggerClient from "@kubb/swagger-client";
import createSwaggerTanstackQuery from "@kubb/swagger-tanstack-query";

export default defineConfig(async () => {
  const client = "./src/utils/axios-client.ts";

  return {
    root: ".",
    // input: { path: "petStore.yaml" },
    input: { path: "swagger.json" },
    output: { path: "./src/api", clean: true },
    plugins: [
      createSwagger({ output: false }),
      createSwaggerTS({
        output: "models",
        groupBy: { type: "tag", output: "models/{{tag}}" },
        enumType: "enum",
      }),
      createSwaggerClient({
        output: "clients",
        groupBy: {
          type: "tag",
          output: "clients/{{tag}}",
          exportAs: "{{tag}}Service", // BUG: doesn't work
        },
        exportAs: "{{tag}}Service", // BUG: doesn't work
        client,
      }),
      createSwaggerTanstackQuery({
        output: "hooks",
        groupBy: {
          type: "tag",
          output: "hooks/{{tag}}",
          exportAs: "{{tag}}Hooks", // BUG: doesn't work
        },
        exportAs: "{{tag}}Hooks", // BUG: doesn't work
        client,
      }),
    ],
  };
});
