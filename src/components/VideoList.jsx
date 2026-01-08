import VideoItem from "./VideoItem";

function VideoList({ videos, currentIndex, onSelectSong }) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-4 h-[600px] flex flex-col">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/20">
        <span className="text-2xl">🎧</span>
        <h2 className="text-xl font-semibold text-white">
          Playlist ({videos.length})
        </h2>
      </div>
      <div className="overflow-y-auto flex-1 space-y-2 pr-2">
        {videos.length === 0 ? (
          <p className="text-purple-200 text-center py-8">
            Search for music to build your playlist
          </p>
        ) : (
          videos.map((video, idx) => (
            <VideoItem
              key={video.id.videoId}
              video={video}
              onSelect={() => onSelectSong(idx)}
              isActive={idx === currentIndex}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default VideoList;