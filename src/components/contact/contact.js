import { useState } from "react";

import "./Contact.scss";

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Name</label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={onChange}
            required
          />
          <span>Please enter your name!</span>
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="Email address"
            onChange={onChange}
            required
          />
          <span>Please enter a valid email address!</span>
        </div>
        <div className="form-control">
          <label>Subject</label>
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            onChange={onChange}
          />
        </div>
        <div className="form-control">
          <textarea
            name="message"
            className="textarea"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary btn-focus">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
