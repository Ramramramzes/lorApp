import axios from "axios";
import { useEffect, useState } from "react";
import { IGlobalSettings, setDiagnosis } from "../store/global";
import { useDispatch } from "react-redux";

export const useDiagnosis = () => {
  const [data, setData] = useState<IGlobalSettings["diagnosis"][]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://enthelp.ru/wp-json/wp/v2/diagnosis');
        const processedData = response.data.map((item: {id: number, title: {rendered: string}, symptoms: string[], clinics: string[] }) => ({
          id: item.id,
          diagnos: item.title.rendered,
          symptoms: item.symptoms,
          clinics: item.clinics,
        }));

        dispatch(setDiagnosis(processedData));
        setData(processedData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [dispatch]);

  return data;
};
