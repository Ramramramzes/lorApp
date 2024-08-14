import styles from './accordionitem.module.scss';
import { Accordion, Button } from 'react-bootstrap';
import { SearchInput } from '../SearchInput';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { ItemBtn } from '../ItemBtn';
import { OffcanvasRight } from '../OffcanvasRight';

export function AccordionItem({handler}: {handler: () => void}) {
  const GlobalState = useSelector((state: RootState) => state.global);
  return (
    <div className={styles.block}>
      <h2>Выберите клинические картины и симптомы</h2>
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
      <div className={styles.actionBtns}>
        <Button variant="primary" onClick={handler}>Показать результат</Button>{' '}
        <OffcanvasRight />
      </div>
    </div>
  );
}
