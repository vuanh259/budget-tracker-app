import React, { useContext, useState } from 'react';
import { BudgetContext } from './BudgetContext';

const Budget = () => {
    const { budget, dispatch } = useContext(BudgetContext);
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(budget);

    const handleSave = () => {
        dispatch({ type: 'SET_BUDGET', payload: value });
        setIsEditing(false);
    };

    return (
        <div className="alert alert-secondary d-flex align-items-center justify-content-between">
            {isEditing ? (
                <>
                    <input type="number" className="form-control mr-3" value={value} onChange={(e) => setValue(e.target.value)} />
                    <button className="btn btn-primary" onClick={handleSave}>Save</button>
                </>
            ) : (
                <>
                    <span>Budget: ${budget}</span>
                    <button className="btn btn-sm btn-outline-primary" onClick={() => setIsEditing(true)}>Edit</button>
                </>
            )}
        </div>
    );
};

export default Budget;
