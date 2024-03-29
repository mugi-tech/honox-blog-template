import { Style } from 'hono/css';
import { jsxRenderer } from 'hono/jsx-renderer';
import { Script } from 'honox/server';
import Header from '../components/Header';

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {import.meta.env.PROD ? (
          <link href="static/assets/style.css" rel="stylesheet" />
        ) : (
          <link href="/app/style.css" rel="stylesheet" />
        )}
        <title>{title}</title>
        <Script src="/app/client.ts" />
        <Style />
      </head>
      <body class={'container mx-auto'}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
});
