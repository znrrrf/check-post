import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = (enpoint, query, limit) => {
    const [data, setData] = useState([])
    const [isLOading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)


    let options;

    if (query) {
        options = {
            method: 'GET',
            url: `https://jsonplaceholder.typicode.com/${enpoint}/${query}`,

        }
    } else if (limit) {
        options = {
            method: 'GET',
            url: `https://jsonplaceholder.typicode.com/${enpoint}?_start=${limit.start}&_limit=${limit.end}`,
        }
    } else {
        options = {
            method: 'GET',
            url: `https://jsonplaceholder.typicode.com/${enpoint}`,

        }
    }

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await axios.request(options)
            setData(response.data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
            alert('there is an error!')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (enpoint) {
            fetchData()
        }
    }, [])

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

    return { data, isLOading, error, refetch }
}

export default useFetch