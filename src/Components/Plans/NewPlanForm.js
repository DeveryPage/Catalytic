import React, { useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
import { addPlan } from './PlanManager';


export const NewPlanForm = () => {
    const history = useHistory();
    const currentUser = JSON.parse(sessionStorage.getItem("catalytic_user"))

    const [workoutPlan, setPlan] = useState ({
        userId: parseInt(currentUser.id),
        name: ""
    });

    const handleControlledInputChange = (event) => {
        
        const newPlan = {...workoutPlan }
        let selectedVal = event.target.value

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newPlan[event.target.id] = selectedVal
        newPlan.userId = currentUser.id
        setPlan(newPlan)
    }

    const handleClickSavePlan = (event) => {
        event.preventDefault()
        
        if (workoutPlan.name === "") {
            window.alert("Please choose a name")
        } else {
            addPlan(workoutPlan)
                .then((res) => history.push(`/workoutPlans/${res.id}`))
        }
    }

    
    return (
        <form className="planForm">
            <h2 className="planform_title">New Workout Plan</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Plan Name: </label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Plan Name" value={workoutPlan.name} />
                </div>
            </fieldset>
            <button 
            className="savePlanName_btn"
            onClick={handleClickSavePlan}>
                Save Plan Name
            </button>
            <Link to={`/workoutPlans/1`}>
            </Link>
        </form>
    )
}