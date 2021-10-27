import React, { useState } from "react"
import { Route, Redirect } from "react-router-dom"
import { Home } from "./Home"
import { NewPlanForm } from "./Plans/NewPlanForm"
import { PlanCard } from "./Plans/PlanCard"
import { WorkoutPlanList } from "./Plans/PlanList"
import { WorkoutPlanForm } from "./WorkoutPlanForm"
import { BasicTipCard } from "./Tips/BasicTipCard"
import { MuscleTipDetail } from "./Tips/MuscleTipDetail"
import { MuscleTipList } from "./Tips/MuscleTipList"
import { EditPlanForm } from "./Plans/EditPlanForm"
import { PlandWorkoutList } from "./Plans/PlandWorkoutList"
import { DaysForm } from "./Plans/Days/DaysForm"

export const ApplicationViews = ({setAuthUser, isAuthenticated}) => {
    // const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("catalytic_user") !== null)
    
    return (
        <>

            <Route exact path="/workouts/:workoutId(\d+)">
                <MuscleTipDetail />
            </Route>

            <Route path="/tips">
                <BasicTipCard />
                <MuscleTipList />
            </Route>


            <Route exact path="/workoutPlans/:workoutPlanId(\d+)">
                <WorkoutPlanForm />
            </Route>

            <Route path="/plandWorkouts/:workoutPlanId(\d+)/edit">
                <EditPlanForm />
            </Route>


            <Route path="/workoutPlans/create">
                <NewPlanForm />
            </Route>

            <Route exact path="/">
                <WorkoutPlanList />
            </Route>

            {/* <Route path="/allPlans">
                <PlanCard />
            </Route> */}

            <Route path="/days/create/:workoutPlanId(\d+)">
                <DaysForm />
            </Route>
            
        </>
    )
}