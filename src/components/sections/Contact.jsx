import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    let validEmail = validator.isEmail(email);
    if (!email || !name) {
      return toast.error("You should write Your Name and Email first ! ");
    }
    if (name && name.length <= 8) {
      return toast.error("Try entering your full name.  ");
    }
    if (!validEmail) {
      return toast.error("This doesn't looks like a valid email.  ");
    }
    if (!message) {
      return toast.error("Message field should not be empty!  ");
    }
    if (message && message.length <= 10) {
      return toast.error("Your message doesn't looks like a proper one!  ");
    }
    const messageToast = toast.loading("Please wait...");
    try {
      const res = emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      );

      setTimeout(() => {
        toast.update(messageToast, {
          render: "Message Sent Successfully! I will reach you soon.",
          type: "success",
          isLoading: false,
        });
        resetForm();
      }, 1300);
    } catch {
      toast.update(messageToast, {
        render: "Something went wrong ! Try again later.",
        type: "error",
        isLoading: false,
      });
      resetForm();
    }
  };

  return (
    <section
      id="contact"
      className="select-none container mx-auto mt-12 md:my-16 p-4
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
                isrequired="true"
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
                isrequired="true"
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

      <ToastContainer limit={1} />
    </section>
  );
}
