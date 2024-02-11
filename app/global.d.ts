import {} from 'hono';

type Head = {
  title?: string;
};

declare module 'hono' {
  interface Env {
    Variables: {};
    Bindings: {
      MICROCMS_API_KEY: string;
      MICROCMS_SERVICE_DOMAIN: string;
    };
  }
  interface ContextRenderer {
    (
      content: string | Promise<string>,
      head?: Head
    ): Response | Promise<Response>;
  }
}
