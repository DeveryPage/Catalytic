import React, {useState, useEffect} from "react";
import { MuscleTipCard } from "./MuscleTipCard";
import { getAllWorkouts } from "../Plans/PlanManager";


export const MuscleTipList = () => {
    const [workouts, setWorkouts] = useState([]);

    const getWorkouts = () => {
        return getAllWorkouts().then(workoutsFromApi => {
            setWorkouts(workoutsFromApi)
        });
    };

    useEffect(() => {
        getWorkouts();
    }, []);

    return (
        <div className="muscle__list">
            {workouts?.map(workout => <MuscleTipCard key={workout.id} workout={workout} />)}
        </div>
    )
}