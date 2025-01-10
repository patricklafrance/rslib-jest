import { defineConfig } from "@rslib/core";

test("my test", () => {
    const config = defineConfig({
        lib: [{
            format: "esm"
        }]
    });

    expect(config).toBeDefined();
});
