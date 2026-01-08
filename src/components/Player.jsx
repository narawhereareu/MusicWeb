import { useEffect, useRef } from "react";

function Player({ video, onNext }) {
  const playerRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }
  }, []);

  useEffect(() => {
    if (!video || !window.YT) return;

    if (playerRef.current) {
      playerRef.current.destroy();
    }

    playerRef.current = new window.YT.Player(iframeRef.current, {
      videoId: video.id.videoId,
      events: {
        onStateChange: (event) => {
          if (event.data === window.YT.PlayerState.ENDED) onNext();
        },
      },
      playerVars: { autoplay: 1 },
    });

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [video, onNext]);

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="w-full aspect-video bg-black">
        <div ref={iframeRef} className="w-full h-full"></div>
      </div>
    </div>
  );
}

export default Player;