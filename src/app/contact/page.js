export default function ContactPage() {
  return (
    <div className="flex flex-row justify-center items-center h-[500px] w-[100%]">
      <div className="flex flex-col w-[30%] justify-center items-start">
        <h2 className="font-bold">Contacts</h2>
        <p>
          <span className="font-bold">Address: </span>Some Street 1, Some City,
          Somelandia
        </p>
        <p>
          <span className="font-bold">Phone: </span>+1 (123) 456-789
        </p>
        <p>
          <span className="font-bold">Email: </span>nextpixel@somemail.com
        </p>
      </div>

      <form className="flex flex-col justify-center items-start w-[50%] gap-3">
        <h2 className="font-bold">Contact Form</h2>
        <div className="flex flex-col gap-1 justify-center items-start">
          <label htmlFor="names">Name</label>
          <input
            type="text"
            id="names"
            name="names"
            placeholder="Ivan Ivanov"
            className="border-b border-stone-100 rounded bg-stone-300 w-[600px]"
          />
        </div>
        <div className="flex flex-col gap-1 justify-center items-start ">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="ivan@examplemail.com"
            className="border-b border-stone-100 rounded bg-stone-300 w-[600px]"
          />
        </div>
        <div className="flex flex-col gap-2 justify-center items-start">
          <label>Subject</label>
          <textarea className="border-b border-stone-100 rounded bg-stone-300 w-[600px]"></textarea>
        </div>
        <button className="flex bg-sky-500 py-2 px-3 rounded-md justify-end items-end">
          Submit
        </button>
      </form>
    </div>
  );
}
