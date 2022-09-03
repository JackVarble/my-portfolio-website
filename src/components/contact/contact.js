import { useState } from "react";
import FormInput from "./FormInput";

import "./Contact.scss";

const Contact = () => {
  const [areaValue, setAreaValue] = useState("");

  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage: "Please enter your name!",
      label: "Name",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Please enter a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "subject",
      type: "text",
      placeholder: "Subject",
      label: "Subject",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleAreaChange = (e) => {
    setAreaValue(e.target.value);
  };

  return (
    <section id="contact" className="container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <textarea
          name="message"
          rows="7"
          placeholder="Your Message"
          className="textarea"
          value={areaValue}
          onChange={handleAreaChange}
          required
        ></textarea>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
