import React from "react";

function Contact() {
  return (
    <div id="contact">
      <h1>BOOK YOUR TABLE</h1>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Type your E-mail" />
        <textarea type="text" placeholder="Write Here" />
        <input type="submit" value="Book" />
      </form>
    </div>
  );
}

export default Contact;
