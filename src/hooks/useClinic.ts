import axios from "axios";
import { useEffect, useState } from "react";
import { setClinic } from "../store/global";
import { useDispatch } from "react-redux";

export const useClinic = () => {
  const [clinicLooad, setClinicLooad] = useState(true);
  const [data, setData] = useState<string[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setClinicLooad(true);
        const response = await axios('https://enthelp.ru/wp-json/wp/v2/clinic?per_page=100');

        const clinics = response.data.map((el: { title: { rendered: string } }) => el.title.rendered);

        setData(clinics);
        dispatch(setClinic(clinics));
        setClinicLooad(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [dispatch]);

  return {clinicLooad, data};
};
