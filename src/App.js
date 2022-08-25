import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PersonalArea from "./components/PersonalArea"
import PersonalData from "./components/PersonalData";
import NutritionMonitoring from './components/NutritionMonitoring'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Header from "./components/Header";


function App() {
    return (
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/register" element={<Register/>}/>
                    <Route exact path="/login" element={<Login/>}/>
                    <Route exact path="/personalArea" element={<PersonalArea/>}/>
                    <Route exact path="/personalData" element={<PersonalData/>}/>
                    <Route exact path="/nutritionMonitoring" element={<NutritionMonitoring/>}/>
                </Routes>

            </Router>
            <ToastContainer/>
        </>
    );
}

export default App;
