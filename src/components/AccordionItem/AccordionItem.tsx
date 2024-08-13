import styles from './accordionitem.module.scss';
import { Accordion } from 'react-bootstrap';
import { SearchInput } from '../SearchInput';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { ItemBtn } from '../ItemBtn';

export function AccordionItem({handler}: {handler: () => void}) {
  const GlobalState = useSelector((state: RootState) => state.global);
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0" >
          <Accordion.Header>Клинические картины</Accordion.Header>
          <Accordion.Body className={styles.btnsBlock}>
            <SearchInput where="clinic" />
            {
            GlobalState.clinics && GlobalState.clinics.length > 0 && 
            GlobalState.clinics.map((el,index) => (
              <ItemBtn key={index + `_${el}`} text={el}></ItemBtn>
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
            GlobalState.symptoms.map((el,index) => (
              <ItemBtn key={index + `_${el}`} text={el}></ItemBtn>
            ))
            }
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <button onClick={handler}>тык</button>
    </>
  );
}
