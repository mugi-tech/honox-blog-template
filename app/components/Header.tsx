import type { FC } from 'hono/jsx';
import { XIcon } from './XIcon';
import { GithubIcon } from './GithubIcon';
import { TagIcon } from './TagIcon';

const Header: FC = () => {
  return (
    <header>
      <div class="flex justify-between items-center">
        <h1 class="font-extrabold m-4 md:text-2xl">Wachichi's blog</h1>
        <div class="flex justify-start">
          <a href="/" class="m-2">
            <TagIcon></TagIcon>
          </a>
          <a href="/" class="m-2">
            <GithubIcon></GithubIcon>
          </a>
          <a href="/" class="m-2">
            <XIcon></XIcon>
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
