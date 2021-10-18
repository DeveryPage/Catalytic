import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const NewPlanForm = () => {
    const history = useHistory();

    const [workoutPlan, setPlan] = useState ({
        name: "",
        workoutId:"",
        

    })

    return (
        <div className="card">
            <div className="card-content">

            </div>
        </div>
    )
}