import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import { useState } from "react";

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [buttonText, setButtonText] = useState("Send Message");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    
    setName("");
    setEmail("");
    setMessage("");
    setIsSent(true);
    setButtonText("Submitted");

    
    setTimeout(() => {
      setIsSent(false);
      setButtonText("Send Message");
    }, 2000);
  };
  return (
    <section
      id="contact"
      className="z-50 bg-gray-800 relative py-10 px-5 md:px-0"
    >
      <div className="mb-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
            <h2 className="text-3xl font-bold mb-3 text-red-500">
              Get in Touch
            </h2>
            <p className="mb-4 text-white/85">
              I'm always open to new opportunities and collaboration. Feel free
              to reach out!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/dibyendu.panja"
                target="_blank"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src={facebook} alt="" className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/rdp_s2000?igsh=c3BmYjY4NXNhaXJ6"
                target="_blank"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src={instagram} alt="" className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/dibyendupanja/"
                target="_blank"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src={linkedin} alt="" className="h-6 w-6" />
              </a>
            </div>
           
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 bg-white rounded-2xl border border-red-300 shadow-lg shadow-red-400 p-8 md:p-10 space-y-6"
          >
            <h1 className="text-gray-900 text-4xl font-bold mb-2 text-center">
              Contact Me
            </h1>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                required={true}
                id="name"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-red-200 focus:border-red-400 transition"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required={true}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-red-200 focus:border-red-400 transition"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                required={true}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter Your Message"
                rows="4"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-red-200 focus:border-red-400 transition"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSent}
              className={`w-full text-white font-semibold rounded-lg px-5 py-3 shadow-md transition duration-200 ease-in-out ${
                isSent
                  ? "bg-green-600 hover:bg-green-700 focus:ring-green-300"
                  : "bg-red-500 hover:bg-red-600 focus:ring-red-300"
              }`}
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
