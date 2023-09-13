import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then((res) => {
                if(!res.ok) {
                    throw Error("Unable to fetch data")
                }
                return res.json()
            })
            .then((data) => {
                 if(data.results) {
                    const newData = data.results.slice(0, 10)
                    setData(newData);
                    setLoading(false);
                    console.log(newData)
                } else {
                    setData(data);
                    setLoading(false);
                }
                
                
            })
            .catch(err => {
                console.log(err.message);
                setError(err.message);
                setLoading(false);
            }) 


        }, 2000);
        
    },[url])
    return {loading, data, error};
}

export default useFetch;

