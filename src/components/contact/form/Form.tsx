import styles from "./Form.module.css";

function Form() {
  return (
    <form className={styles.form}>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>What&apos;s your name? *</label>
        <input
          className={styles.inputText}
          type="text"
          placeholder="Gregory House"
        />
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>What&apos;s your email? *</label>
        <input
          className={styles.inputText}
          type="email"
          placeholder="house.md@plainsboro.com"
        />
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>What&apos;s your number? *</label>
        <input
          className={styles.inputText}
          type="tel"
          placeholder="+1 555 123 4567"
        />
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>Your subject *</label>
        <input
          className={styles.inputText}
          type="text"
          placeholder="I'm looking for a competent programmer, if one exists."
        />
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>Your message *</label>
        <input
          className={styles.inputText}
          type="text"
          placeholder="Please, only apply if you're prepared to face the unique challenges of this project."
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
              />
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
