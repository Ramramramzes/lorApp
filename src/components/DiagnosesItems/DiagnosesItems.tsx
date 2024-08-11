import styles from './diagnosesitems.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { ItemBtn } from '../ItemBtn/ItemBtn';
import { Accordion } from "react-bootstrap";
import { SearchInput } from '../SearchInput';

export function DiagnosesItems() {
  const GlobalState = useSelector((state: RootState) => state.global);

  const clickHandler = () => {

    console.log(GlobalState.diagnosis);
  }

  return (
    <div className={styles.blcok}>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0" >
          <Accordion.Header>Клинические картины</Accordion.Header>
          <Accordion.Body className={styles.btnsBlock}>
            <SearchInput where="clinic" />
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
          <SearchInput where="symptom" />
            {
            GlobalState.symptoms && GlobalState.symptoms.length > 0 && 
            GlobalState.symptoms.map((el) => (
              <ItemBtn key={el.id} text={el.title.rendered}></ItemBtn>
            ))
            }
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <button onClick={clickHandler}>тык</button>
    </div>
  );
}
