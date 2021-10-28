import React, { useState, useEffect } from "react";
import { PlanCard } from "./PlanCard";
import { getAllPlans, deleteEntirePlan, getPlanDayByDayId } from "./PlanManager";
import { useHistory } from "react-router";


export const WorkoutPlanList = () => {
    const history = useHistory();
    const [days, setDays] = useState([]);
    const [plans, setPlans] = useState([]);
    //JSON. parse turns thing into object
    let user = JSON.parse(sessionStorage.getItem("catalytic_user"))

    const getPlans = () => {
        return getAllPlans(user.id).then(response => {
            setPlans(response)
        });
    };

    useEffect(() => {
        getPlans();
        getPlanDayByDayId().then(response => setDays(response))
        }, []);
    


    const handleDeletePlan = id => {
        deleteEntirePlan(id)
            .then(() => getAllPlans(user.id).then(setPlans));
    }
    
    return (
        <div className="container-cards">
            {plans.map(plan => <PlanCard key={plan.id} plan={plan}  days={days} handleDeletePlan={handleDeletePlan} />)}
        </div>
    )
}