
import { useEffect, useState } from "react"
import { InterFace } from "../../common/interFace"
import { Layout } from "../../common/layout"
import { getAllData } from "../../../utils/api/api"

export const Home = () => {


    const [query, setQuery] = useState('all')
    const [youtubeData, setYoutubeData] = useState('')
    const API_INDPOINT = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&key=AIzaSyDS_I7rwP4xaSnf5v36ScpDhX5ysHto6_U`;

    async function getData() {
        const data = await getAllData(API_INDPOINT)

        setYoutubeData(data)
        console.log(youtubeData)
        console.log(query)
        
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <Layout setQuery={setQuery} getData={getData} >
                <InterFace youtubeData={youtubeData} />
            </Layout>
        </div>
    )
}
