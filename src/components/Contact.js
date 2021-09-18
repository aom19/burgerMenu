import React, { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_o99iqnn",
        "template_16itxzm",
        form.current,
        "user_jubcevDArAefYzhdrnJhz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };
  return (
    <div id="contact">
      <h1>BOOK YOUR TABLE</h1>
      <form onSubmit={sendEmail} ref={form}>
        <input type="text" placeholder="Full Name" name="name" />
        <input type="email" placeholder="Type your E-mail" name="email" />
        <textarea type="text" placeholder="Write Here" name="message" />
        <input type="submit" onClick={sendEmail} />
      </form>
    </div>
  );
}

export default Contact;
