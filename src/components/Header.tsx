import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex px-5 justify-between py-2 items-center">
      <h1 className="text-3xl capitalize font-bold underline underline-offset-2">GTG</h1>
      <nav className="mx-10">
        <ul className="flex space-x-10 capitalize font-semibold ">
          <li className="hover:underline hover:underline-offset-2">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:underline hover:underline-offset-2">
            <Link href="/about">about</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
