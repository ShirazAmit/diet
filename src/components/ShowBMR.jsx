import * as React from 'react';
import {useSelector} from 'react-redux'
import {Button} from "@mui/material";


export default function ShowBMR() {

    const gender = useSelector((state) => state.personal.gender)
    const age = useSelector((state) => state.personal.age)
    const height = useSelector((state) => state.personal.height)
    const weight = useSelector((state) => state.personal.weight)


    const [bmr, setBmr] = React.useState('0');

    const newBmr = (bmr) => {
        setBmr(bmr);
    };

    function calculateBMR() {

        if (gender === 'male') {
            let bmr = Math.round(88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age))
            newBmr(bmr)
        } else if (gender === 'female') {
            let bmr = Math.round(447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age))
            newBmr(bmr)
        }

    }


    return (
        <React.Fragment>
            <Button onClick={() => {
                calculateBMR()
            }}>
                חשב BMR
            </Button>
            <h2> BMR {bmr}</h2>

        </React.Fragment>


    )
}