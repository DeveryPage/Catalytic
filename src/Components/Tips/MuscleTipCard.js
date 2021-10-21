import React from "react"
import {Link, useHistory} from "react-router-dom";

export const MuscleTipCard = ({workout}) => {
    const history = useHistory();

    return (
        <div className= "card">
            <div className="card-content">
                <h3>Name: <span className="card-workout-name">
                    {workout.name}
                </span></h3>
                <Link to={`/workouts/${workout.id}`}>
                    <button>Details</button>
                </Link>
            </div>
        </div>
    )
}