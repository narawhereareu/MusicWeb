import { useEffect, useState } from "react";

function BottomPlayer({ video, onNext, onPrev, hasVideos }) {
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // This would need access to the player ref from the main Player component
      // For now, this is a placeholder
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gray-900 border-t border-gray-800 px-4 py-3">
      {/* Progress Bar */}
      <div className="w-full mb-2">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>{formatTime(currentTime)}</span>
          <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden group cursor-pointer">
            <div
              className="h-full bg-green-500 group-hover:bg-green-400 transition"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        {/* Left - Track Info */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <img
            src={video.snippet.thumbnails.default.url}
            alt={video.snippet.title}
            className="w-14 h-14 rounded object-cover"
          />
          <div className="min-w-0">
            <p className="text-white text-sm font-semibold truncate">
              {video.snippet.title}
            </p>
            <p className="text-gray-400 text-xs truncate">{video.snippet.channelTitle}</p>
          </div>
          <button className="text-gray-400 hover:text-white transition ml-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        {/* Center - Playback Controls */}
        <div className="flex items-center gap-4 flex-1 justify-center">
          <button className="text-gray-400 hover:text-white transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 6a1 1 0 012 0v8a1 1 0 11-2 0V6zM17 6a1 1 0 012 0v8a1 1 0 11-2 0V6zM9 16.5L15 12 9 7.5v9z"/>
            </svg>
          </button>
          <button
            onClick={onPrev}
            disabled={!hasVideos}
            className="text-gray-400 hover:text-white disabled:opacity-30 transition"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
            </svg>
          </button>
          <button
            disabled={!hasVideos}
            className="bg-white text-black rounded-full p-2 hover:scale-105 disabled:opacity-30 transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              {isPlaying ? (
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              ) : (
                <path d="M8 5v14l11-7z"/>
              )}
            </svg>
          </button>
          <button
            onClick={onNext}
            disabled={!hasVideos}
            className="text-gray-400 hover:text-white disabled:opacity-30 transition"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
            </svg>
          </button>
          <button className="text-gray-400 hover:text-white transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>

        {/* Right - Volume */}
        <div className="flex items-center gap-3 flex-1 justify-end">
          <button className="text-gray-400 hover:text-white transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          </button>
          <div className="w-24 h-1 bg-gray-700 rounded-full overflow-hidden cursor-pointer group">
            <div className="h-full bg-white group-hover:bg-green-500 transition" style={{ width: "70%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomPlayer;