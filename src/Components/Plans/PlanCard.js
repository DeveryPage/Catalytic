import React from "react";
import { Link, useHistory } from "react-router-dom";
import { PlandWorkoutList } from "./PlandWorkoutList";

export const PlanCard = ({ plan, handleDeletePlan }) => {
    const history = useHistory();

    return (
        <div className="card">
            <div className="card-content">
                <h3>Name: <span className="card-plan-name">
                    {plan.name}
                </span></h3>
                <div className="workout__card">
                    
                      
                        <div className="workout__card_content">
                        <h3>Name: <span className="workout__name">
                            {plan.plandWorkout.name}
                        </span></h3>
                        <h4>Sets: {plan.plandWorkout.sets}</h4>
                        <h4>Reps: {plan.plandWorkout.reps}</h4>
                        <h4>Rest Time: {plan.plandWorkout.restTime}</h4>
                        <button
                            type="button"
                            onClick={() => history.push(`/plandWorkouts/${plan.plandWorkout.id}/edit`)}>
                            Edit
                        </button>
                    </div>
                    
                    
                </div>
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