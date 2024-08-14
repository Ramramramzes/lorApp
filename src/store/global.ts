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
  resultMode: boolean;
}

const initialState:IGlobalSettings = {
  diagnosis: [],
  symptoms: [],
  clinics: [],
  checkedList: [],
  resultMode: false,
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
    clearCheckList: (state) => {
      state.checkedList = [];
    },
    filterCheckList: (state, action) => {
      if(!state.checkedList.includes(action.payload)){
        state.checkedList.push(action.payload);
      }else{
        state.checkedList = state.checkedList.filter(item => item!== action.payload);
      }
    },
    changeMode: (state) => {
      state.resultMode = !state.resultMode;
    }
    
}})

export const { setDiagnosis, setClinic, setSymptom, filterCheckList, clearCheckList, changeMode } = globalSlice.actions
export default globalSlice.reducer;
