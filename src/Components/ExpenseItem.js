import React from "react";
import { MdDelete,MdEdit } from "react-icons/md";
const ExpenseItem = (props) => {
    console.log(props);
  const id = props.expenses.id;
  const charge = props.expenses.charge;
  const amount = props.expenses.amount;
  return (
    <>
      <li className="item">
        <div className="info">
          <span className="expenses">{charge}</span>
          <span className="amount">${amount}</span>
        </div>
        <div>
            <button className="edit-btn" aria-label="edit button" onClick={()=>{props.editeItem(id)}}>
                <MdEdit />
            </button>
            <button className="clear-btn" aria-label="delete button" onClick={()=>{props.deleteItem(id)}}>
                <MdDelete />
            </button>
        </div>
      </li>
    </>
  );
};
export default ExpenseItem;
