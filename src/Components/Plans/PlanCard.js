import React from "react";
import {Link, useHistory} from "react-router-dom";
import { PlandWorkoutList } from "./PlandWorkoutList";

export const PlanCard = ({plan, handleDeletePlan}) => {
    const history = useHistory();

    return (
        <div className="card">
            <div className="card-content">
                <h3>Name: <span className="card-plan-name">
                    {plan.name}
                </span></h3>
                <PlandWorkoutList planId={plan.id}/>
                {/* <button 
                type="button"
                onClick={() => history.push(`/workoutPlans/${plan.id}/edit`)}>
                    Edit
                </button> */}
                <button
                type="button"
                onClick={() => handleDeletePlan(plan.id)}>
                    Delete
                </button>
            </div>
        </div>
    )
}