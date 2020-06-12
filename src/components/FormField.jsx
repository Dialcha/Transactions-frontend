import React from "react";

function FormField({ text, iconText, helpText }) {
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
              type="text"
              placeholder="e.g. Partnership opportunity"
            />
            <span className="icon is-small is-left">
              <i className={ "fas " + iconText }></i>
            </span>
          </div>
          <p class="help">{ helpText }</p>
        </div>
      </div>
    </div>
  );
}

export default FormField;
