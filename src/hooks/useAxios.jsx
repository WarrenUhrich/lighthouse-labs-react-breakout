import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAxios (url, defaultState=null) {
    const [state, setState] = useState(defaultState);

    useEffect(() => {
        if (url && typeof url === 'string') {
            axios.get(url)
                .then((response) => {
                    console.log(response);
                    setState(response.data);
                });
        } else if (url && Array.isArray(url)) {
            const axiosRequests = [];
            url.forEach((u) => {
                const req = axios.get(u)
                    .then((response) => {
                        console.log('array axios handler:', response);
                        return response.data;
                    });;
                axiosRequests.push(req); // Add URL for this person to the list.
            });
            Promise.all(axiosRequests)
                .then((values) => {
                    setState(values);
                });
        }
    }, []);

    return [state, setState];
}
