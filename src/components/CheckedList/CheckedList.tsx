import styles from './checkedlist.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { filterCheckList } from '../../store/global';

export function CheckedList() {
  const GlobalState = useSelector((state: RootState) => state.global);
  const dispatch = useDispatch();

  const clickHendler = (item: string) => {
      dispatch(filterCheckList(item));
  }

  return (
    <ul className={styles.block + ' container'}>
      {
      GlobalState.checkedList.length != 0 ? 
      
      GlobalState.checkedList &&
      GlobalState.checkedList.map((el,index) => (
        <li key={index} onClick={() => clickHendler(el)} >{el}</li>
      ))
      :
      <span>Вы не выбрали ни одного симптома и клинической картины</span>
      }
    </ul>
  );
}
