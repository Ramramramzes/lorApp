import { createSlice } from "@reduxjs/toolkit";

export interface IDiagnosisSettings{
  id: number;
  title:{
    rendered: string;
  }
}

export interface IDiagnosis{
  diagnosis:{
    id: string;
    diagnos: string;
    symptoms: IDiagnosisSettings[];
    clinics: IDiagnosisSettings[];
  }
  symptoms:IDiagnosisSettings[]
  clinics:IDiagnosisSettings[]
}

const initialState:IDiagnosis = {
  diagnosis: {
    id: '',
    diagnos: '',
    symptoms: [],
    clinics: [],
  },
  symptoms: [],
  clinics: [],
}

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setDiagnosis: (state, action) => {
      state.diagnosis = action.payload;
    },
    setSymptom: (state, action) => {
      state.symptoms = action.payload;
    },
    setClinic: (state, action) => {
      state.clinics = action.payload;
    },
    
}})

export const { setDiagnosis, setClinic, setSymptom } = globalSlice.actions
export default globalSlice.reducer;
