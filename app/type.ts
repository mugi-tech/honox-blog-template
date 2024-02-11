import type {
  MicroCMSImage,
  MicroCMSContentId,
  MicroCMSDate,
} from "microcms-js-sdk";

export type Tag = {
  name: string;
  icon: MicroCMSImage;
} & MicroCMSContentId &
  MicroCMSDate;

export type Category = {
  name: string;
  icon: MicroCMSImage;
} & MicroCMSContentId &
  MicroCMSDate;

export type Article = {
  title: string;
  description: string;
  content: string;
  emoji: string;
  category: string;
  tags?: Tag[];
} & MicroCMSContentId &
  MicroCMSDate;
