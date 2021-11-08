import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { PlandWorkoutList } from "./PlandWorkoutList";
import { WorkoutPlanForm } from "../WorkoutPlanForm";
import { DayCard } from "./Days/DaysCard";
import { getPlandWorkoutByPlanId } from "./PlanManager";
import './PlanCard.css'


export const PlanCard = ({ plan, handleDeletePlan, days }) => {
    const history = useHistory();
    const [planDays, setPlanDays] = useState([]);

    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        //filters days based on the plan id then sets state
        const planDay = days.filter(day => day.workoutPlanId === plan.id)
        setPlanDays(planDay)
    }, [days]
    )

    useEffect(() => {
        getPlandWorkoutByPlanId(plan.id).then(response => {
            setWorkouts(response)
        })
        

    }, [])


    return (
        <div className="home-card">
            <div className="card-content">
                <div className="planNameandDays">
                <h3> <span className="card-plan-name">
                    {plan.name}
                </span></h3>
                {/* maps through days that are chosen */}
                {planDays.map(day=> <DayCard day={day}/>)}
                <button
                    className="plancardbutton"
                    type="button"
                    onClick={() => handleDeletePlan(plan.id)}>
                    Delete Plan
                </button>
                <button 
                    className="plancardaddbutton"
                    type="button"
                    onClick={() => history.push(`/workoutPlans/${plan.id}`)}>
                    Add Another Workout
                </button>
                </div>
                    </div>
                <div className="workout__card">

              
                    {
                            workouts.map(plandWorkout => {
                            return <div key={plandWorkout.id} className="workout__card_content">
                                <div className="card-stuff">
                                <h3> <span className="workout__name">
                                    {plandWorkout.workout.name}
                                </span></h3>
                                <h4>Sets: {plandWorkout.sets}</h4>
                                <h4>Reps: {plandWorkout.reps}</h4>
                                <h4>Rest Time: {plandWorkout.restTime}</h4>
                                </div>
                                <div className="card-edit">
                                <button
                                    className="card-edit-button"
                                    type="button"
                                    onClick={() => history.push(`/plandWorkouts/${plandWorkout.id}/edit`)}>
                                    Edit
                                </button>
                                </div>
                            </div>
                        })

                    }


                </div>
            </div>
    )
}