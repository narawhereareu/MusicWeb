function QueueList({ videos, currentIndex, onSelectSong }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Queue</h2>
      <div className="space-y-2">
        {videos.map((video, idx) => (
          <div
            key={video.id.videoId}
            onClick={() => onSelectSong(idx)}
            className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition group ${
              idx === currentIndex
                ? "bg-gray-800"
                : "hover:bg-gray-800/50"
            }`}
          >
            <div className="flex-shrink-0 relative">
              <img
                src={video.snippet.thumbnails.default.url}
                alt={video.snippet.title}
                className="w-14 h-14 rounded object-cover"
              />
              {idx === currentIndex ? (
                <div className="absolute inset-0 bg-black/60 rounded flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              ) : (
                <div className="absolute inset-0 bg-black/60 rounded items-center justify-center hidden group-hover:flex">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className={`font-semibold truncate ${
                idx === currentIndex ? "text-green-500" : "text-white"
              }`}>
                {video.snippet.title}
              </p>
              <p className="text-gray-400 text-sm truncate">{video.snippet.channelTitle}</p>
            </div>
            <div className="text-gray-400 text-sm">
              {idx + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QueueList;