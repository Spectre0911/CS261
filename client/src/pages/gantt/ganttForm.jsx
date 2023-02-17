import { useFormik } from "formik";
import { Button } from "react-bootstrap";

const GanttForm = ({ handleClose }) => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        start: "",
        end: "",
        dependencies: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="name">Name</label>
      <input
        value={values.name}
        onChange={handleChange}
        id="name"
        type="string"
        placeholder="Feature name"
        onblur={handleBlur}
      />
      <label htmlFor="name">Start Date</label>
      <input
        value={values.email}
        onChange={handleChange}
        id="start"
        type="date"
        placeholder="Feature start date"
        onblur={handleBlur}
      />
      <label htmlFor="end">End Date</label>
      <input
        value={values.end}
        onChange={handleChange}
        id="end"
        type="date"
        placeholder="Feature end date"
        onblur={handleBlur}
      />
      <label htmlFor="dependencies">Dependencies</label>
      <input
        value={values.dependencies}
        onChange={handleChange}
        id="dependencies"
        type="string"
        placeholder="Dependencies"
        onblur={handleBlur}
      />
      <button type="submit">Submit</button>
      <Button
        fullWidth
        onClick={handleClose}
        sx={{
          m: "2rem 0",
          p: "1rem",
        }}
      >
        {"Cancel"}
      </Button>
    </form>
  );
};
export default GanttForm;
