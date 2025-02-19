import { Route, Routes } from "react-router-dom";
import { InterFace } from "../../common/interFace";
import { Layout } from "../../common/layout";
import { History } from "../../common/history";
import { useEffect, useState } from "react";
import { getAllData } from "../../../utils/api/api";
import { VideoInterFace } from "../../common/video-interface";
import { WatchLater } from "../../common/watchLater";

export const Home = () => {


  const [query, setQuery] = useState('all')
  const [youtubeData, setYoutubeData] = useState('')
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)
  const API_INDPOINT = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&maxResults=120&key=AIzaSyDi5A9PnDvdUzr1TdgD8avFB3x49P4Uy_A`;

  async function getData() {
    const data = await getAllData(API_INDPOINT)

    setYoutubeData(data)
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div>
      <Layout setQuery={setQuery} getData={getData} setIsOpenSidebar={setIsOpenSidebar} isOpenSidebar={isOpenSidebar} >
        <Routes>
          <Route path="/" element={<InterFace youtubeData={youtubeData} isOpenSidebar={isOpenSidebar} />} />
          <Route path="/videoInterface/:id" element={<VideoInterFace youtubeData={youtubeData} />} />
          <Route path="/history" element={<History />} />
          <Route path="/watchLater" element={<WatchLater />} />
        </Routes>
      </Layout>
    </div>
  );
};
