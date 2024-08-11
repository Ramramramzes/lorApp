import { createSlice } from "@reduxjs/toolkit";

export interface IGlobalSettings{
  diagnosis:{
    id: string;
    diagnos: string;
    symptoms: {post_title:string}[];
    clinics: {post_title:string}[];
  }[]
  symptoms:string[];
  clinics:string[];
  checkedList: string[];
}

const initialState:IGlobalSettings = {
  diagnosis: [],
  symptoms: [],
  clinics: [],
  checkedList: [],
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
    filterCheckList: (state, action) => {
      if(!state.checkedList.includes(action.payload)){
        state.checkedList.push(action.payload);
      }else{
        state.checkedList = state.checkedList.filter(item => item!== action.payload);
      }
    }
    
}})

export const { setDiagnosis, setClinic, setSymptom, filterCheckList } = globalSlice.actions
export default globalSlice.reducer;
