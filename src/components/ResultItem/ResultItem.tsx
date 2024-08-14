// import styles from './resultitem.module.scss';

import { useEffect, useState } from "react";
import { clearCheckList, setClinic, setSymptom } from "../../store/global";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Badge, Button, ListGroup } from "react-bootstrap";

export function ResultItem({resArr,setResArr}: {resArr: Array<{diagnos: string, coinClinic: number, coinSymptom: number, coinRes: number}>, setResArr: (e:Array<{diagnos: string, coinClinic: number, coinSymptom: number, coinRes: number}>) => void}) {
  const GlobalState = useSelector((state: RootState) => state.global);
  const dispatch = useDispatch()
  const [sortedRes,setSortedRes] = useState(resArr);
  const resetBtnHandler = () => {
    dispatch(setSymptom([]))
    dispatch(setClinic([]))
    dispatch(clearCheckList())
    setResArr([])
  }
  // const GlobalState = useSelector((state: RootState) => state.global);
  useEffect(() => {
    const sortedDiagnoses = resArr.filter(el => el.coinRes != 0).sort((a, b) => b.coinRes - a.coinRes).slice(0, 5);
    setSortedRes(sortedDiagnoses);
  },[GlobalState, resArr])

  return (
    <>
      {sortedRes.length > 0 ? sortedRes.map((item, index) => (
        <ListGroup as="ol">
          <ListGroup.Item
            as="li"
            className="d-flex flex-direction-column justify-content-center "
            style={{marginBottom: "3%"}}
            key={index}
          >
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <h3 style={{textAlign: 'center'}}>{item.diagnos}</h3>
              <div style={{display: 'flex', gap: '10px', marginBottom: '2%',  marginTop: '1%'}}>
                <Badge bg="success" pill>
                  Всего совпадений {item.coinRes}
                </Badge>
                <Badge bg="primary" pill>
                  Клинических картин {item.coinClinic}
                </Badge>
                <Badge bg="danger" pill>
                  Симптомов {item.coinSymptom}
                </Badge>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
                  <div style={{width: '45%'}}>
                    <h5>Клинические картины:</h5>
                    {GlobalState.diagnosis.filter(el => el.diagnos === item.diagnos).map(listItem => {
                      return (
                        listItem.clinics.map(clinicItem => {
                          return (
                            <ListGroup.Item variant={GlobalState.checkedList.includes(clinicItem.post_title) ? 'success' : 'light'}>{clinicItem.post_title}</ListGroup.Item>
                          )
                        })
                      )
                    })}
                  </div>
                  <div style={{width: '45%'}}>
                    <h5>Симптомы:</h5>
                    {GlobalState.diagnosis.filter(el => el.diagnos === item.diagnos).map(listItem => {
                      return (
                        listItem.symptoms.map(clinicItem => {
                          return (
                            <ListGroup.Item variant={GlobalState.checkedList.includes(clinicItem.post_title) ? 'success' : 'light'}>{clinicItem.post_title}</ListGroup.Item>
                          )
                        })
                      )
                    })}
                  </div>
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      ))
    :
    <>
      <h3>Нет результатов</h3>
    </>}
      <Button variant="primary"  onClick={resetBtnHandler}>Попробовать еще</Button>{' '}
    </>
  );
}
