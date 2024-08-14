import styles from './searchinput.module.scss';
import { ChangeEvent, useState } from 'react';
import { useDispatch} from 'react-redux';
import { useClinic } from '../../hooks/useClinic';
import { setClinic, setSymptom } from '../../store/global';
import { useSymptom } from '../../hooks/useSymptom';

export function SearchInput({where}:{where: string}) {
  const dispatch = useDispatch(); 
  const clinic = useClinic();
  const symptom = useSymptom()
  const allClinics = where === 'clinic' ? clinic : symptom
  const [content, setContent] = useState('');

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setContent(searchTerm)
    const filtered = allClinics.filter((el:string) =>
      el.toLowerCase().includes(searchTerm)
    );
    where === 'clinic'? dispatch(setClinic(filtered)) : dispatch(setSymptom(filtered))
  }

  return (
    <div className={styles.block}>
      <input 
        className={styles.searchInput}
        type="text"
        onChange={changeHandler}
        style={content !== '' ? {borderColor: '#88cce4'} : {}}
        placeholder={`Введите ${where === 'clinic' ? 'клиническую картину' : 'симптом'} для поиска`} />
    </div>
  );
}
