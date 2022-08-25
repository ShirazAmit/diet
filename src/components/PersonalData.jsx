import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import WcIcon from '@mui/icons-material/Wc';
import HeightIcon from '@mui/icons-material/Height';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { useDispatch} from 'react-redux'
import {setGender, setAge ,setHeight,setWeight} from '../redux/PersonalData/PersonalDataSlice'
import {Button} from "@mui/material";
import ShowBMR from "./ShowBMR";



export default function PersonalData() {


    const dispatch = useDispatch()

    const [localAge, setLocalAge] = React.useState('');
    const [localGender, setLocalGender] = React.useState('female');
    const [localHeight, setLocalHeight] = React.useState('');
    const [localWeight, setLocalWeight] = React.useState('');


    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            dir="rtl"
        >
            <h1>נתונים אישיים</h1>
            <List sx={{width: '100%', maxWidth: 700, height: 300}}>

                <ListItem alignItems="center">
                    <ListItemAvatar>
                        <Avatar>
                            <WcIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group"> </FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={localGender}
                            onChange={e => setLocalGender(e.target.value)}
                        >
                            <FormControlLabel value="female" control={<Radio/>} label="אשה"/>
                            <FormControlLabel value="male" control={<Radio/>} label="גבר"/>
                        </RadioGroup>
                    </FormControl>
                </ListItem>
                <Divider variant="inset" component="li"/>
                <ListItem alignItems="center">
                    <ListItemAvatar>
                        <Avatar>
                            <DriveFileRenameOutlineIcon/>
                        </Avatar>
                    </ListItemAvatar>

                    <input type={"number"} placeholder={"גיל"} style={{border: 'none'}} value={localAge}
                           onChange={e => setLocalAge(e.target.value)}/>

                </ListItem>
                <Divider variant="inset" component="li"/>
                <ListItem alignItems="center">
                    <ListItemAvatar>
                        <Avatar>
                            <HeightIcon/>
                        </Avatar>
                    </ListItemAvatar>


                    <div>cm</div>
                    <input type={"number"} placeholder={"  גובה"} style={{border: 'none'}} value={localHeight}
                           onChange={e => setLocalHeight(e.target.value)}/>
                </ListItem>
                <Divider variant="inset" component="li"/>
                <ListItem alignItems="center">
                    <ListItemAvatar>
                        <Avatar>
                            <MonitorWeightIcon/>
                        </Avatar>
                    </ListItemAvatar>


                    <div>kg</div>
                    <input type={"number"} placeholder={"  משקל"} style={{border: 'none'}} value={localWeight}
                           onChange={e => setLocalWeight(e.target.value)}/>


                </ListItem>
            </List>
            <Button onClick={() => {
                dispatch(setAge(localAge))
                dispatch(setGender(localGender))
                dispatch(setHeight(localHeight))
                dispatch(setWeight(localWeight))

            }}>
                שמור שינויים
            </Button>


            <ShowBMR/>

        </Grid>


    );
}
