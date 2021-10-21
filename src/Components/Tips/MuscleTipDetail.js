import React, {useState, useEffect} from "react";
import { getWorkoutById } from "../Plans/PlanManager";
import {useParams, useHistory} from "react-router-dom"

export const MuscleTipDetail = () => {
    const [workout, setWorkout] = useState({
        name:"",
        description:"",
        video: "",
        image: "",
        tips: ""
    })

    const {workoutId} = useParams();
    const history = useHistory();

    useEffect(() => {
        getWorkoutById(workoutId)
        .then(data => {
            setWorkout({
                name: data.name,
                description: data.description,
                video: data.video,
                image: data.image,
                tips: data.tips
            });
        });
    }, [workoutId]);

    return (
        <section className="workout">
            <h3 className="workout__Name">{workout.name}</h3>
            <h5 className="workout__description">{workout.description}</h5>
            <h5 className="workout__tips">{workout.tips}</h5>
            <div className="workout__video">
                <video>{workout.video}</video>
            </div>
            <div className="workout__image">
                <image>{workout.image}</image>
            </div>
        </section>
    )
}