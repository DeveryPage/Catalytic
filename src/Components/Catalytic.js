import React, {useState} from "react"
import { NavBar } from "./Nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"


export const Catalytic = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("catalytic_user") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("catalytic_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("catalytic_user") !== null)
    }

    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("catalytic_user") !== null)
      }

    return (
        <>
            <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
            <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated}/>
        </>
    )
}