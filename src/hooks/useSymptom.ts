import axios from "axios";
import { useEffect, useState} from "react"
import { setSymptom } from "../store/global";
import { useDispatch } from "react-redux";

export const useSymptom = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios('https://j26063212.myjino.ru/wordpress/wp-json/wp/v2/symptom');
        setData(response.data);
        dispatch(setSymptom(response.data));
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  return data;
}

