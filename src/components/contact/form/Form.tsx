import styles from "./Form.module.css";

function Form() {
  return (
    <form className={styles.form}>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>What&apos;s your name? *</label>
        <input
          className={styles.inputText}
          type="text"
          placeholder="Un nombre aquí"
        />
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>What&apos;s your email? *</label>
        <input
          className={styles.inputText}
          type="email"
          placeholder="Un email aquí"
        />
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>What&apos;s your number? *</label>
        <input
          className={styles.inputText}
          type="tel"
          placeholder="Un number aquí"
        />
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>Your subject *</label>
        <input
          className={styles.inputText}
          type="text"
          placeholder="Un asunto aquí"
        />
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>Your message *</label>
        <input
          className={styles.inputText}
          type="text"
          placeholder="Un mensaje aquí"
        />
      </div>
      <div className={styles.inputContainer}>
        <legend className={styles.inputLabel}>
          What type of project are you interested in? *
        </legend>
        <ul className={styles.inputList}>
          <li>
            <label className={styles.inputRadioContainer}>
              <input className={styles.inputRadio} type="radio" />
              Web development
            </label>
          </li>
          <li>
            <label className={styles.inputRadioContainer}>
              <input className={styles.inputRadio} type="radio" />
              Mobile development
            </label>
          </li>
          <li>
            <label className={styles.inputRadioContainer}>
              <input className={styles.inputRadio} type="radio" />
              Other Software
            </label>
          </li>
        </ul>
      </div>
      <div className={styles.inputContainer}>
        <legend className={styles.inputLabel}>
          When do you need your project to be completed? *
        </legend>
        <ul className={styles.inputList}>
          <li>
            <label className={styles.inputRadioContainer}>
              <input className={styles.inputRadio} type="radio" />
              As soon as possible
            </label>
          </li>
          <li>
            <label className={styles.inputRadioContainer}>
              <input className={styles.inputRadio} type="radio" />
              In a week
            </label>
          </li>
          <li>
            <label className={styles.inputRadioContainer}>
              <input className={styles.inputRadio} type="radio" />
              In a month
            </label>
          </li>
          <li>
            <label className={styles.inputRadioContainer}>
              <input className={styles.inputRadio} type="radio" />
              In six months
            </label>
          </li>
          <li>
            <label className={styles.inputRadioContainer}>
              <input className={styles.inputRadio} type="radio" />
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
              <input className={styles.inputRadio} type="radio" />
              Linkedin
            </label>
          </li>
          <li>
            <label className={styles.inputRadioContainer}>
              <input className={styles.inputRadio} type="radio" />
              Twitter
            </label>
          </li>
          <li>
            <label className={styles.inputRadioContainer}>
              <input className={styles.inputRadio} type="radio" />
              Surfing the web
            </label>
          </li>
          <li>
            <label className={styles.inputRadioContainer}>
              <input className={styles.inputRadio} type="radio" />
              Recommendation
            </label>
          </li>
        </ul>
      </div>
      <button className={styles.button}>Send</button>
    </form>
  );
}

export default Form;
