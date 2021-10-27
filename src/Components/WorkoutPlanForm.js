/*
Form : has all properties of workout plan : plan id sets reps etc.
Need fetch that gets all workouts
*/
import { getAllWorkouts } from './Plans/PlanManager';
import React, { useState, useEffect} from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { addPlandWorkout } from './Plans/PlanManager';
import { getAllPlandWorkouts } from './Plans/PlanManager';


export const WorkoutPlanForm = () => {
    const history = useHistory();
    const {workoutPlanId} = useParams();

    const [workouts, setWorkouts] = useState ([]);

    const [plandWorkout, setPlandWorkout] = useState({
        workoutId: 0,
        workoutPlanId: 0,
        sets: "",
        reps: "",
        restTime: ""
    })

    
    useEffect(() => {
        getAllWorkouts().then((res) => {
            setWorkouts(res)
        })
    },[plandWorkout])


    const handleControlledInputChange = (event) => {
        const newWorkout = {...plandWorkout }
        let selectedVal = event.target.value

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newWorkout[event.target.id] = selectedVal
        setPlandWorkout(newWorkout)
    }

    // const handleClickSaveWorkout = (event) => {
    //     event.preventDefault()
    //     const myNewPlan = {
    //         workoutId: plandWorkout.workoutId,
    //         workoutPlanId: parseInt(workoutPlanId),
    //         sets: parseInt(plandWorkout.sets),
    //         reps: parseInt(plandWorkout.reps),
    //         restTime: plandWorkout.restTime
    //     }
    //         addPlandWorkout(myNewPlan)
    //             .then((res) => history.push(`/plandWorkouts/${res.id}`))

    // }


    const handleClickSaveandClear = (event) => {
        event.preventDefault()
        const myPlan = {
            workoutId: plandWorkout.workoutId,
            workoutPlanId: parseInt(workoutPlanId),
            sets: parseInt(plandWorkout.sets),
            reps: parseInt(plandWorkout.reps),
            restTime: plandWorkout.restTime
        }
        addPlandWorkout(myPlan)
            .then(() => setPlandWorkout( {
                workoutId: 0,
                workoutPlanId: 0,
                sets: "",
                reps: "",
                restTime: ""
            }))
    }


    console.log(workouts)
    return (
        <form className="workoutForm">
            <h2 className="workoutform_title">New Workout</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Workout: </label>
                    <select type="select" value={plandWorkout.workoutId} onChange={handleControlledInputChange} id="workoutId" required autoFocus className="form-control">
                        <option value="0" >Please Select A Workout...</option>
                        {workouts.map(workout => <option key={workout.id} value={workout.id}>{workout.name}</option>)}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="sets">Sets </label>
                    <input type="select" id="sets" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Sets" value={plandWorkout.sets} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="reps">Reps </label>
                    <input type="select" id="reps" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Repetitions" value={plandWorkout.reps} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="restTime">Rest Time </label>
                    <input type="select" id="restTime" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Rest Time" value={plandWorkout.restTime} />
                </div>
            </fieldset>
            <button 
            className="saveWorkout_btn"
            onClick={handleClickSaveandClear}>
                Save Workout
            </button>
            <button
            type="button"
            className="next_btn"
            onClick={() => history.push(`/days/create/${workoutPlanId}`)}>
                Next
            </button>
        </form>
    )
}