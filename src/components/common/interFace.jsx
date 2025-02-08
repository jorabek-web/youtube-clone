import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function InterFace({ youtubeData, loadMore, isOpenSidebar }) {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        if (youtubeData?.items) {
            setVideos(youtubeData.items);
        }
    }, [youtubeData]);


    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
            ) {
                loadMore();
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loadMore]);

    return (
        <div className={`grid ${isOpenSidebar ? "grid-cols-3" : "grid-cols-4" } gap-4 p-4`}>
            {videos.map((video, index) => {
                const snippet = video.snippet;
                return (
                    <Link to={`/videoInterface/${video.id.videoId}`} key={index} className={`mt-4 h-auto ${isOpenSidebar ? "w-[400px]" : "w-[340px]"}`}>
                        <img
                            className="h-6/12  w-full rounded-xl object-cover hover:rounded-none transition-all duration-400"
                            src={snippet.thumbnails.high.url}
                            alt="thumbnail"
                        />
                        <div className="flex mt-3">
                            <img className="w-10 h-10 rounded-full" src={snippet.channelThumbnail} alt="channel avatar" />
                            <div className="ml-3">
                                <h2 className="text-white text-[17px] font-semibold leading-5">
                                    {`${snippet.title.slice(0, 100)}...`}
                                </h2>
                                <p className="text-[15px] text-gray-400 flex items-center mt-1">
                                    {snippet.channelTitle}
                                </p>
                                <p className="text-[15px] text-gray-400">{video.statistics?.viewCount} views</p>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
