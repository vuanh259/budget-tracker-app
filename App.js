import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './Budget';
import Remaining from './Remaining';
import ExpenseTotal from './ExpenseTotal';
import ExpenseList from './ExpenseList';
import AddExpenseForm from './AddExpenseForm';
import { BudgetProvider } from './BudgetContext';

const App = () => {
    return (
        <BudgetProvider>
            <div className="container">
                <h1 className="mt-3">Company's Budget Tracker</h1>
                <div className="row mt-3">
                    <div className="col-sm"><Budget /></div>
                    <div className="col-sm"><Remaining /></div>
                    <div className="col-sm"><ExpenseTotal /></div>
                </div>
                <h3 className="mt-3">Expenses</h3>
                <div className="row mt-3"><div className="col-sm"><ExpenseList /></div></div>
                <h3 className="mt-3">Add Expense</h3>
                <div className="row mt-3"><div className="col-sm"><AddExpenseForm /></div></div>
            </div>
        </BudgetProvider>
    );
};

export default App;
