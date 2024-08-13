// import styles from './resultitem.module.scss';

import { useEffect, useState } from "react";
import { clearCheckList, setClinic, setSymptom } from "../../store/global";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

export function ResultItem({resArr,setResArr}: {resArr: Array<{diagnos: string, coinClinic: number, coinSymptom: number, coinRes: number}>, setResArr: (e:Array<{diagnos: string, coinClinic: number, coinSymptom: number, coinRes: number}>) => void}) {
  const GlobalState = useSelector((state: RootState) => state.global);
  const dispatch = useDispatch()
  const [sortedRes,setSortedRes] = useState(resArr);
  const resetBtnHandler = () => {
    dispatch(setSymptom([]))
    dispatch(setClinic([]))
    dispatch(clearCheckList())
    console.log(GlobalState.checkedList);
    
    setResArr([])
  }
  // const GlobalState = useSelector((state: RootState) => state.global);
  useEffect(() => {
    const sortedDiagnoses = resArr.sort((a, b) => b.coinRes - a.coinRes).slice(0, 5);
    setSortedRes(sortedDiagnoses);
  },[resArr])

  return (
    <>
      {sortedRes.map((item, index) => (
        <div key={index} className="result-item">
          <h4>{item.diagnos}</h4>
          <p>
            Coin Clinic: {item.coinClinic}
            <br />
            Coin Symptom: {item.coinSymptom}
            <br />
            Coin Result: {item.coinRes}
          </p>
        </div>
      ))}

      <button onClick={resetBtnHandler}>еще</button>
    </>
  );
}
