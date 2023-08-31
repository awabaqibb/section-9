import React from "react";

const Table = (props) => {
  const formData = props.sendingFromApp;
  const errorMessage = "No data available"; // Define an error message

  return (
    <div>
      {/* Show fallback text if no data is available */}
      {formData.length === 0 ? (
        <p>{errorMessage}</p>
      ) : (
        <table className="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Total Savings</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>YEAR NUMBER</td>
              <td>TOTAL SAVINGS END OF YEAR</td>
              <td>INTEREST