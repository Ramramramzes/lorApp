import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { useClinic } from './hooks/useClinic';
// import { useEffect } from 'react';
import { useSymptom } from './hooks/useSymptom';


function App() {
  const GlobalState = useSelector((state: RootState) => state.global);
  useClinic();
  useSymptom();

  return (
    <>
      <div>
        {
        GlobalState.clinics && GlobalState.clinics.length > 0 && 
        GlobalState.clinics.map((el) => (
          <li key={el.id}>{el.title.rendered}</li>
        ))
        }
      </div>
      <div>
        {
        GlobalState.symptoms && GlobalState.symptoms.length > 0 && 
        GlobalState.symptoms.map((el) => (
          <li key={el.id}>{el.title.rendered}</li>
        ))
        }
      </div>
    </>
  )
}

export default App