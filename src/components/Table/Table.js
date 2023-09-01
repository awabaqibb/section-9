import React from "react";
import classes from "./Table.module.css";

const Table = (props) => {
  const formData = props.sendingFromInput;
  // Define an error message
  const errorMessage = <p style={{ textAlign: "center" }}>No data available</p>;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div>
      {/* Show fallback text if no data is available */}
      {formData.length === 0 ? (
        errorMessage
      ) : (
        <table className={classes.result}>
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
              <td>INTEREST GAINED IN YEAR</td>
              <td>TOTAL INTEREST GAINED</td>
              <td>TOTAL INVESTED CAPITAL</td>
            </tr>
            {/* You can map over the formData array here to generate rows */}
            {formData.map((value, index) => (
              <tr key={value.year}>
                <td>{value.year}</td>
                <td>{formatter.format(value.savingsEndOfYear)}</td>
                <td>{formatter.format(value.yearlyInterest)}</td>
                <td>
                  {formatter.format(
                    value.savingsEndOfYear - value.yearlyContribution
                  )}
                </td>
                <td>{formatter.format(value.yearlyContribution)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
