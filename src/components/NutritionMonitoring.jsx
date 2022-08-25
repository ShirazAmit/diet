import * as React from 'react';
import Grid from '@mui/material/Grid';
import Adding_a_meal from './Adding_a_meal'
import {useSelector} from "react-redux";


export default function NutritionMonitoring() {

    const meals = useSelector((state) => state.nutritionMonitor.meals)


    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            dir="rtl"
        >
            <h1>יומן התזונה</h1>
            <h2>סיכום יומי-תאריך</h2>
            <h3>הארוחות שלי</h3>
            <span>
                {
                    meals.map((meal, index) => {
                        return <Adding_a_meal key={index} mealsType={meal.type} calories={meal.calories}/>
                    })
                }

            </span>


        </Grid>
    );
}
