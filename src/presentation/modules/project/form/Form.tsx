"use client";
import React, { FC, useState } from "react";
import styles from "./form.module.css";
import { Field, Form as FormModel } from "@/domain/models/Form";
import { FirebaseSubpageMessageRepository } from "@/data/repositories/SubpageMessageRepository";
import { SendSubpageMessage } from "@/domain/useCases/articles/SendSubpageMessage";
import { SimpleAlert } from "@/presentation/common";

interface FormProps {
  urlPage: string;
  urlSubpage: string;
  page: FormModel;
}

const Form: FC<FormProps> = ({ urlPage, urlSubpage, page }) => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [alert, setAlert] = useState<{
    type: "Successful" | "Warning" | "Error";
    text: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (page.form.every((field) => field.isRequired && !formData[field.name])) {
      setAlert({
        type: "Warning",
        text: "Please fill in all the required fields.",
      });
      return;
    }

    try {
      const formRepository = new FirebaseSubpageMessageRepository();
      const sendMessage = new SendSubpageMessage(formRepository);
      await sendMessage.execute(urlPage, urlSubpage, formData);
      setAlert({ type: "Successful", text: "Form submitted successfully!" });
      setFormData({});
    } catch (error) {
      setAlert({ type: "Error", text: "Error submitting form." });
    }
  };

  const closeAlert = () => {
    setAlert(null);
  };

  return (
    <article className={styles.container}>
      {alert && (
        <SimpleAlert type={alert.type} text={alert.text} onClose={closeAlert} />
      )}

      <h2 className={styles.title}>{page.title}</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        {page.form.map((field: Field, index: number) => (
          <div className={styles.field} key={index}>
            <label className={styles.label}>{field.label}</label>
            {field.type === "textarea" ? (
              <textarea
                className={styles.input}
                name={field.name}
                placeholder={field.placeholder}
                required={field.isRequired}
                onChange={handleChange}
                value={formData[field.name] || ""}
              />
            ) : (
              <input
                className={styles.input}
                name={field.name}
                placeholder={field.placeholder}
                type={field.type}
                required={field.isRequired}
                onChange={handleChange}
                value={formData[field.name] || ""}
              />
            )}
          </div>
        ))}
        <button type="submit" className={styles.button}>
          Send
        </button>
      </form>
    </article>
  );
};

export default Form;
