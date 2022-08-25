import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import {setBreakfast, setLunch, setDinner, setSnack} from '../redux/NutritionMonitoring/NutritionMonitoringSlice'
import { useDispatch} from 'react-redux'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Adding_a_meal(props) {
    const dispatch = useDispatch()

    let mealsType = props.mealsType
    let calories = props.calories

    const [localCalories, setLocalCalories] = React.useState('');

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <div>
            <Button variant="outlined" onClick={handleClickOpen} sx={{width: 300, height: 100}}>
                <List>
                    <ListItem button>
                        {mealsType}
                    </ListItem>

                    <Divider/>

                    <ListItem button>
                        {calories}
                    </ListItem>
                </List>
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{position: 'relative'}}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon/>
                        </IconButton>
                        <Typography sx={{ml: 110, flex: 1}} variant="h6" component="div">
                            הוספת ארוחה
                        </Typography>
                        <Button autoFocus color="inherit"  onClick={async () => {
                            if (mealsType === 'בוקר'){
                                await dispatch(setBreakfast( localCalories))
                            }
                            else if (mealsType === 'צהריים'){
                                await dispatch(setLunch( localCalories))
                            }
                            else if (mealsType === 'ערב'){
                                await dispatch(setDinner( localCalories))
                            }
                            else if (mealsType === 'ביניים'){
                                await dispatch(setSnack( localCalories))
                            }

                            handleClose()

                        }}>
                            save
                        </Button>
                    </Toolbar>
                </AppBar>
                <List>
                    <input value={localCalories} onChange={ e => setLocalCalories(e.target.value)}/>
                    <Divider/>
                    <ListItem button>
                        <ListItemText
                            primary="Default notification ringtone"
                            secondary="Tethys"
                        />
                    </ListItem>
                </List>
            </Dialog>
        </div>

    );
}
