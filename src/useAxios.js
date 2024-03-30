import { useState } from 'react';
import axios from 'axios';
import { v1 as uuid } from 'uuid';

function useAxios(url) {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            const newData = { ...response.data, id: uuid() };
            setData(prevData => [...prevData, newData]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return [data, fetchData];
}

export default useAxios;
