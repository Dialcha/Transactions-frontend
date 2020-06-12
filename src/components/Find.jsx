import React, { useState, useEffect } from "react";
import axios from "axios";

function Find() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8080/api/transactions/");
      setData(result.data);
      console.log(result.data);
    };

    fetchData();
  }, []);

    const listElements = data.map(element => <h1>{element.destAccount}</h1>);

  return (
    listElements
  );
}

export default Find;

//<ul>
//     {data.transactions.map((transaction) => (
//        <li key={transaction._id}>
//         <h1>{transaction._id}</h1>
//       <h3>{transaction.originAccount}</h3>
//   </li // ))}
//</ul>
