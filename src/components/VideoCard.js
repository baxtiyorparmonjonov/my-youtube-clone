export default function VideoCard({ video }) {
  const videoId = video?.id?.videoId;
  const snippet = video?.snippet;

  return (
    <div className="flex flex-col cursor-pointer">
      <div className="relative w-full aspect-video bg-zinc-800 rounded-xl overflow-hidden">
        <img
          src={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex gap-3 mt-3">
        <div className="flex flex-col">
          <h4 className="text-white font-semibold text-sm line-clamp-2">
            {snippet?.title}
          </h4>
          <span className="text-zinc-400 text-xs mt-1 hover:text-white">
            {snippet?.channelTitle}
          </span>
        </div>
      </div>
    </div>
  )
}