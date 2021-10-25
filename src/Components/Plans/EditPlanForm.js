import React, { useState, useEffect} from "react"
import { updatePlan, getPlandWorkoutById } from "./PlanManager"
import {useParams, useHistory} from "react-router-dom"

export const EditPlanForm = () => {
    const [plandWorkout, setPlandWorkout] = useState({
        workoutId: 0,
        workoutPlanId: 0,
        sets: 0,
        reps: 0,
        restTime: ""
    })
    const [isLoading, setIsLoading] = useState(false);

    const {workoutPlanId} = useParams();
    const history = useHistory();

    const handleFieldChange = evt => {
        const stateToChange = {...plandWorkout};
        stateToChange[evt.target.id] = evt.target.value;
        setPlandWorkout(stateToChange)
    };

    const updateExistingPlandWorkout = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedPlandWorkout = {
            id: workoutPlanId,
            sets: parseInt(plandWorkout.sets),
            reps: parseInt(plandWorkout.reps),
            restTime: plandWorkout.restTime,
            workoutId: plandWorkout.workoutId,
            workoutPlanId: plandWorkout.workoutPlanId
        };

        updatePlan(editedPlandWorkout)
        .then(() => history.push("/")
        )
    }

    useEffect(() => {

        getPlandWorkoutById(workoutPlanId)
        .then(plandWorkout => {
            setPlandWorkout(plandWorkout);
            setIsLoading(false);
        });
    }, []);

    return (
        <>
        <form>
            <fieldset>
                <div>
                    <label htmlFor="sets">Sets: </label>
                    <input
                    type="text"
                    required
                    onChange={handleFieldChange}
                    id="sets"
                    value={plandWorkout.sets}
                    />

                    <label htmlFor="reps">Reps: </label>
                    <input
                    type="text"
                    required
                    onChange={handleFieldChange}
                    id="reps"
                    value={plandWorkout.reps}
                    />

                    <label htmlFor="sets">Rest Time: </label>
                    <input
                    type="text"
                    required
                    onChange={handleFieldChange}
                    id="restTime"
                    value={plandWorkout.restTime}
                    />
                </div>

                <div>
                    <button
                    type="button"
                    disabled={isLoading}
                    onClick={updateExistingPlandWorkout}>
                        Save
                    </button>
                </div>
            </fieldset>
        </form>
        </>
    )
}