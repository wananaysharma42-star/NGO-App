import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#F1EDE3] border-b border-[#2D5A27]/20">
        <div className="text-2xl font-bold text-[#2D5A27] tracking-tight">NGO Explorer</div>
        <div className="flex gap-8 items-center font-medium text-[#2D5A27]/80">
            <Link to="/" className="hover:text-[#2D5A27] cursor-pointer transition-colors">Home</Link>
            <Link to="/Registered" className="hover:text-[#2D5A27] cursor-pointer transition-colors">Registered</Link>
            <Link to="/Search" className="bg-[#E67E22] text-white px-5 py-2 rounded-full hover:bg-[#d35400] transition-all shadow-sm">
                Search
            </Link>
        </div>
    </nav>
  )
}

export default Nav