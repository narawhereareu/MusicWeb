function VideoItem({ video, onSelect, isActive }) {
  return (
    <div
      onClick={onSelect}
      className={`cursor-pointer p-3 rounded-xl flex items-center gap-3 transition-all ${
        isActive
          ? "bg-purple-500/40 border border-purple-400/50"
          : "bg-white/5 hover:bg-white/10 border border-transparent"
      }`}
    >
      <div className="relative flex-shrink-0">
        <img
          src={video.snippet.thumbnails.default.url}
          alt={video.snippet.title}
          className="w-16 h-16 rounded-lg object-cover"
        />
        {isActive && (
          <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
            <span className="text-2xl">▶️</span>
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className={`font-medium text-sm line-clamp-2 ${
          isActive ? "text-white" : "text-purple-100"
        }`}>
          {video.snippet.title}
        </p>
        <p className="text-xs text-purple-300 mt-1">{video.snippet.channelTitle}</p>
      </div>
    </div>
  );
}

export default VideoItem;