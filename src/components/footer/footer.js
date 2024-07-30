// components/footer/footer.js
export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-row gap-5 justify-between">
          <div className="flex flex-col w-96">
            <h2 className="text-xl font-bold">NextPixel</h2>
            <p className="mt-2 text-sm">
              At NextPixel, we are passionate about bringing you the latest and
              greatest in video gaming. From classic titles to the newest
              releases, we offer a curated selection of games for every type of
              gamer. Join our community and experience the next level of gaming.
            </p>
          </div>

          <div className="flex flex-col">
            <h2 className="text-xl font-bold">Quick Links</h2>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:underline">
                  Shop
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
    
              <li>
                <a href="/privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h2 className="text-xl font-bold">Contact Us</h2>
            <p className="mt-2 text-sm">Email: support@nextpixel.com</p>
            <p className="mt-2 text-sm">Phone: +1 234 567 890</p>
            <p className="mt-2 text-sm">
              Address: 123 Gaming Street, Gamerville, GA
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">Newsletter</h2>
            <form className="mt-2 flex">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 rounded-l-lg bg-gray-700 text-white focus:outline-none"
              />
              <button className="p-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} NextPixel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
