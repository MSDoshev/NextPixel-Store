export default function ContactPage() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-auto lg:h-[500px] w-full p-6 lg:p-10 bg-gray-100">
      <div className="flex flex-col w-full lg:w-1/3 justify-start items-start mb-10 lg:mb-0">
        <h2 className="text-3xl font-bold mb-4">Contacts</h2>
        <p className="mb-2">
          <span className="font-bold">Address:</span> Some Street 1, Some City,
          Somelandia
        </p>
        <p className="mb-2">
          <span className="font-bold">Phone:</span> +1 (123) 456-789
        </p>
        <p className="mb-2">
          <span className="font-bold">Email:</span> nextpixel@somemail.com
        </p>
      </div>

      <form className="flex flex-col w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg space-y-4">
        <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
        <div className="flex flex-col">
          <label htmlFor="names" className="mb-2 text-lg font-medium">
            Name
          </label>
          <input
            type="text"
            id="names"
            name="names"
            placeholder="Ivan Ivanov"
            className="border border-gray-300 p-3 rounded-lg focus:border-sky-500 focus:ring-2 focus:ring-sky-500 focus:outline-none transition duration-200 ease-in-out"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 text-lg font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="ivan@examplemail.com"
            className="border border-gray-300 p-3 rounded-lg focus:border-sky-500 focus:ring-2 focus:ring-sky-500 focus:outline-none transition duration-200 ease-in-out"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="subject" className="mb-2 text-lg font-medium">
            Subject
          </label>
          <textarea
            id="subject"
            placeholder="Enter your subject"
            className="border border-gray-300 p-3 rounded-lg focus:border-sky-500 focus:ring-2 focus:ring-sky-500 focus:outline-none transition duration-200 ease-in-out"
          ></textarea>
        </div>
        <button className="w-full bg-sky-500 text-white py-3 rounded-lg hover:bg-sky-600 transition duration-200 ease-in-out">
          Submit
        </button>
      </form>
    </div>
  );
}
