import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { useClinic } from './hooks/useClinic';
import { useSymptom } from './hooks/useSymptom';
import { ItemBtn } from './components/ItemBtn';
import { Accordion } from 'react-bootstrap';
import styles from './App.module.scss';


function App() {
  const GlobalState = useSelector((state: RootState) => state.global);
  useClinic();
  useSymptom();

  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Клинические картины</Accordion.Header>
          <Accordion.Body className={styles.btnsBlock}>
            {
            GlobalState.clinics && GlobalState.clinics.length > 0 && 
            GlobalState.clinics.map((el) => (
              <ItemBtn key={el.id} text={el.title.rendered}></ItemBtn>
            ))
            }
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Симптомы</Accordion.Header>
          <Accordion.Body className={styles.btnsBlock}>
            {
            GlobalState.symptoms && GlobalState.symptoms.length > 0 && 
            GlobalState.symptoms.map((el) => (
              <ItemBtn key={el.id} text={el.title.rendered}></ItemBtn>
            ))
            }
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  )
}

export default App