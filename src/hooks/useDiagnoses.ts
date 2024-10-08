import axios from "axios";
import { useEffect, useState } from "react";
import { IGlobalSettings, setDiagnosis } from "../store/global";
import { useDispatch } from "react-redux";

export const useDiagnosis = () => {
  const [diagnosisLoad, setDiagnosisLoad] = useState(true);
  const [data, setData] = useState<IGlobalSettings["diagnosis"][]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDiagnosisLoad(true);
        const response = await axios.get('https://enthelp.ru/wp-json/wp/v2/diagnosis?per_page=100');
        const processedData = response.data.map((item: {id: number, title: {rendered: string}, symptoms: string[], clinics: string[] }) => ({
          id: item.id,
          diagnos: item.title.rendered,
          symptoms: item.symptoms,
          clinics: item.clinics,
        }));

        dispatch(setDiagnosis(processedData));
        setData(processedData);
        setDiagnosisLoad(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [dispatch]);

  return {diagnosisLoad,data};
};
