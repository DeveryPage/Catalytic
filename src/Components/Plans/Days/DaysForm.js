import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { getAllDays, addPlanDay } from "../PlanManager";
import { useParams } from "react-router";


export const DaysForm = () => {

    const history = useHistory();

    const [days, setDays] = useState ([])

    const {workoutPlanId} = useParams();

    const [planDay, setPlanDay] = useState({
        dayId: 0,
        workoutPlanId: 0
    })

    useEffect(() => {
        getAllDays().then((res) => {
            setDays(res)
        })
    },[planDay])

    const handleControlledInputChange = (event) => {
        const newDay = {...planDay}
        let selectedVal = event.target.value

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newDay[event.target.id] = selectedVal
        setPlanDay(newDay)
    }
    const handleClickSaveandClear = (event) => {
        event.preventDefault()
        const myDay = {
            dayId: planDay.dayId,
            workoutPlanId: parseInt(workoutPlanId)
        }
        addPlanDay(myDay)
        .then(() => setPlanDay( {
            dayId: 0,
            workoutPlanId: 0
        }))
    }
        return (
            <form className="dayForm">
                <h2 className="day_Form_title">Choose Your Days</h2>
                <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Day: </label>
                    <select type="select" value={planDay.planId} onChange={handleControlledInputChange} id="dayId" required autoFocus className="form-control">
                        <option value="0" >Please Select A Day...</option>
                        {days.map(day => <option key={day.id} value={day.id}>{day.name}</option>)}
                    </select>
                </div>
                </fieldset>
                <button
                className="save_day_btn"
                onClick={handleClickSaveandClear}>
                    Save Days
                </button>
                <button
                className="finishPlanBtn"
                onClick={() => history.push(`/`)}>
                    Complete Plan
                </button>
            </form>
        )

}