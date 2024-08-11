import axios from "axios";
import { useEffect, useState } from "react";
import { setClinic } from "../store/global";
import { useDispatch } from "react-redux";

export const useClinic = () => {
  const [data, setData] = useState<string[]>([]); // Указываем тип данных как массив строк
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios('https://enthelp.ru/wp-json/wp/v2/clinic');
        const clinics = response.data.map((el: { title: { rendered: string } }) => el.title.rendered);

        setData(clinics);
        dispatch(setClinic(clinics));
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [dispatch]);

  return data;
};
