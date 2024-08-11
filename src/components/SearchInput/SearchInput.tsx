import { ChangeEvent } from 'react';
import { useDispatch} from 'react-redux';
import styles from './searchinput.module.css';
import { useClinic } from '../../hooks/useClinic';
import { IDiagnosisSettings, setClinic, setSymptom } from '../../store/global';
import { useSymptom } from '../../hooks/useSymptom';

export function SearchInput({where}:{where: string}) {
  const dispatch = useDispatch(); 
  const clinic = useClinic();
  const symptom = useSymptom()
  const allClinics = where === 'clinic' ? clinic : symptom

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = allClinics.filter((el:IDiagnosisSettings) =>
      el.title.rendered.toLowerCase().includes(searchTerm)
    );
    where === 'clinic'? dispatch(setClinic(filtered)) : dispatch(setSymptom(filtered))
  }

  return (
    <div className={styles.block}>
      <input type="text" onChange={changeHandler} />
    </div>
  );
}
