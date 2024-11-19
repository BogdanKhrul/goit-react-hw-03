import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Имя должно содержать минимум 3 символа")
    .max(50, "Имя должно содержать максимум 50 символов")
    .required("Поле имени обязательно"),
  number: Yup.string()
    .min(3, "Номер должен содержать минимум 3 символа")
    .max(50, "Номер должен содержать максимум 50 символов")
    .required("Поле номера обязательно"),
});

const ContactForm = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={onAddContact}
    >
      <Form>
        <label>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </label>
        <label>
          Number
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="div" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
