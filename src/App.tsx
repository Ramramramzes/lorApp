import styles from './App.module.scss'
import { CheckedList } from './components/CheckedList';
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
      <CheckedList />
    </div>
  )
}

export default App