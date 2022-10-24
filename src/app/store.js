import { configureStore } from '@reduxjs/toolkit'
import PersonalDataReducer from "../features/PersonalData/PersonalDataSlice"
import NutritionMonitoringReducer from '../features/NutritionMonitoring/NutritionMonitoringSlice'

export default configureStore({
    reducer: {
        personal:PersonalDataReducer,
        nutritionMonitor:NutritionMonitoringReducer,
    },
})