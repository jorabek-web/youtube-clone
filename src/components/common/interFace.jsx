import { useEffect, useState } from "react"
import { getAllData } from "../../utils/api/api";


const videos = [
    {
        thumbnail: "public/content-video-thumbnail copy.png",
        avatar: "public/sub-photo.png",
        title: "Doğu Karadeniz Dağlarında Bisikletle Geziyoruz #100",
        channel: "Yiğit Can İÇ",
        verified: "public/image.png",
        views: "27K views",
        time: "1 day ago",
    },
    {
        thumbnail: "public/content-video-thumbnail copy.png",
        avatar: "public/sub-photo.png",
        title: "Doğu Karadeniz Dağlarında Bisikletle Geziyoruz #100",
        channel: "Yiğit Can İÇ",
        verified: "public/image.png",
        views: "27K views",
        time: "1 day ago",
    },
    {
        thumbnail: "public/content-video-thumbnail copy.png",
        avatar: "public/sub-photo.png",
        title: "Doğu Karadeniz Dağlarında Bisikletle Geziyoruz #100",
        channel: "Yiğit Can İÇ",
        verified: "public/image.png",
        views: "27K views",
        time: "1 day ago",
    },
    {
        thumbnail: "public/content-video-thumbnail copy.png",
        avatar: "public/sub-photo.png",
        title: "Doğu Karadeniz Dağlarında Bisikletle Geziyoruz #100",
        channel: "Yiğit Can İÇ",
        verified: "public/image.png",
        views: "27K views",
        time: "1 day ago",
    },
    {
        thumbnail: "public/content-video-thumbnail copy.png",
        avatar: "public/sub-photo.png",
        title: "Doğu Karadeniz Dağlarında Bisikletle Geziyoruz #100",
        channel: "Yiğit Can İÇ",
        verified: "public/image.png",
        views: "27K views",
        time: "1 day ago",
    },
    {
        thumbnail: "public/content-video-thumbnail copy.png",
        avatar: "public/sub-photo.png",
        title: "Doğu Karadeniz Dağlarında Bisikletle Geziyoruz #100",
        channel: "Yiğit Can İÇ",
        verified: "public/image.png",
        views: "27K views",
        time: "1 day ago",
    },
    {
        thumbnail: "public/content-video-thumbnail copy.png",
        avatar: "public/sub-photo.png",
        title: "Doğu Karadeniz Dağlarında Bisikletle Geziyoruz #100",
        channel: "Yiğit Can İÇ",
        verified: "public/image.png",
        views: "27K views",
        time: "1 day ago",
    },
    {
        thumbnail: "public/content-video-thumbnail copy.png",
        avatar: "public/sub-photo.png",
        title: "Doğu Karadeniz Dağlarında Bisikletle Geziyoruz #100",
        channel: "Yiğit Can İÇ",
        verified: "public/image.png",
        views: "27K views",
        time: "1 day ago",
    },
    {
        thumbnail: "public/content-video-thumbnail copy.png",
        avatar: "public/sub-photo.png",
        title: "Doğu Karadeniz Dağlarında Bisikletle Geziyoruz #100",
        channel: "Yiğit Can İÇ",
        verified: "public/image.png",
        views: "27K views",
        time: "1 day ago",
    },
    {
        thumbnail: "public/content-video-thumbnail copy.png",
        avatar: "public/sub-photo.png",
        title: "Doğu Karadeniz Dağlarında Bisikletle Geziyoruz #100",
        channel: "Yiğit Can İÇ",
        verified: "public/image.png",
        views: "27K views",
        time: "1 day ago",
    },
    {
        thumbnail: "public/content-video-thumbnail copy.png",
        avatar: "public/sub-photo.png",
        title: "Doğu Karadeniz Dağlarında Bisikletle Geziyoruz #100",
        channel: "Yiğit Can İÇ",
        verified: "public/image.png",
        views: "27K views",
        time: "1 day ago",
    },
    {
        thumbnail: "public/content-video-thumbnail copy.png",
        avatar: "public/sub-photo.png",
        title: "Doğu Karadeniz Dağlarında Bisikletle Geziyoruz #100",
        channel: "Yiğit Can İÇ",
        verified: "public/image.png",
        views: "27K views",
        time: "1 day ago",
    },
];

export function InterFace() {


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4">
            {videos.map((video, index) => (
                <div key={index} className="pt-6 px-4">
                    <img className="w-full h-auto" src={video.thumbnail} alt="thumbnail" />
                    <div className="flex mt-3">
                        <img className="w-10 h-10 rounded-full" src={video.avatar} alt="channel avatar" />
                        <div className="ml-3">
                            <h2 className="text-white text-sm font-bold leading-4">
                                {video.title}
                            </h2>
                            <p className="text-xs text-gray-400 flex items-center mt-1">
                                {video.channel} <img className="w-3 h-3 ml-1" src={video.verified} alt="verified" />
                            </p>
                            <p className="text-xs text-gray-400">{video.views} • {video.time}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
