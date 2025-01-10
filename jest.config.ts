import type { Config } from "jest";

const config: Config = {
    testRegex: "/tests/*/.*\\.test\\.ts$",
    testPathIgnorePatterns: ["/node_modules/", "/dist/"],
    transform: {
        "^.+\\.(t|j)s?$": [
            "@swc/jest",
            {
                jsc: {
                    parser: {
                        tsx: true,
                        syntax: "typescript"
                    }
                },
                isModule: "unknown"
            }
        ]
    },
    cacheDirectory: "./node_modules/.cache/jest",
    verbose: true
};

export default config;
