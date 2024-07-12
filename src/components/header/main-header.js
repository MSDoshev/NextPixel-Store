import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="bg-stone-900 text-white flex flex-row justify-between px-8 h-20 items-center">
      <div id="logo">
        <Link href="/" className="hover:text-sky-500 text-2xl">
          NextPixel
        </Link>
      </div>
      <div>
        <input type="text" />
      </div>

      <nav>
        <ul className="flex flex-row gap-5 items-end">
          <li>
            <Link
              href="/browse"
              className=" p-4 pb-7 border-b-white hover:border-b-2 "
            >
              Browse
            </Link>
          </li>
          <li>
            <Link
              href="/browse"
              className=" p-4 pb-7 border-b-white hover:border-b-2"
            >
              Browse
            </Link>
          </li>
          <li>
            <Link
              href="/browse"
              className=" p-4 pb-7 border-b-white hover:border-b-2"
            >
              Browse
            </Link>
          </li>
          <li>
            <Link
              href="/browse"
              className=" p-4 pb-7 border-b-white hover:border-b-2"
            >
              Browse
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex gap-2">
        <Link href="/browse">Login</Link> /<Link href="/browse">Register</Link>
      </div>
    </header>
  );
}
