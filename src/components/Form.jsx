import React from "react";
import FormField from "./FormField";

function Form({ dataForm }) {
  const data = dataForm;
  const form = data.map((field) => {
    return (
      <div className="container">
        <FormField
          text={field.text}
          helpText={field.helpText}
          iconText={field.iconText}
        />
      </div>
    );
  });
  return (
    <div className="container">
      {form}
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
