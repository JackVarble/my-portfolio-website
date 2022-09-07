import useInput from "../../hooks/use-input";

import "./Contact.scss";

const emailFormat = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

const Contact = () => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    onChange: nameChangeHandler,
    onTouched: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    onChange: emailChangeHandler,
    onTouched: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => emailFormat(value));

  const {
    value: subjectValue,
    onChange: subjectChangeHandler,
    reset: subjectReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: messageValue,
    isValid: messageIsValid,
    hasError: messageHasError,
    onChange: messageChangeHandler,
    onTouched: messageBlurHandler,
    reset: messageReset,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (nameIsValid && emailIsValid && messageIsValid) {
    formIsValid = true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    nameBlurHandler();
    emailBlurHandler();
    messageBlurHandler();

    if (!formIsValid) {
      return;
    }

    const values = {
      nameValue,
      emailValue,
      subjectValue,
      messageValue,
    };
    console.log(values);
    nameReset();
    emailReset();
    messageReset();
    subjectReset();
  };

  const nameClasses = nameHasError ? "form-control error" : "form-control";
  const emailClasses = emailHasError ? "form-control error" : "form-control";
  const messageClasses = messageHasError
    ? "form-control error"
    : "form-control";

  return (
    <section id="contact" className="container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className={nameClasses}>
          <label>Name</label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={nameValue}
            onChange={nameChangeHandler}
          />
          {nameHasError && <span>Please enter your name!</span>}
        </div>
        <div className={emailClasses}>
          <label>Email</label>
          <input
            name="email"
            type="text"
            placeholder="Email Address"
            value={emailValue}
            onChange={emailChangeHandler}
          />
          {emailHasError && <span>Please enter a valid email address!</span>}
        </div>
        <div className="form-control">
          <label>Subject</label>
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            value={subjectValue}
            onChange={subjectChangeHandler}
          />
        </div>
        <div className={messageClasses}>
          <textarea
            name="message"
            className="textarea"
            rows="7"
            placeholder="Your Message"
            value={messageValue}
            onChange={messageChangeHandler}
          />
          {messageHasError && <span>Please provide a message</span>}
          <button type="submit" className="btn btn-primary btn-focus">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
