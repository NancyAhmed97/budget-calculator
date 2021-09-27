import React from "react";
import { MdSend } from "react-icons/md";
const ExpensForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">Charge</label>
          <input
            className="form-control"
            type="text"
            id="charge"
            name="charge"
            placeholder="e.g. rent"
            value={props.charge}
            onChange={props.handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            className="form-control"
            type="number"
            id="amount"
            name="amount"
            placeholder="e.g. 100"
            value={props.amount}
            onChange={props.handleAmount}
          />
        </div>
      </div>
      <button className="btn" type="submit">
        {props.edit ? "Edit" : "Submit"} <MdSend className="btn-icon" />
      </button>
    </form>
  );
};
export default ExpensForm;
