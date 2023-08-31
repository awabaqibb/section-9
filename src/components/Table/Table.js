import React from "react";

const Table = (props) => {
  const formData = props.sendingFromApp;
  const errorMessage = <p>"No data available"</p>; // Define an error message

  return (
    <div>
      {/* Show fallback text if no data is available */}
      {formData.length === 0 ? (
        errorMessage
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
              <td>INTEREST GAINED IN YEAR</td>
              <td>TOTAL INTEREST GAINED</td>
              <td>TOTAL INVESTED CAPITAL</td>
            </tr>
            {/* You can map over the formData array here to generate rows */}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
