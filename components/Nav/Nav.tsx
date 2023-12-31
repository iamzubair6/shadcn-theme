"use-clint";
import Image from "next/image";

function Nav() {
  return (
    <header>
      <nav>
        <ul className="flex items-center justify-between gap-2 toggle">
          <li>
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </li>
          <li className="bg-bluee">Toggle Button</li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
