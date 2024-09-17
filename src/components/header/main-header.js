import { verifyAuth } from "@/lib/auth";
import Link from "next/link";
import { logout } from "../../../actions/auth-actions";

export default async function MainHeader() {
  const result = await verifyAuth();
  let authOptions = (
    <form action={logout} className="flex gap-2">
      <Link href="/profile">Profile</Link> /<button>Logout</button>
    </form>
  );
  if (!result.user) {
    authOptions = (
      <form className="flex gap-2">
        <Link href="/login">Login</Link> /<Link href="/register">Register</Link>
      </form>
    );
  }

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

      {authOptions}
    </header>
  );
}
