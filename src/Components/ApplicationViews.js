import React, { useState } from "react"
import { Route, Redirect } from "react-router-dom"
import { Home } from "./Home"
import { LoginForm } from "./Auth/LoginForm"
import { RegisterForm } from "./Auth/RegisterForm"
import { NewPlanForm } from "./Plans/NewPlanForm"
import { PlanCard } from "./Plans/PlanCard"
import { WorkoutPlanList } from "./Plans/PlanList"
import { WorkoutPlanForm } from "./WorkoutPlanForm"
import { BasicTipCard } from "./Tips/BasicTipCard"
import { MuscleTipDetail } from "./Tips/MuscleTipDetail"

export const ApplicationViews = ({setAuthUser, isAuthenticated}) => {
    // const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("catalytic_user") !== null)
    
    return (
        <>
            <Route path="/login">
                <LoginForm setAuthUser={setAuthUser} />
            </Route>

            <Route path="/register">
                <RegisterForm setAuthUser={setAuthUser} />
            </Route>

            <Route path="/tips/:workourId(\d+)">
                <MuscleTipDetail />
            </Route>

            <Route path="/tips">
                <BasicTipCard />
            </Route>

            <Route exact path="/workoutPlans/:workoutPlanId(\d+)">
                <WorkoutPlanForm />
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


            <Route exact path ="/">
                <Home />
            </Route>
        </>
    )
}