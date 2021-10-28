import React from "react"
import { Link, useHistory } from "react-router-dom";
import './MuscleTipCard.css'

export const MuscleTipCard = ({ workout }) => {
    const history = useHistory();

    return (
        <div className="muscle_card" >
            <img src={workout.image} className="muscle-card-img-top" alt="..." />
            <div className="muscle-card-body">
                <h3 className="muscle-card-title">{workout.name}</h3>
                <Link to={`/workouts/${workout.id}`}>
                    <button className="details-btn" >Details</button>
                </Link>
            </div>
        </div>

    )
}

