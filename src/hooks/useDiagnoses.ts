import axios from "axios";
import { useEffect, useState} from "react"

export const useDiagnosis = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios('https://enthelp.ru/wp-json/wp/v2/diagnosis');
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  return data;
}

