import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { useClinic } from './hooks/useClinic';
// import { useEffect } from 'react';
import { useSymptom } from './hooks/useSymptom';
import { ItemBtn } from './components/ItemBtn';


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
          <ItemBtn key={el.id} text={el.title.rendered}></ItemBtn>
        ))
        }
      </div>
      <div>
        {
        GlobalState.symptoms && GlobalState.symptoms.length > 0 && 
        GlobalState.symptoms.map((el) => (
          <ItemBtn key={el.id} text={el.title.rendered}></ItemBtn>
        ))
        }
      </div>
    </>
  )
}

export default App