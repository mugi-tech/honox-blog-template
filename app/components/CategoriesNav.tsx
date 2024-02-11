import { FC } from 'hono/jsx';
import { Category } from '../type';

type Props = {
  categories: Category[];
  activeCategoryId: string;
};

export const CategoriesNav: FC<Props> = ({ categories, activeCategoryId }) => {
  return (
    <nav>
      {categories.map((category: Category) => (
        <div
          class={`p-4 font-semibold font-stone-400 data-[id=${category.id}]:font-stone-900 data-[id=${category.id}]:border-b-4 data-[id=${category.id}]:border-stone-400`}
          data-id={activeCategoryId}
        >
          <a href={`categories/${category.id}`}>{category.name}</a>
        </div>
      ))}
    </nav>
  );
};
