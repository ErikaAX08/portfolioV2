"use client";
import styles from "./Form.module.css";
import { FormEvent, useState } from "react";
import { SimpleAlert } from "@/presentation/common";
import { Message } from "@/domain/models/Message";
import { FirebaseMessageRepository } from "@/data/repositories/ContactRepository";
import { SubmitMessage } from "@/domain/useCases/contact/SubmitMessage";

const formInitialState: Message = {
  name: "",
  email: "",
  number: "",
  subject: "",
  message: "",
  projectType: "web",
  completionTime: "asap",
  foundBy: "linkedin",
};

function Form() {
  const [formData, setFormData] = useState<Message>(formInitialState);
  const [alert, setAlert] = useState<{
    type: "Successful" | "Warning" | "Error";
    text: string;
  } | null>(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.number ||
      !formData.subject ||
      !formData.message
    ) {
      setAlert({ type: "Warning", text: "Please fill in all the fields." });
      return;
    }

    const messageRepository = new FirebaseMessageRepository();
    const submitMessage = new SubmitMessage(messageRepository);

    try {
      await submitMessage.execute(formData);
      setAlert({ type: "Successful", text: "Form submitted successfully!" });
      setFormData(formInitialState);
    } catch (error) {
      console.error("Error submitting form: ", error);
      setAlert({ type: "Error", text: "Error submitting form." });
    }
  };

  const closeAlert = () => {
    setAlert(null);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label className={styles.inputLabel}>What&apos;s your name? *</label>
          <input
            className={styles.inputText}
            type="text"
            placeholder="Gregory House"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.inputLabel}>What&apos;s your email? *</label>
          <input
            className={styles.inputText}
            type="email"
            placeholder="house.md@plainsboro.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.inputLabel}>
            What&apos;s your number? *
          </label>
          <input
            className={styles.inputText}
            type="tel"
            name="number"
            placeholder="+1 555 123 4567"
            value={formData.number}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.inputLabel}>Your subject *</label>
          <input
            className={styles.inputText}
            type="text"
            placeholder="I'm looking for a competent programmer."
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.inputLabel}>Your message *</label>
          <input
            className={styles.inputText}
            type="text"
            placeholder="Please, only apply if you're prepared to face the unique challenges of this project."
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <legend className={styles.inputLabel}>
            What type of project are you interested in? *
          </legend>
          <ul className={styles.inputList}>
            <li>
              <label
                htmlFor="projectType1"
                className={styles.inputRadioContainer}
              >
                <input
                  className={styles.inputRadio}
                  type="radio"
                  id="projectType1"
                  name="projectType"
                  value="web"
                  checked={formData.projectType === "web"}
                  onChange={handleChange}
                />
                Web development
              </label>
            </li>
            <li>
              <label
                htmlFor="projectType2"
                className={styles.inputRadioContainer}
              >
                <input
                  className={styles.inputRadio}
                  type="radio"
                  id="projectType2"
                  name="projectType"
                  value="mobile"
                  checked={formData.projectType === "mobile"}
                  onChange={handleChange}
                />
                Mobile development
              </label>
            </li>
            <li>
              <label
                htmlFor="projectType3"
                className={styles.inputRadioContainer}
              >
                <input
                  className={styles.inputRadio}
                  type="radio"
                  id="projectType3"
                  name="projectType"
                  value="other"
                  checked={formData.projectType === "other"}
                  onChange={handleChange}
                />
                Other Software
              </label>
            </li>
          </ul>
        </div>
        <div className={styles.inputContainer}>
          <legend className={styles.inputLabel}>
            When do you need this project completed? *
          </legend>
          <ul className={styles.inputList}>
            <li>
              <label className={styles.inputRadioContainer}>
                <input
                  className={styles.inputRadio}
                  type="radio"
                  name="completionTime"
                  value="asap"
                  checked={formData.completionTime === "asap"}
                  onChange={handleChange}
                />
                As soon as possible
              </label>
            </li>
            <li>
              <label className={styles.inputRadioContainer}>
                <input
                  className={styles.inputRadio}
                  type="radio"
                  name="completionTime"
                  value="week"
                  checked={formData.completionTime === "week"}
                  onChange={handleChange}
                />
                In a week
              </label>
            </li>
            <li>
              <label className={styles.inputRadioContainer}>
                <input
                  className={styles.inputRadio}
                  type="radio"
                  name="completionTime"
                  value="month"
                  checked={formData.completionTime === "month"}
                  onChange={handleChange}
                />
                In a month
              </label>
            </li>
            <li>
              <label className={styles.inputRadioContainer}>
                <input
                  className={styles.inputRadio}
                  type="radio"
                  name="completionTime"
                  value="sixMonths"
                  checked={formData.completionTime === "sixMonths"}
                  onChange={handleChange}
                />
                In six months
              </label>
            </li>
            <li>
              <label className={styles.inputRadioContainer}>
                <input
                  className={styles.inputRadio}
                  type="radio"
                  name="completionTime"
                  value="moreThanSixMonths"
                  checked={formData.completionTime === "moreThanSixMonths"}
                  onChange={handleChange}
                />
                More than six months
              </label>
            </li>
          </ul>
        </div>
        <div className={styles.inputContainer}>
          <legend className={styles.inputLabel}>
            How did you find out about me? *
          </legend>
          <ul className={styles.inputList}>
            <li>
              <label className={styles.inputRadioContainer}>
                <input
                  className={styles.inputRadio}
                  type="radio"
                  name="foundBy"
                  value="linkedin"
                  checked={formData.foundBy === "linkedin"}
                  onChange={handleChange}
                />
                Linkedin
              </label>
            </li>
            <li>
              <label className={styles.inputRadioContainer}>
                <input
                  className={styles.inputRadio}
                  type="radio"
                  name="foundBy"
                  value="twitter"
                  checked={formData.foundBy === "twitter"}
                  onChange={handleChange}
                />
                Twitter
              </label>
            </li>
            <li>
              <label className={styles.inputRadioContainer}>
                <input
                  className={styles.inputRadio}
                  type="radio"
                  name="foundBy"
                  value="webSurfing"
                  checked={formData.foundBy === "webSurfing"}
                  onChange={handleChange}
                />
                Surfing the web
              </label>
            </li>
            <li>
              <label className={styles.inputRadioContainer}>
                <input
                  className={styles.inputRadio}
                  type="radio"
                  name="foundBy"
                  value="recommendation"
                  checked={formData.foundBy === "recommendation"}
                  onChange={handleChange}
                />
                Recommendation
              </label>
            </li>
          </ul>
        </div>
        <button className={styles.button} onClick={handleSubmit}>
          Send
        </button>
      </form>
      {alert && (
        <SimpleAlert type={alert.type} text={alert.text} onClose={closeAlert} />
      )}
    </>
  );
}

export default Form;
