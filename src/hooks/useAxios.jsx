import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAxios (url, defaultState=null) {
    const [state, setState] = useState(defaultState);

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                console.log(response);
                setState(response.data);
            });
    }, []);

    return [state, setState];
}
