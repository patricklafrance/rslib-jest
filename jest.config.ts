import type { Config } from "jest";

const config: Config = {
    testRegex: "/tests/*/.*\\.test\\.(ts|tsx)$",
    testPathIgnorePatterns: ["/node_modules/", "/dist/"],
    transform: {
        "^.+\\.(t|j)sx?$": [
            "@swc/jest",
            {
                jsc: {
                    parser: {
                        tsx: true,
                        syntax: "typescript"
                    },
                    transform: {
                        react: {
                            runtime: "automatic"
                        }
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
