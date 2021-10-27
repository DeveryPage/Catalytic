import React from "react";
import {useHistory} from 'react-router-dom';


export const PlandWorkoutCard = ({plan}) => {
    const history = useHistory();

    return (
    <div className= "workout__card">
    <div className="workout__card_content">
        <h3>Name: <span className="workout__name">
            {plan.workout.name}
        </span></h3>
        <h4>Sets: {plan.plandWorkout[0].sets}</h4>
        <h4>Reps: {plan.plandWorkout[0].reps}</h4>
        <h4>Rest Time: {plan.plandWorkout[0].restTime}</h4>
        <button type="button" 
        onClick={() => history.push(`/plandWorkouts/${plan.plandWorkout[0].id}/edit`)}>
            Edit
        </button>
    </div>
</div>
    );
}