import axios from "axios";
import { useEffect, useState } from "react";
import { setSymptom } from "../store/global";
import { useDispatch } from "react-redux";

export const useSymptom = () => {
  const [symptomLoad, setSymptomLoad] = useState(true);
  const [data, setData] = useState<string[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setSymptomLoad(true);
        const response = await axios.get('https://enthelp.ru/wp-json/wp/v2/symptom?per_page=100');
        const clinics = response.data.map((el: { title: { rendered: string } }) => el.title.rendered);
        setData(clinics);
        dispatch(setSymptom(clinics));
        setSymptomLoad(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [dispatch]);

  return {symptomLoad,data};
};
