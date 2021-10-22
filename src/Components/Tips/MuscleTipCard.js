import React from "react"
import {Link, useHistory} from "react-router-dom";
import './MuscleTipCard.css'

export const MuscleTipCard = ({workout}) => {
    const history = useHistory();

    return (
        <div className= "muscle__card">
            <div className="muscle__card_content">
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