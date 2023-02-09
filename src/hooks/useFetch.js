import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch(url).then(data => data.json()).then(products => {
            setData(products)
            console.log(products)
        }).finally(() => setLoading(false))
    }, [url])
    return { data, loading }
}

export default useFetch