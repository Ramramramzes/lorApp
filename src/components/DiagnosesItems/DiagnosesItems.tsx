import styles from './diagnosesitems.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { ItemBtn } from '../ItemBtn/ItemBtn';
import { Accordion } from "react-bootstrap";
import { SearchInput } from '../SearchInput';

import { useState } from 'react';

export function DiagnosesItems() {
  const GlobalState = useSelector((state: RootState) => state.global);
  const [resArr,setResArr] = useState<Array<{diagnos: string, coinClinic: number, coinSymptom: number, coinRes: number}>>([]);
  const clickHandler = () => {
    setResArr([])

    const newResArr = GlobalState.diagnosis.map((el) => {
      let clinicCount = 0;
      let symptomCount = 0;

      el.clinics.forEach((item) => {
        if (GlobalState.checkedList.includes(item.post_title)) {
          clinicCount++;
        }
      });

      el.symptoms.forEach((item) => {
        if (GlobalState.checkedList.includes(item.post_title)) {
          symptomCount++;
        }
      });

      const coinRes = clinicCount + symptomCount;

      return {
        diagnos: el.diagnos,
        coinClinic: clinicCount,
        coinSymptom: symptomCount,
        coinRes: coinRes
      };
    });

    setResArr((prevResArr) => [...prevResArr, ...newResArr]);
    console.log(resArr);
  };

  return (
    <div className={styles.blcok}>
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

      <button onClick={clickHandler}>тык</button>
    </div>
  );
}
