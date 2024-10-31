import Navigation from "./Navigation";

function Contact() {
  return (
    <div>
      <Navigation />
      <div className="container mx-auto my-3">
        <h1 className="text-4xl font-black text-darkViolet text-center">
          Contact us
        </h1>
        <form action="">
          <input type="text" placeholder="Enter your email address.." />
          <textarea name="" id="" placeholder="for us"></textarea>
        </form>
      </div>
    </div>
  );
}

export default Contact;
