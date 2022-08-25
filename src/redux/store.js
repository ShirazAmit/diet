import { configureStore } from '@reduxjs/toolkit'
import PersonalDataReducer from "./PersonalData/PersonalDataSlice"
import NutritionMonitoringReducer from './NutritionMonitoring/NutritionMonitoringSlice'

export default configureStore({
    reducer: {
        personal:PersonalDataReducer,
        nutritionMonitor:NutritionMonitoringReducer,
    },
})