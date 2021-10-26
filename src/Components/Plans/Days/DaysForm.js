import React, { useEffect } from "react";
import { useHistory, Link } from "react-router";
import { getAllDays, addPlanDay } from './Plans/PlanManager'

export const DayForm = () => {
    const history = useHistory();

    const [days, setDays] = useState ([])

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
            workoutPlanId: planDay.workoutPlanId
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
                        <input type="checkbox" id="Monday" name="Monday" value="Monday"></input>
                        <input type="checkbox" id="Tuesday" name="Tuesday" value="Tuesday"></input>
                        <input type="checkbox" id="Wednesday" name="Wednesday" value="Wednesday"></input>
                        <input type="checkbox" id="Thursday" name="Thursday" value="Thursday"></input>
                        <input type="checkbox" id="Friday" name="Friday" value="Friday"></input>
                        <input type="checkbox" id="Saturday" name="Saturday" value="Saturday"></input>
                        <input type="checkbox" id="Sunday" name="Sunday" value="Sunday"></input>
                    </div>
                </fieldset>
            </form>
        )

}