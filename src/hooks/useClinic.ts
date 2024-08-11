import axios from "axios";
import { useEffect, useState} from "react"
import { setClinic } from "../store/global";
import { useDispatch } from "react-redux";

export const useClinic = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios('https://enthelp.ru/wp-json/wp/v2/clinic');
        setData(response.data);
        dispatch(setClinic(response.data));
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [dispatch]);
  return data;
}

