import React, { createContext, useReducer } from 'react';

const BudgetReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload),
            };
        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };
        default:
            return state;
    }
};

const initialState = {
    budget: 2000,
    expenses: [
        { id: 1, name: 'Shopping', cost: 50 },
        { id: 2, name: 'Holiday', cost: 300 },
    ],
};

export const BudgetContext = createContext();

export const BudgetProvider = (props) => {
    const [state, dispatch] = useReducer(BudgetReducer, initialState);

    return (
        <BudgetContext.Provider value={{
            budget: state.budget,
            expenses: state.expenses,
            dispatch,
        }}>
            {props.children}
        </BudgetContext.Provider>
    );
};
