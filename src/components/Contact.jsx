import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>
      <form action="https://api.web3forms.com/submit" method="POST">
        <input
          type="hidden"
          name="access_key"
          value={CONTACT.Key} // Use environment variable
        />

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center mb-10"
        >
          <div className="border-2 rounded-xl p-5 flex gap-5 justify-center flex-wrap w-[700px]">
            <div>
              <label htmlFor="name" className="text-xl text-white">
                Name
              </label>
              <br />
              <input
                name="name"
                type="text"
                className="w-[318px] p-2 rounded text-[#000000] outline-none"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xl text-white">
                Email
              </label>
              <br />
              <input
                type="email"
                name="email"
                className="w-[318px] p-2 rounded text-[#000000] outline-none"
                placeholder="Email"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="message" className="text-xl text-white">
                Message
              </label>
              <br />
              <textarea
                required
                name="message"
                rows="7"
                className="w-full rounded outline-none p-3 text-[#000000]"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="w-full h-[50px]">
              <button
                type="submit"
                className="p-3 font-semibold text-xl border w-full bg-[#000000] text-white rounded hover:text-[#000000] hover:bg-white hover:border-none"
              >
                Submit
              </button>
            </div>
          </div>
        </motion.div>
      </form>

      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          href="#"
          className="border-b"
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
