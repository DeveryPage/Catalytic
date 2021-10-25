import { PlandWorkoutCard } from "./PlandWorkoutCard";
import { getWorkoutPlanByUserId } from "./PlanManager";
import React, { useState, useEffect } from "react";


export const PlandWorkoutList = ({planId}) => {
    const [plandWorkouts, setPlandWorkouts] = useState([]);

    const user = JSON.parse(sessionStorage.getItem("catalytic_user"))

    const getPlandWorkouts = () => {
        return getWorkoutPlanByUserId(user.id).then(plandWorkoutsFromAPI => {
            setPlandWorkouts(plandWorkoutsFromAPI)
        });
    };
  
    useEffect(() => {

        getPlandWorkouts();
    }, []);

    console.log(plandWorkouts)
  return (
      <>
        <div>
            {plandWorkouts.plandWorkouts?.map(plandWorkout => <PlandWorkoutCard key={plandWorkout.id} plandWorkout={plandWorkout} />)}
        </div>
      </>
  );
};