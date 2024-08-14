import styles from './App.module.scss'
import { DiagnosesItems } from './components/DiagnosesItems';
import { useClinic } from './hooks/useClinic';
import { useDiagnosis } from './hooks/useDiagnoses';
import { useSymptom } from './hooks/useSymptom';

function App() {
  useClinic();
  useSymptom();
  useDiagnosis();

  return (
    <div className={styles.block}>
      <DiagnosesItems />
    </div>
  )
}

export default App