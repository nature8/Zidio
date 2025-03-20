// import styled from "styled-components";
// import {useState} from "react";
// import React, {useEffect} from 'react';
// import OverviewComponent from "./OverviewComponent"
// import TransactionComponent from "./TransactionComponent"
// //import React, {useState} from 'react';

// //import { BrowserRouter } from 'react-router-dom';

// const Container = styled.div`
// display: flex;
// flex-direction: column;
// align-items: center;
// margin: 30px 0 10px;
// font-family: Oswald;
// width: 360px;
// `;
// const HomeComponent = (props) => {
//     const [transaction, updateTransaction] = useState([]);
//     const [expense, updateExpense] = useState(0);
//     const [income, updateIncome] = useState(0);

//     const addTransaction = (payload) => {
//         const transactionArray = [...transaction];
//         transactionArray.push(payload);
//         updateTransaction(transactionArray);
//     };
//     const calculateBalance = () => {
//         let exp = 0;
//         let inc = 0;
//         transaction.map((payload)=>{
//             payload.type === "EXPENSE"
//             ? (exp = exp + payload.amount)
//             : (inc = inc + payload.amount);
//         });
//         updateExpense(exp);
//         updateIncome(inc);
//     };

//     useEffect(() => calculateBalance(), [transaction]);
//     return(
//         <Container>
//             <OverviewComponent addTransaction={addTransaction} expense={expense} income={income}/>
//             <TransactionComponent transaction={transaction}/>
//             </Container>
//     );
// };
// export default HomeComponent


import styled from "styled-components";
import { useState, useCallback, useEffect } from "react";
import OverviewComponent from "./OverviewComponent";
import TransactionComponent from "./TransactionComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
  font-family: Oswald;
  width: 360px;
`;

const HomeComponent = () => {
  const [transaction, updateTransaction] = useState([]);
  const [expense, updateExpense] = useState(0);
  const [income, updateIncome] = useState(0);

  const addTransaction = (payload) => {
    updateTransaction([...transaction, payload]);
  };

  const calculateBalance = useCallback(() => {
    let exp = 0;
    let inc = 0;
    transaction.forEach((payload) => { // ✅ Changed map() to forEach()
      if (payload.type === "EXPENSE") {
        exp += payload.amount;
      } else {
        inc += payload.amount;
      }
    });
    updateExpense(exp);
    updateIncome(inc);
  }, [transaction]); // ✅ Wrapped in useCallback

  useEffect(() => {
    calculateBalance();
  }, [calculateBalance]); // ✅ Added as a dependency

  return (
    <Container>
      <OverviewComponent addTransaction={addTransaction} expense={expense} income={income} />
      <TransactionComponent transaction={transaction} />
    </Container>
  );
};

export default HomeComponent;
