import React from "react";

function FormField({ text, iconText, helpText, name, placeholder, handleChange, type }) {

  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label">{text}</label>
      </div>
      <div className="field-body">
        <div className="field">
          <div className="control has-icons-left">
            <input
              className="input"
              type={type}
              placeholder={placeholder}
              name={name}
              onChange={ handleChange }
            />
            <span className="icon is-small is-left">
              <i className={"fas " + iconText}></i>
            </span>
          </div>
          <p class="help">{helpText}</p>
        </div>
      </div>
    </div>
  );
}

export default FormField;
