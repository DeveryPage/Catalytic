import { PlandWorkoutCard } from "./PlandWorkoutCard";
import { getWorkoutPlanByUserId, getWorkoutByPlandWorkoutId } from "./PlanManager";
import React, { useState, useEffect } from "react";


export const PlandWorkoutList = ({planId}) => {
    const [plandWorkouts, setPlandWorkouts] = useState([]);

    const [workouts, setWorkouts] = useState([])

    const user = JSON.parse(sessionStorage.getItem("catalytic_user"))

    const getPlandWorkouts = () => {
        return getWorkoutPlanByUserId(user.id).then(plandWorkoutsFromAPI => {
            setPlandWorkouts(plandWorkoutsFromAPI)
        });
    };
  
    useEffect(() => {
    getPlandWorkouts();
    getWorkoutByPlandWorkoutId().then(response => setWorkouts(response))
    }, []);



    
  return (
      <>
        <div>
            {plandWorkouts?.map(plandWorkout => <PlandWorkoutCard key={plandWorkout.id} plandWorkout={plandWorkout} workouts={workouts}/>)}
        </div>
      </>
  );
};