
import { useEffect, useState } from "react"
import { API_ENDPOINT } from "../../../constands"
export const Home = () => {
    const [data, setData] = useState([])

    async function getData(endpoint) {
        const response = await fetch(endpoint)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        return await response.json()
    }

    useEffect(() => {
        getData(API_ENDPOINT)
    }, [])
    console.log(data)    

    return (
        <div>
            <h1 className="text-center text-black font-bold text-4xl">home</h1>
        </div>
    )
}
