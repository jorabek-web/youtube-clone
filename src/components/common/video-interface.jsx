import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getChannelData, getVideoData } from "../../utils/api/api";
import { BiDislike, BiLike } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";

export const VideoInterFace = ({ youtubeData }) => {
    const params = useParams();
    const [videoData, setVideoData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [isDescriptions, setIsDescriptions] = useState(null);
    const [videos, setVideos] = useState([]);

    const VIDEO_API_ENDPOINT = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${params.id}&key=AIzaSyDi5A9PnDvdUzr1TdgD8avFB3x49P4Uy_A`;


    useEffect(() => {
        if (youtubeData?.items) {
            setVideos(youtubeData.items)
            
        }
    }, [youtubeData]);
    console.log(videos)
    
    useEffect(() => {
        const fetchVideoData = async () => {
            try {
                const data = await getVideoData(VIDEO_API_ENDPOINT);
                setVideoData(data);
            } catch (error) {
                console.error("Error fetching video data:", error);
            }
        };

        fetchVideoData();
    }, [VIDEO_API_ENDPOINT]);

    useEffect(() => {
        if (videoData?.items?.[0]?.snippet?.channelId) {
            const CHANNEL_ID_ENDPOINT = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${videoData.items[0].snippet.channelId}&key=AIzaSyDi5A9PnDvdUzr1TdgD8avFB3x49P4Uy_A`;

            const fetchChannelData = async () => {
                try {
                    const data = await getChannelData(CHANNEL_ID_ENDPOINT);
                    setChannelData(data);
                } catch (error) {
                    console.error("Error fetching channel data:", error);
                }
            };

            fetchChannelData();
        }
    }, [videoData]);

    if (!videoData || !channelData) {
        return <h1 className="text-white text-center mt-20 text-2xl">Loading...</h1>;
    }

    const video = videoData.items[0];
    const channel = channelData.items[0];


    return (
        <div className="px-16 py-8 text-white">
            {/* Video section */}
            <div className="w-full flex gap-6">
                <div className="w-8/12">
                    <div>
                        <iframe
                            width="100%"
                            height="520px"
                            src={`https://www.youtube.com/embed/${params.id}`}
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            title={video.snippet.title}
                        ></iframe>
                    </div>

                    {/* Side section */}
                    <div className="w-full">
                        <h2 className="text-xl font-bold my-4">{video.snippet.title}</h2>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-4">
                                <img
                                    src={channel.snippet.thumbnails.default.url}
                                    alt="Channel"
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">{channel.snippet.title}</h3>
                                    <p className="text-sm text-gray-400">
                                        {parseInt(channel.statistics.subscriberCount).toLocaleString()}{" "}
                                        subscribers
                                    </p>
                                </div>
                                <button className="w-[100px] h-[35px] bg-white rounded-full font-semibold text-[14px] text-[#0f0f0f]">Subscribers</button>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="w-[120px] h-[35px] bg-[#262626] text-white text-[14px] font-semibold rounded-full overflow-hidden flex items-center justify-baseline">
                                    <button className="flex items-center justify-center gap-2 w-7/12 h-full hover:bg-[#333333]"> <BiLike /> {video.statistics.likeCount}</button>
                                    <div className="border-r border-white h-8/12"></div>
                                    <button className="flex items-center justify-center gap-2 w-5/12 h-full hover:bg-[#333333]"><BiDislike /></button>
                                </div>

                                <button className="w-[35px] h-[35px] flex items-center justify-center bg-[#262626] hover:bg-[#333333] rounded-full">
                                    <CiMenuKebab />
                                </button>
                            </div>
                        </div>
                        <div onClick={() => setIsDescriptions(prev => !prev)} className={`p-2 rounded-xl bg-[#262626] cursor-pointer w-full overflow-hidden ${isDescriptions ? "h-auto" : "h-[112px]"}`}>
                            <div>
                                <p>
                                    <span className="font-bold">
                                        {parseInt(video.statistics.viewCount).toLocaleString()}
                                    </span>{" "}
                                    views •{" "}
                                    <span>
                                        {new Date(video.snippet.publishedAt).toLocaleDateString()}
                                    </span>
                                </p>
                            </div>
                            <p className="text-sm text-gray-400 mb-6">
                                {video.snippet.description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border border-white w-4/12 h-auto">
                    {videos.map((video, i) => {
                        const snippet = video.snippet

                        console.log(snippet)

                        return (
                            <Link to={`/videoInterface/${snippet}`} key={i} className="flex items-start justify-between w-full h-34 mb-2 border border-white">
                                <img
                                    src={snippet.thumbnails.default.url}
                                    alt={snippet.title}
                                    className="w-32 h-32 rounded-md"
                                />
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-sm font-semibold">{snippet.title}</h3>
                                    {/* <p className="text-sm text-gray-400">{parseInt(video.statistics.viewCount).toLocaleString()} views</p> */}
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>

        </div>
    );
};
