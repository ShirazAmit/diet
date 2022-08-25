import {useState, useEffect} from 'react'
import {toast} from 'react-toastify'
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {FaUser} from 'react-icons/fa'


const theme = createTheme();

export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const {name, email, password, password2} = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (password !== password2) {
            toast.error('סיסמאות לא תואמות')
        }
    }


    return (
        <>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar>
                            <FaUser/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            הרשמה
                        </Typography>
                        <Box component="form" noValidate sx={{mt: 1}} onSubmit={onSubmit}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="שם מלא"
                                name="name"
                                value={name}
                                onChange={onChange}
                                autoComplete="name"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="דואר אלקטרוני"
                                name="email"
                                value={email}
                                onChange={onChange}
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                value={password}
                                onChange={onChange}
                                label="סיסמה"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password2"
                                value={password2}
                                onChange={onChange}
                                label="אימות סיסמה"
                                type="password2"
                                id="password2"
                                autoComplete="current-password"
                            />

                            <button className='btn2'>
                                הירשם
                            </button>
                        </Box>
                    </Box>

                </Container>

            </ThemeProvider>
        </>
    );
}