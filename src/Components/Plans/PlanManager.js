const remoteURL = "http://localhost:8088"


//id based fetches
export const getPlanById = (workoutPlanId) => {
    return fetch(`${remoteURL}/workoutPlans/${workoutPlanId}`)
    .then(res => res.json())
}

export const getWorkoutPlanByUserId = (id) => {
    return fetch(`${remoteURL}/workoutPlans?userId=${id}&_embed=plandWorkouts`)
    .then(res => res.json())
}

export const getWorkoutById = (workoutId) => {
    return fetch(`${remoteURL}/workouts/${workoutId}`)
    .then(res => res.json())
}

export const getPlandWorkoutByPlanId = (id) => {
    return fetch(`${remoteURL}/plandWorkouts?workoutPlanId=${id}`)
    .then(res => res.json())
}

export const getPlanDayByDayId = (id) => {
    return fetch (`${remoteURL}/planDays?_expand=day`)
    .then(res => res.json())
}


export const getPlandWorkoutById = (plandWorkoutId) => {
    return fetch(`${remoteURL}/plandWorkouts/${plandWorkoutId}`)
    .then(res =>res.json())
}



//getAll based Fetches
export const getAllPlans = (id) => {
    return fetch(`${remoteURL}/workoutPlans?userId=${id}&_embed=plandWorkouts`)
    .then(res => res.json())
}

export const getAllWorkouts = () => {
    return fetch(`${remoteURL}/workouts`)
    .then(res => res.json())
}

export const getAllPlandWorkouts = () => {
    return fetch(`${remoteURL}/plandWorkouts`)
    .then(res => res.json())
}

export const getAllDays = () => {
    return fetch (`${remoteURL}/days`)
    .then(res => res.json())
}


//ADD based fetches

export const addPlandWorkout = (newWorkout) => {
    return fetch(`${remoteURL}/plandWorkouts`, {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newWorkout)
    }).then(response => response.json())
}

export const addPlan = (newPlan) => {
    return fetch(`${remoteURL}/workoutPlans`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPlan)
    }).then(response => response.json())
}

export const addPlanDay = (newPlanDay) => {
    return fetch(`${remoteURL}/planDays`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPlanDay)
    }).then(response => response.json())
}



//UPDATE based fetches

export const update = (editedPlan) => {
    return fetch(`${remoteURL}/workoutPlans/${editedPlan.id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedPlan)
    }).then(data => data.json())
}

export const updatePlan = (editedPlan) => {
    return fetch(`${remoteURL}/plandWorkouts/${editedPlan.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedPlan)
    }).then(data => data.json())
}



//OTHER fetches

export const deleteEntirePlan = (id) => {
    return fetch(`${remoteURL}/workoutPlans/${id}`, {
        method:"DELETE"
    }).then(result => result.json())
}

export const getEntirePlan = () => {
    return fetch(`${remoteURL}/plandWorkouts?_expand=workoutPlan&_expand=workout`
    .then(res => res.json()))
}