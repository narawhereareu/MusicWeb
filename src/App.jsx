import { useState } from "react";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import Player from "./components/Player";
import QueueList from "./components/QueueList";
import BottomPlayer from "./components/BottomPlayer";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

function App() {
  const [videos, setVideos] = useState([]);
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const currentVideo = videos[index];

  const searchVideos = async (searchQuery) => {
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    setError("");
    
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=20&q=${encodeURIComponent(searchQuery)}&key=${API_KEY}`
      );
      const data = await res.json();

      if (data.error) {
        setError(data.error.message);
        return;
      }

      setVideos(data.items);
      setIndex(0);
    } catch (err) {
      setError("Failed to fetch videos. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const nextSong = () => {
    if (videos.length > 0) {
      setIndex((prev) => (prev + 1) % videos.length);
    }
  };

  const prevSong = () => {
    if (videos.length > 0) {
      setIndex((prev) => (prev - 1 + videos.length) % videos.length);
    }
  };

  const selectSong = (idx) => {
    setIndex(idx);
  };

  return (
    <div className="h-screen bg-black flex flex-col overflow-hidden">
      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 bg-gradient-to-b from-gray-900 to-black overflow-y-auto">
          <div className="p-8">
            {/* Search */}
            <SearchBar 
              onSearch={searchVideos}
              error={error}
            />

            {isLoading && (
              <div className="text-center text-gray-400 py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
                <p className="mt-4">Loading...</p>
              </div>
            )}

            {/* Now Playing Section */}
            {currentVideo && (
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Now Playing</h2>
                <Player 
                  video={currentVideo} 
                  onNext={nextSong} 
                  onPrev={prevSong}
                  hasVideos={videos.length > 0}
                />
              </div>
            )}

            {/* Playlist */}
            {videos.length > 0 && (
              <QueueList 
                videos={videos}
                currentIndex={index}
                onSelectSong={selectSong}
              />
            )}

            {videos.length === 0 && !isLoading && (
              <div className="text-center py-20">
                <svg className="w-24 h-24 mx-auto text-gray-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                <h3 className="text-2xl font-bold text-white mb-2">Start Listening</h3>
                <p className="text-gray-400">Search for your favorite songs and artists</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Player Bar
      {currentVideo && (
        <BottomPlayer 
          video={currentVideo}
          onNext={nextSong}
          onPrev={prevSong}
          hasVideos={videos.length > 0}
        />
      )} */}
    </div>
  );
}

export default App;