import React, {useState, useEffect} from "react";
import { PlanCard } from "./PlanCard";
import { getAllPlans, deleteEntirePlan } from "./PlanManager";

export const WorkoutPlanList = () => {
    const [plans, setPlans] = useState([]);
    let user = JSON.parse(sessionStorage.getItem("catalytic_user"))

    const getPlans = () => {
        return getAllPlans(user.id).then(response => {
            setPlans(response)
        });
    };

    useEffect(() => {
        getPlans();
    }, []);

    const handleDeletePlan = id => {
        deleteEntirePlan(id)
        .then(() => getAllPlans(user).then(setPlans));
    }
     console.log(plans)   
    return (
        <div className="container-cards">
            {plans.map(plan => <PlanCard key={plan.id} plan={plan} handleDeletePlan={handleDeletePlan} />)}
        </div>
    )
}