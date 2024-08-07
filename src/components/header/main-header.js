import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="bg-stone-900 text-white flex flex-row justify-between px-8 h-20 items-center">
      <div id="logo">
        <Link href="/" className="hover:text-sky-500 text-2xl">
          NextPixel
        </Link>
      </div>
      {/* <div>
        <input type="text" />
      </div> */}

      <nav>
        <ul className="flex flex-row gap-5 items-end">
          <li>
            <Link
              href="/news"
              className=" p-4 pb-7 border-b-white hover:border-b-2 "
            >
              News
            </Link>
          </li>
          <li>
            <Link
              href="/store"
              className=" p-4 pb-7 border-b-white hover:border-b-2"
            >
              Store
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className=" p-4 pb-7 border-b-white hover:border-b-2"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex gap-2">
        <Link href="/login">Login</Link> /<Link href="/browse">Register</Link>
      </div>
    </header>
  );
}
