import { useState, useEffect } from "react"
import VideoCard from "../components/VideoCard"
import { mockVideos } from "../data/mockVideos"

export default function Home() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    setVideos(mockVideos)
  }, [])

  return (
    <div className="flex-1 bg-black min-h-screen p-6 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((item, index) => (
          <div key={index}>
            {item.id.videoId && <VideoCard video={item} />}
          </div>
        ))}
      </div>
    </div>
  )
}