import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { BudgetContext } from './BudgetContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(BudgetContext);

    const handleDeleteExpense = () => {
        dispatch({ type: 'DELETE_EXPENSE', payload: props.id });
    };

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.name}
            <div>
                <span className="badge badge-primary badge-pill mr-3">${props.cost}</span>
                <TiDelete size="1.5em" onClick={handleDeleteExpense} style={{ cursor: 'pointer' }} />
            </div>
        </li>
    );
};

export default ExpenseItem;
};
