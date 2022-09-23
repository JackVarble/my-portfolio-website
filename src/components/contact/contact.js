import React, { useRef, useState } from "react";
import useInput from "../../hooks/use-input";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";

import "./Contact.scss";

const emailFormat = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

const Contact = () => {
  const formRef = useRef();

  const [successVisible, setSuccessVisible] = useState(false);
  const [isError, setIsError] = useState(false);

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

    // const values = {
    //   nameValue: nameValue.trim(),
    //   emailValue: emailValue.trim(),
    //   subjectValue: subjectValue.trim(),
    //   messageValue: messageValue.trim(),
    // };
    // console.log(values);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSuccessVisible(true);
          console.log(result.text);
          setTimeout(() => {
            setSuccessVisible(false);
          }, [2000]);
        },
        (error) => {
          setIsError(true);
          console.log(error.text);
          setTimeout(() => {
            setIsError(false);
          }, [2000]);
        }
      );

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
      <form ref={formRef} onSubmit={handleSubmit}>
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
          {messageHasError && <span>Please provide a message!</span>}
          <div className="flex-container">
            <button type="submit" className="btn btn-primary btn-focus">
              Send Message
            </button>
            <AnimatePresence>
              {successVisible && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="modal-success"
                >
                  Submitted Successfully!
                </motion.div>
              )}
              {isError && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="modal-success error"
                >
                  Something went wrong! Please try again.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
