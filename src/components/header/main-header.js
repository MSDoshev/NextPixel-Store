import { verifyAuth } from "@/lib/auth";
import Link from "next/link";
import { logout } from "../../../actions/auth-actions";
import CartDropdown from "../cart/dropdown-cart";

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
        <Link href="/login">Login</Link> /{" "}
        <Link href="/register">Register</Link>
      </form>
    );
  }

  return (
    <header className="bg-stone-900 text-white flex items-center justify-between h-20 w-full px-4 md:px-8  sticky top-0 z-50">
      <div id="logo">
        <Link href="/" className="hover:text-sky-500 text-2xl">
          NextPixel
        </Link>
      </div>

      {/* Hamburger menu (visible on small screens) */}
      <input type="checkbox" id="menu-toggle" className="hidden peer" />
      <label htmlFor="menu-toggle" className="block md:hidden cursor-pointer">
        <div className="w-8 h-1 bg-white mb-1"></div>
        <div className="w-8 h-1 bg-white mb-1"></div>
        <div className="w-8 h-1 bg-white"></div>
      </label>

      {/* Full menu for large screens */}
      <nav className="hidden md:flex space-x-8">
        <Link href="/news" className="p-4 pb-7 border-b-white hover:border-b-2">
          News
        </Link>
        <Link
          href="/store"
          className="p-4 pb-7 border-b-white hover:border-b-2"
        >
          Store
        </Link>
        <Link
          href="/contact"
          className="p-4 pb-7 border-b-white hover:border-b-2"
        >
          Contact Us
        </Link>
      </nav>

      {/* Mobile dropdown menu */}
      <nav className="absolute left-0 top-full bg-stone-900 w-full flex-col items-center space-y-4 py-4 text-center hidden peer-checked:flex z-50 lg:hidden">
        <Link href="/news" className="block text-white hover:text-sky-500">
          News
        </Link>
        <Link href="/store" className="block text-white hover:text-sky-500">
          Store
        </Link>
        <Link href="/contact" className="block text-white hover:text-sky-500">
          Contact Us
        </Link>
        <div className="flex flex-col gap-4 items-center">
          <CartDropdown />
          {authOptions}
        </div>
      </nav>

      {/* Cart and Auth options */}
      <div className="hidden md:flex gap-4 items-center">
        <CartDropdown />
        {authOptions}
      </div>
    </header>
  );
}
