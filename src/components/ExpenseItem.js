import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };
    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };

  return (
    <>
      <style type="text/css">{`
	  .btn-container {
			display: flex;
			align-items: center;
            justify-content: center;
			color: #FFFFFF;
			width: 2rem;
			height: 2rem;
			font-size: 1rem;
			border-radius: 30px;
	  }

	  .btn-container.increase {
		background-color: #4EAC5A;
	  }

	  .btn-container.increase:hover {
		cursor: pointer;
	  }

	  .btn-container.decrease {
		background-color: #B12519;
	  }

	  .btn-container.decrease:hover {
		cursor: pointer;
	  }
	  `}</style>
      <tr>
        <td>{props.name}</td>
        <td>
          {currency}
          {props.cost}
        </td>
        <td>
          <div class="btn-container increase" onClick={(event) => increaseAllocation(props.name)}><h1>+</h1></div>
        </td>
        <td>
          <div class="btn-container decrease" onClick={(event) => decreaseAllocation(props.name)}><h1>-</h1></div>
        </td>
        <td>
          <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
        </td>
      </tr>
    </>
  );
};

export default ExpenseItem;
