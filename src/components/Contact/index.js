import React, { useState } from "react";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }
//   console.log(formState);

  return (
    <section>
      <h1>Contact Me</h1>
      <form id="contact-form">
        {/* name input */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onChange={handleChange}
          />
        </div>
        {/* email input */}
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onChange={handleChange}
          />
        </div>
        {/* message text area input */}
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
