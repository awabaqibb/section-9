import React, { useState } from "react";
import CalculateHandler from "../CalculateHandler/CalculateHandler";

const InputForm = (props) => {
  const initialUserInput = {
    "current-savings": 0,
    "yearly-contribution": 0,
    "expected-return": 0,
    duration: 0,
  };

  const [formData, setFormData] = useState(initialUserInput);

  const resetHandler = () => {
    setFormData(initialUserInput);

    //console.log("reset");
  };

  const changeHandler = (input, value) => {
    //console.log(input, value);

    setFormData((prevState) => {
      return {
        ...prevState,
        [input]: value,
      };
    });
  };

  const calculateHandler = () => {
    //console.log("calculated");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.sendingToParent(formData);
    //console.log("submitted");
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              onChange={(event) =>
                changeHandler("current-savings", event.target.value)
              }
              value={formData["current-savings"]}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={(event) =>
                changeHandler("yearly-contribution", event.target.value)
              }
              value={formData["yearly-contributions"]}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              onChange={(event) =>
                changeHandler("expected-return", event.target.value)
              }
              value={formData["expected-return"]}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              onChange={(event) =>
                changeHandler("duration", event.target.value)
              }
              value={formData["duration"]}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={resetHandler}>
            Reset
  