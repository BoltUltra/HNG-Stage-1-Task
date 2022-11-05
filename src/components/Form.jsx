import { Form, Formik, Field } from "formik";
import validator from "validator";

const ContactForm = () => {
  const name = "Mayowa Sunusi";
  const validateForm = (values) => {
    const errors = {};

    if (!values.first_name) {
      errors.first_name = "First name is required";
    } else if (values.first_name.length > 15) {
      errors.first_name = "Must be 15 characters or less";
    }

    if (!values.last_name) {
      errors.last_name = "Last name is required";
    } else if (values.last_name.length > 15) {
      errors.last_name = "Must be 15 characters or less";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!validator.isEmail(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.message) {
      errors.message = "Please enter a message";
    } else if (values.message.length > 250) {
      errors.message = "Must be 250 characters or less";
    }
    return errors;
  };
  return (
    <Formik
      initialValues={{ first_name: "", last_name: "", email: "", message: "" }}
      validate={validateForm}
    >
      {(formik) => (
        <form className="py-10 space-y-4" action="/success">
          <div className="grid md:grid-cols-2 md:gap-5 md:space-y-0 space-y-4">
            <div className="label">
              <label htmlFor="first_name" className="text-sm">
                First Name
              </label>
              <Field
                type="text"
                className={
                  formik.touched.first_name && formik.errors.first_name
                    ? "input-invalid"
                    : "input"
                }
                name="first_name"
                id="first_name"
                placeholder="Enter your first name"
                required
              />
              {formik.touched.first_name && formik.errors.first_name ? (
                <div className="input-invalid-text">
                  {formik.errors.first_name}
                </div>
              ) : null}
            </div>
            <div className="label">
              <label htmlFor="last_name" className="text-sm">
                Last Name
              </label>
              <Field
                type="text"
                className={
                  formik.touched.last_name && formik.errors.last_name
                    ? "input-invalid"
                    : "input"
                }
                name="last_name"
                id="last_name"
                placeholder="Enter your last name"
                required
              />
              {formik.touched.last_name && formik.errors.last_name ? (
                <div className="input-invalid-text">
                  {formik.errors.last_name}
                </div>
              ) : null}
            </div>
          </div>
          <div className="label">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <Field
              type="email"
              className={
                formik.touched.email && formik.errors.email
                  ? "input-invalid"
                  : "input"
              }
              name="email"
              id="email"
              placeholder="yourname@email.com"
              required
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="input-invalid-text">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="label">
            <label htmlFor="email" className="text-sm">
              Message
            </label>
            <Field
              as="textarea"
              name="message"
              id="message"
              cols="30"
              rows="5"
              className={
                formik.touched.message && formik.errors.message
                  ? "input-invalid"
                  : "input"
              }
              placeholder="Send me a message and I'll reply you as soon as possible..."
              required
            ></Field>
            {formik.touched.message && formik.errors.message ? (
              <div className="input-invalid-text">{formik.errors.message}</div>
            ) : null}
          </div>
          <div className="flex items-start space-x-2 md:items-center pb-5">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              className=""
              required
            />
            <label
              htmlFor="agree"
              className="text-sm text-gray-600 cursor-pointer"
            >
              You agree to providing your data to {name} who may contact you.
            </label>
          </div>
          <button
            type="submit"
            id="btn__submit"
            className="text-center w-full text-white bg-blue-500 text-sm py-3 rounded-xl"
          >
            Send Message
          </button>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
