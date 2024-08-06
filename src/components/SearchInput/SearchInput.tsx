import { ChangeEvent } from 'react';
import { useDispatch} from 'react-redux';
import styles from './searchinput.module.css';
import { useClinic } from '../../hooks/useClinic';
import { IDiagnosisSettings, setClinic } from '../../store/global';

export function SearchInput() {
  const dispatch = useDispatch(); 
  const allClinics = useClinic()

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredClinics = allClinics.filter((el:IDiagnosisSettings) =>
      el.title.rendered.toLowerCase().includes(searchTerm)
    );
    dispatch(setClinic(filteredClinics)); 
  }

  return (
    <div className={styles.block}>
      <input type="text" onChange={changeHandler} />
    </div>
  );
}
