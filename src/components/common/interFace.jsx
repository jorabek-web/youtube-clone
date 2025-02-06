import { useEffect, useState } from "react"
import { getAllData } from "../../utils/api/api";




export const InterFace = () => {
    const [query, setQuery] = useState('all')
    const [youtubeData, setYoutubeData] = useState('')
    const API_INDPOINT = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&key=AIzaSyDS_I7rwP4xaSnf5v36ScpDhX5ysHto6_U`;

    async function getData () {
        const data = await getAllData(API_INDPOINT)

        setYoutubeData(data)
        console.log(youtubeData)    
    }

    useEffect(() => {
        getData()
    }, [])

  
    

    return (
        <div className="w-full h-full">
            <input type="text" className="bg-transparent border border-white w-full h-10 text-white" onChange={(e) => setQuery(e.target.value)} />
            <button className="w-40 h-10 border border-white text-white" onClick={getData}>submit</button>
        </div>
    )
}
