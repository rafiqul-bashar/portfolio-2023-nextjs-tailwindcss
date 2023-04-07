import React, { useRef, useState } from "react";

export default function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    resetForm();
  };

  return (
    <section
      id="contact"
      className="select-none container mx-auto my-12 md:my-16 p-4
       "
    >
      <h1 className="my-20 text-4xl font-semibold tracking-tight dark:text-primary  md:text-5xl text-center">
        Get In Touch
      </h1>
      <div className="my-5">
        <form
          className="space-y-4 lg:w-[70%] mx-auto"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="grid gap-6 grid-cols-1  md:grid-cols-2">
            <div>
              <label htmlFor="name" className="contact-label">
                Your Name
              </label>

              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                name="name"
                placeholder="example: Jhony Depp"
                className="contact-input "
              />
            </div>
            <div>
              <label htmlFor="email" className="contact-label">
                Your Email
              </label>

              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                name="email"
                placeholder="example: jhony@mail.com"
                className="contact-input"
              />
            </div>
          </div>

          <label htmlFor="message" className="contact-label">
            {" "}
            Message
          </label>

          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            type="text"
            name="message"
            placeholder="example: Hey Jhony wants to say something!"
            className="contact-input h-28 resize-none"
          />

          <button
            type="submit"
            className="rounded bg-primary px-4 py-2.5 font-bold  shadow-lg hover:brightness-110 text-black w-full"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
