import { CheckedList } from './components/CheckedList';
import { DiagnosesItems } from './components/DiagnosesItems';
import { useClinic } from './hooks/useClinic';
import { useSymptom } from './hooks/useSymptom';

function App() {
  
  useClinic();
  useSymptom();

  return (
    <>
      <CheckedList />
      <DiagnosesItems />
    </>
  )
}

export default App