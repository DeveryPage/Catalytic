import React, { useState } from "react"
import { NavBar } from "./Nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import { Route, Link } from "react-router-dom"
import { LoginForm } from "./Auth/LoginForm"
import { RegisterForm } from "./Auth/RegisterForm"
import './Catalytic.css'


export const Catalytic = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("catalytic_user") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("catalytic_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("catalytic_user") !== null)
    }

    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(null)
    }
    return (
    <>
        <Route
            render={() => {
                if (isAuthenticated) {
                    return (
                        <>
                            <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated} />
                            <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated} />
                        </>
                    )
                } else {
                    return <h3 className="catalytic--landing">Weclome to Catalytic! Click <Link to="/login" className="here-link">HERE</Link> to log in.</h3>;
                }
            }}
        />
        <Route path="/login">
            <LoginForm setAuthUser={setAuthUser} />
        </Route>

        <Route path="/register">
            <RegisterForm setAuthUser={setAuthUser} />
        </Route>
    </>
    )}
