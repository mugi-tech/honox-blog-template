import { createClient } from 'microcms-js-sdk';
import { createRoute } from 'honox/factory';
import { Category } from '../type';

export const GET = createRoute(async (c) => {
  const client = createClient({
    serviceDomain: c.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: c.env.MICROCMS_API_KEY,
  });
  const categories = await client.getList<Category>({ endpoint: 'categories' });
  return c.render(
    <div></div>
  );
});
