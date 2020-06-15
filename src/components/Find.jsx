import React, { useState, useEffect } from "react";
import axios from "axios";

function Find() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8080/v1/transactions/");
      setData(result.data);
      console.log(result.data);
    };

    fetchData();
  }, []);

  const listElements = data.map((element) => {
    return (
      <tr>
        <td>{element.originAccount}</td>
        <td>{element.nitOriginCompany}</td>
        <td>{element.destAccount}</td>
        <td>{element.nitDestCompany}</td>
        <td>{element.paymentMethod}</td>
        <td>{element.value}</td>
        <td>{element.date}</td>
        <td>{element.anomaly}</td>
      </tr>
    );
  });

  return (
    <section className="section" style={{ marginTop: "1em" }}>
      <div className="container has-text-centered">
        <table className="table">
          <thead>
            <tr>
              <th>
                <abbr title="Origin account">Origin Account</abbr>
              </th>
              <th>
                <abbr title="NIT origin company">NIT Origin</abbr>
              </th>
              <th>
                <abbr title="Destination account">Dest. Account</abbr>
              </th>
              <th>
                <abbr title="NIT destination company">NIT Dest</abbr>
              </th>
              <th>
                <abbr title="Payment method">Payment method</abbr>
              </th>
              <th>
                <abbr title="Value">Value</abbr>
              </th>
              <th>
                <abbr title="Date">Transaction date</abbr>
              </th>
              <th>
                <abbr title="Anomaly">Anomaly</abbr>
              </th>
            </tr>
          </thead>
          <tbody>{listElements}</tbody>
        </table>
      </div>
    </section>
  );
}

export default Find;
