import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { useClinic } from './hooks/useClinic';
import { useEffect } from 'react';


function App() {
  const GlobalState = useSelector((state: RootState) => state.global);
  useClinic();
  useEffect(() =>{
    console.log(GlobalState.clinics);
  },[GlobalState.clinics]);

  return (
    <>
      {GlobalState.clinics && 
      GlobalState.clinics.map((el) => (
        <li key={el.id}>{el.title.rendered}</li>
      ))
      }
    </>
  )
}

export default App