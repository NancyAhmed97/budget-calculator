import "./App.css";
import Alert from "./Components/Alert";
import ExpenseList from "./Components/ExpenseList";
import ExpensForm from "./Components/ExpensForm";
import uuid from "uuid/dist/v4";
import React, { useState,useEffect } from "react";
// const intialExpense = [
//   { id: uuid(), charge: "rent", amount: 1600 },
//   { id: uuid(), charge: "car payment", amount: 400 },
//   { id: uuid(), charge: "credit card", amount: 1200 },
// ];
const intialExpense = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

function App() {
  const [expenses, setExpenses] = useState(intialExpense);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);
  useEffect(() => {
    console.log("called");

    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };
  const handleSubmit = (e) => {
    // e.preventdefoult();
    e.preventDefault();
    console.log(charge, amount);
    if (charge !== "" && amount > 0) {
      if (edit) {
        let tempExpenses=expenses.map((item=>{
          return item.id===id?{...item,charge,amount}:item
        }))
        setExpenses(tempExpenses)
        setEdit(false)
        handleAlert({ type: "success", text: "item edit" });

      } else {
        const singleExpenses = { id: uuid(), charge, amount };
        setExpenses([...expenses, singleExpenses]);
        handleAlert({ type: "success", text: "item addes" });
      }

      setCharge("");
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: `charge can't be empty value and amount value has to be bigger than zero`,
      });
    }
  };
  const clearAllItem = () => {
    setExpenses([]);
    handleAlert({ type: "danger", text: "All Items Deletes" });
  };
  const deleteItem = (id) => {
    // console.log(`delete thtis :${id}`);
    let tempExpenses = expenses.filter((item) => item.id !== id);
    console.log(tempExpenses);
    setExpenses(tempExpenses);
    handleAlert({ type: "danger", text: "Item Deletes" });
  };

  const editeItem = (id) => {
    let expense = expenses.find((item) => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
    console.log(expense);
  };
  return (
    <>
      {alert.show && <Alert text={alert.text} type={alert.type} />}
      <Alert />
      <h1>budget calculator</h1>
      <main className="App">
        <ExpensForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <ExpenseList
          expenses={expenses}
          editeItem={editeItem}
          deleteItem={deleteItem}
          clearAllItem={clearAllItem}
        />
      </main>
      <h1>
        Total spending :
        <span className="total">
          $
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
