import React, { useState } from "react"
import { Route, Redirect } from "react-router-dom"
import { Home } from "./Home"
import { LoginForm } from "./Auth/LoginForm"
import { RegisterForm } from "./Auth/RegisterForm"
import { NewPlanForm } from "./Plans/NewPlanForm"
import { PlanCard } from "./Plans/PlanCard"
import { WorkoutPlanList } from "./Plans/PlanList"

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



            <Route path="/workoutPlans">
                
            </Route>

            <Route path="/workoutPlans/create">
                <NewPlanForm />
            </Route>

            <Route path="/">
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