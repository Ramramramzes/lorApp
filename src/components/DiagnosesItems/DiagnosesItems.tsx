import styles from './diagnosesitems.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
// import { ItemBtn } from '../ItemBtn/ItemBtn';
// import { Accordion } from "react-bootstrap";
// import { SearchInput } from '../SearchInput';

import { useEffect, useState } from 'react';
import { AccordionItem } from '../AccordionItem';
import { ResultItem } from '../ResultItem';

export function DiagnosesItems() {
  const GlobalState = useSelector((state: RootState) => state.global);
  const [resArr,setResArr] = useState<Array<{diagnos: string, coinClinic: number, coinSymptom: number, coinRes: number}>>([]);

  const cklickResulHandler = () => {
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
  };

  useEffect(() => {
    console.log(resArr);
  },[resArr])

  return (
    <div className={styles.blcok}>
      {resArr.length > 0 ? 
        <ResultItem resArr={resArr} setResArr={setResArr} />
        :
        <AccordionItem handler={cklickResulHandler} />
    }
    </div>
  );
}
