import React from "react";
import { Field, ErrorMessage } from "formik";
import styles from "./style.module.css";
import { IoIosArrowDown } from "react-icons/io";

const Input = ({
  label,
  name,
  type = "text",
  iconSrc,
  placeholder,
  showArrowIcon,
}) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={name} className={styles.inputLabel}>
        {label}
      </label>

      <div className={styles.inputWrapper}>
        {iconSrc && (
          <img src={iconSrc} alt="icon" className={styles.inputIcon} />
        )}
        <Field
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          className={`${styles.input} ${iconSrc ? styles.paddingLeft : ""}`}
        />
        {showArrowIcon && (
          <IoIosArrowDown className={styles.secondaryInputIcon} />
        )}
      </div>

      <ErrorMessage name={name} component="div" className={styles.error} />
    </div>
  );
};

export default Input;
