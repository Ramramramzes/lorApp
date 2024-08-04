import { useDispatch, useSelector } from 'react-redux';
import styles from './itembtn.module.scss';
import { RootState } from '../../store/store';
import { filterCheckList } from '../../store/global';
import { useState } from 'react';

export function ItemBtn({text}: {text: string}) {
  const GlobalState = useSelector((state: RootState) => state.global);
  const [light,setLight] = useState(false);
  const dispatch = useDispatch();
  
  const clickHandler = () =>{
    dispatch(filterCheckList(text));
    setLight(!light);
  }
  console.log(GlobalState.checkedList);
  return (
    <div
    className={styles.btn}
    onClick={clickHandler}
    >
      <div className={styles.text}>{text}</div>
      <div className={styles.redLight} style={{
  backgroundColor: light ? 'rgb(95, 220, 67)' : 'rgb(249, 60, 60)',
  boxShadow: `0 0 15px ${!light ? 'rgb(249, 60, 60)' : 'rgb(95, 220, 67)'}`
}}></div>
    </div>
  );
}
