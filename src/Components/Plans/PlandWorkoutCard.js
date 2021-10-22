import React from "react";
import {useHistory} from 'react-router-dom';

export const PlandWorkoutCard = ({plandWorkout}) => {
    const history = useHistory();

    return (
    <div className= "workout__card">
    <div className="workout__card_content">
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
</div>
    );
}