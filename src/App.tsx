import { useEffect, useState } from 'react';
import styles from './App.module.scss'
import { DiagnosesItems } from './components/DiagnosesItems';
import { useClinic } from './hooks/useClinic';
import { useDiagnosis } from './hooks/useDiagnoses';
import { useSymptom } from './hooks/useSymptom';

function App() {
  const {clinicLooad} = useClinic();
  const {symptomLoad} = useSymptom();
  const {diagnosisLoad} = useDiagnosis();
  const [loadState, setLoadState] = useState(false)
  
  useEffect(() => {
    setLoadState(clinicLooad === false && symptomLoad === false && diagnosisLoad === false)
  },[clinicLooad, symptomLoad, diagnosisLoad, loadState])

  return (
    <div className={styles.block}>
      {loadState ? <DiagnosesItems />
      :
      <>loading</>}
    </div>
  )
}

export default App