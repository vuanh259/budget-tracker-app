import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { BudgetContext } from './BudgetContext';

const ExpenseList = () => {
    const { expenses } = useContext(BudgetContext);

    return (
        <ul className="list-group">
            {expenses.map((expense) => (
                <ExpenseItem key={expense.id} id={expense.id} name={expense.name} cost={expense.cost} />
            ))}
        </ul>
    );
};

export default ExpenseList;
