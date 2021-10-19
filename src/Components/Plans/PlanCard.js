import React from "react";
import {Link, useHistory} from "react-router-dom";

export const PlanCard = ({plan}) => {
    const history = useHistory();

    return (
        <div className="card">
            <div className="card-content">
                <h3>Name: <span className="card-plan-name">
                    {plan.name}
                </span></h3>
                <button 
                type="button"
                onClick={() => history.push(`/workoutPlans/${plan.workoutPlan.id}/edit`)}>
                    Edit
                </button>
            </div>
        </div>
    )
}