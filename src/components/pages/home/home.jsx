
// import { useEffect, useState } from "react"
// import { API_ENDPOINT } from "../../../constands"

import { Container } from "../../common/container"
import { InterFace } from "../../common/interFace"
import { Layout } from "../../common/layout"

// import { getAllData } from "../../../utils/api/api"
export const Home = () => {
    // const [data, setData] = useState([])

    // async function getData() {
    //     const data = await getAllData(API_ENDPOINT)
        
    //     setData(data)
    // }

    // useEffect(() => {
    //     getData()
    // }, [])

    // console.log(data)

    return (
        <div>
            <Layout>
                <InterFace />
            </Layout>
        </div>
    )
}
