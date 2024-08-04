import { useDispatch, useSelector } from 'react-redux';
import styles from './itembtn.module.scss';
import { RootState } from '../../store/store';
import { filterCheckList } from '../../store/global';

export function ItemBtn({text}: {text: string}) {
  const GlobalState = useSelector((state: RootState) => state.global);
  const dispatch = useDispatch();
  
  const clickHandler = () =>{
    dispatch(filterCheckList(text));
  }
  console.log(GlobalState.checkedList);
  return (
    <div
    className={styles.btn}
    onClick={clickHandler}
    >
      {text}
    </div>
  );
}
