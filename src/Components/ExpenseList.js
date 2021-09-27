import React from "react";
import Item from "./ExpenseItem";
import { MdDelete } from "react-icons/md";
const ExpenseList = (props) => {
  console.log(props);
  return (
    <div>
      <ul className="List">
        {props.expenses.map((expenses) => {
          return <Item key={expenses.id} expenses={expenses} deleteItem={props.deleteItem} editeItem={props.editeItem} />;
        })}
      </ul>
      
      {props.expenses.length > 0 && (
        <button className="btn" onClick={props.clearAllItem}>
          clear expenses
          <MdDelete className="btn-icon" />
        </button>
      )}
    </div>
  );
};
export default ExpenseList;
