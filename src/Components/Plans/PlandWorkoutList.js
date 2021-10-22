import { PlandWorkoutCard } from "./PlandWorkoutCard";
import { getPlandWorkoutByPlanId } from "./PlanManager";
import React, { useState, useEffect } from "react";

export const PlandWorkoutList = ({planId}) => {
    const [plandWorkouts, setPlandWorkouts] = useState([]);

    const getPlandWorkouts = () => {
        return getPlandWorkoutByPlanId(planId).then(plandWorkoutsFromAPI => {
            setPlandWorkouts(plandWorkoutsFromAPI)
        });
    };

    useEffect(() => {

        getPlandWorkouts();
    }, []);

  return (
      <>
        <div>
            {plandWorkouts.map(plandWorkout => <PlandWorkoutCard key={plandWorkout.id} plandWorkout={plandWorkout} />)}
        </div>
      </>
  );
};