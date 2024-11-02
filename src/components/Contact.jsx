import Navigation from "./Navigation";

function Contact() {
  return (
    <div>
      <Navigation />
      <div className="container mx-auto my-3 text-center">
        <h1 className="text-4xl font-black mb-12 text-darkViolet text-center">
          Contact us
        </h1>
        <div></div>
        <form
          action=""
          className="flex flex-col max-w-sm mx-auto space-y-3 mt-4"
        >
          <h3 className="text-gray-500 mb-3">
            To send your suggestions fill the form below :
          </h3>

          <input
            type="email"
            className="border border-gray-500 outline-none px-2 py-2 rounded-sm"
            placeholder="Enter your email address.."
          />
          <textarea
            className="outline-none border border-gray-500 px-2 py-2"
            rows={7}
            cols={10}
            name=""
            id=""
            placeholder="Your message..."
          ></textarea>
          <button
            type="submit"
            className="bg-darkViolet text-white font-bold py-2 px-4 rounded-sm"
          >
            Sent
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
