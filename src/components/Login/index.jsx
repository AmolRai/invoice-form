import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router";
import useAuthCheck from "../../hooks/useAuthCheck";
import styles from "./style.module.css";

const Login = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useAuthCheck();

  const validateLoginForm = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "Username is required";
    } else if (values.username.length < 3) {
      errors.username = "Username must be at least 3 characters";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  const handleSubmit = (values) => {
    localStorage.setItem("isAuthenticated", true);
    navigate("/invoice-form");
  };

  if (loading) return <div>Loading...</div>;
  if (isAuthenticated) navigate("/invoice-form");

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validate={(values) => validateLoginForm(values)}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <h1>Login</h1>
          <div>
            <Field
              name="username"
              type="text"
              placeholder="Username"
              className={styles.input}
            />
            <ErrorMessage
              name="username"
              component="div"
              style={{ color: "red", marginTop: "5px" }}
            />
          </div>

          <div>
            <Field
              name="password"
              type="password"
              placeholder="Password"
              className={styles.input}
            />
            <ErrorMessage
              name="password"
              component="div"
              style={{ color: "red", marginTop: "5px" }}
            />
          </div>

          <button
            className={styles.login}
            type="submit"
            disabled={isSubmitting}
          >
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
