import type { Core } from "@strapi/strapi";

const config = ({ env }: Core.Config.Shared.ConfigParams) => ({
  url: env("PUBLIC_URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});

export default config;
