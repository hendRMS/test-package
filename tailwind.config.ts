import type { Config } from "tailwindcss";
import sharedConfig from "./config/tailwind-config.shared";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./src/**/*.tsx"],
  presets: [sharedConfig],
};

export default config;
