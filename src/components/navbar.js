import { Search, Menu, Video, Bell, User, Mic } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-black text-white sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-zinc-800 rounded-full cursor-pointer">
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="bg-red-600 px-2 py-1 rounded-lg text-xs font-bold tracking-wider">
            YT
          </div>
          <span className="text-xl font-bold tracking-tighter">YouTube</span>
        </div>
      </div>

      <div className="flex items-center gap-3 flex-1 max-w-2xl mx-4 justify-center">
        <div className="flex items-center w-full max-w-xl">
          <div className="flex flex-1 items-center bg-zinc-900 border border-zinc-700 rounded-l-full px-4 py-2 focus-within:border-blue-500">
            <input
              type="text"
              placeholder="Qidiruv"
              className="w-full bg-transparent outline-none text-sm placeholder-zinc-400"
            />
          </div>
          <button className="bg-zinc-800 border border-l-0 border-zinc-700 px-6 py-2.5 rounded-r-full hover:bg-zinc-700 cursor-pointer">
            <Search className="w-5 h-5 text-zinc-300" />
          </button>
        </div>
        <button className="p-2.5 bg-zinc-800 hover:bg-zinc-700 rounded-full cursor-pointer hidden sm:flex">
          <Mic className="w-5 h-5" />
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button className="p-2 hover:bg-zinc-800 rounded-full cursor-pointer hidden sm:flex">
          <Video className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-zinc-800 rounded-full cursor-pointer hidden sm:flex">
          <Bell className="w-6 h-6" />
        </button>
        <button className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-full cursor-pointer">
          <User className="w-6 h-6" />
        </button>
      </div>
    </nav>
  )
}