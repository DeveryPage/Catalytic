import React, {useState, useEffect} from "react";
import { PlanCard } from "./PlanCard";
import { getAllPlans, deleteEntirePlan } from "./PlanManager";

export const WorkoutPlanList = () => {
    const [plans, setPlans] = useState([]);

    const getPlans = () => {
        return getAllPlans().then(plansFromAPI => {
            setPlans(plansFromAPI)
        });
    };

    useEffect(() => {
        getPlans();
    }, []);

    const handleDeletePlan = id => {
        deleteEntirePlan(id)
        .then(() => getAllPlans().then(setPlans));
    }
        
    return (
        <div className="container-cards">
            {plans.map(plan => <PlanCard key={plan.id} plan={plan} handleDeletePlan={handleDeletePlan} />)}
        </div>
    )
}