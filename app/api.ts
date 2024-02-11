import { MicroCMSQueries, createClient } from 'microcms-js-sdk';
import { Article, Category, Tag } from './type';

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// ブログ一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Article>({
    endpoint: 'blogs',
    queries,
  });
  return listData;
};

// ブログの詳細を取得
export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Article>({
    endpoint: 'blogs',
    contentId,
    queries,
  });

  return detailData;
};

// タグの一覧を取得
export const getTagList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Tag>({
    endpoint: 'tags',
    queries,
  });

  return listData;
};

// タグの詳細を取得
export const getTag = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client.getListDetail<Tag>({
    endpoint: 'tags',
    contentId,
    queries,
  });

  return detailData;
};

// カテゴリの一覧を取得
export const getCategoryList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Category>({
    endpoint: 'categories',
    queries,
  });

  return listData;
};

// カテゴリの詳細を取得
export const getCategory = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Category>({
    endpoint: 'categories',
    contentId,
    queries,
  });

  return detailData;
};
