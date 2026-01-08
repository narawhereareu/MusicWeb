function Sidebar() {
  return (
    <div className="w-64 bg-black p-6 flex flex-col border-r border-gray-800">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
          </svg>
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Music App 
          </span>
        </h1>
      </div>

      <nav className="space-y-4">
        {/* <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition px-3 py-2 rounded-md hover:bg-gray-900">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="font-semibold">Home</span>
        </a> */}
        <a href="#" className="flex items-center gap-3 text-white transition px-3 py-2 rounded-md bg-gray-900">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="font-semibold">Search</span>
        </a>
        {/* <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition px-3 py-2 rounded-md hover:bg-gray-900">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span className="font-semibold">Your Library</span>
        </a> */}
      </nav>

      {/* <div className="mt-8 pt-8 border-t border-gray-800">
        <div className="text-gray-400 text-sm mb-4">PLAYLISTS</div>
        <div className="space-y-3 text-sm">
          <div className="text-gray-400 hover:text-white cursor-pointer transition">Recently Played</div>
          <div className="text-gray-400 hover:text-white cursor-pointer transition">Liked Songs</div>
          <div className="text-gray-400 hover:text-white cursor-pointer transition">Your Episodes</div>
        </div>
      </div> */}
    </div>
  );
}

export default Sidebar;