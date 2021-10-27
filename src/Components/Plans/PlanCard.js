import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { PlandWorkoutList } from "./PlandWorkoutList";
import { WorkoutPlanForm } from "../WorkoutPlanForm";
import { DayCard } from "./Days/DaysCard";


export const PlanCard = ({ plan, handleDeletePlan, days }) => {
    const history = useHistory();
    const [planDays, setPlanDays] = useState([]);

    useEffect(() => {
        const planDay = days.filter(day => day.workoutPlanId === plan.id)
        setPlanDays(planDay)
    }, [days]
    )


    return (
        <div className="card">
            <div className="card-content">
                <h3>Name: <span className="card-plan-name">
                    {plan.name}
                </span></h3>
                {planDays.map(day=> <DayCard day={day}/>)}
                <button
                    type="button"
                    onClick={() => handleDeletePlan(plan.id)}>
                    Delete
                </button>
                <button type="button"
                    onClick={() => history.push(`/workoutPlans/${plan.id}`)}>
                    Add Another Workout
                </button>
                <div className="workout__card">

              
                    {
                        plan.plandWorkouts.map(plandWorkout => {
                            return <div key={plandWorkout.id} className="workout__card_content">
                                
                                <h3>Name: <span className="workout__name">
                                    {plandWorkout.name}
                                </span></h3>
                                <h4>Sets: {plandWorkout.sets}</h4>
                                <h4>Reps: {plandWorkout.reps}</h4>
                                <h4>Rest Time: {plandWorkout.restTime}</h4>
                                <button
                                    type="button"
                                    onClick={() => history.push(`/plandWorkouts/${plandWorkout.id}/edit`)}>
                                    Edit
                                </button>
                            </div>
                        })

                    }


                </div>
            </div>
        </div>
    )
}