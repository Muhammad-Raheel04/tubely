import { Menu, Search, SquarePlay, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <div className="hidden md:flex md:flex-row md:justify-between items-center py-3 px-4 bg-black gap-3 md:gap-0">
                <div className="flex items-center gap-2">
                    <SquarePlay className="text-red-500 w-6 h-6" />
                    <h1 className="text-white text-xl font-bold">Tubely</h1>
                </div>
                <div className="flex items-center gap-2 bg-[#f4e9da] rounded-md px-3 py-1 sm:w-[280px]">

                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent outline-none text-sm text-gray-700 w-full"
                    />
                    <Search className="text-gray-700 w-4 h-4" />
                </div>
                <nav className="hidden md:flex items-center gap-6">
                    <Link to='/' className="text-white hover:text-red-500 cursor-pointer">Home</Link>
                    <Link to='/all-videos' className="text-white hover:text-red-500 cursor-pointer">All Videos</Link>
                    <Link to='/exam-solutions' className="text-white hover:text-red-500 cursor-pointer">Exam Solutions</Link>
                    <Link to='/latest-uploads' className="text-white hover:text-red-500 cursor-pointer">Latest Uploads</Link>
                </nav>
                <div>
                    <Link to='/subcribe'>
                        <button className="bg-red-500 text-white p-1 rounded-md hover:bg-red-600 transition">
                            Subscribe
                        </button>
                    </Link>
                </div>
            </div>
            <div className="md:hidden flex flex-col py-3 px-4 bg-black gap-3 md:gap-0">
                <div className='flex flex-row justify-between '>
                    <div className="flex items-center gap-2">
                        <SquarePlay className="text-red-500 w-6 h-6" />
                        <h1 className="text-white text-xl font-bold">Tubely</h1>
                    </div>
                    <div className='flex text-white'>
                        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
                <div className='flex flex-row justify-between gap-2'>
                    <div className="flex items-center gap-2 bg-[#f4e9da] rounded-md px-3 py-1 w-[280px]">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent outline-none text-sm text-gray-700 w-full"
                        />
                        <Search className="text-gray-700 w-4 h-4" />
                    </div>
                    <div>
                        <Link to='/subscribe'>
                            <button className="bg-red-500 text-white p-1 rounded-md hover:bg-red-600 transition">
                                Subscribe
                            </button>
                        </Link>
                    </div>
                    {
                        isMenuOpen ?
                            <div className='fixed right-0 top-0 z-50 flex flex-col  bg-black gap-4 h-auto w-[220px]'>

                                <div className="flex justify-between items-center  border-amber-100 p-4 border-b">
                                    <h2 className="text-lg  text-white">Menu</h2>
                                    <button onClick={() => setIsMenuOpen(false)}>
                                        <X className="w-6 h-6 text-white" />
                                    </button>
                                </div>
                                <nav className="flex flex-col items-center gap-6 p-4">
                                    <Link to='/' className="text-white hover:text-red-500 cursor-pointer">Home</Link>
                                    <Link to='/all-videos' className="text-white hover:text-red-500 cursor-pointer">All Videos</Link>
                                    <Link to='/exam-solutions' className="text-white hover:text-red-500 cursor-pointer">Exam Solutions</Link>
                                    <Link to='/latest-uploads' className="text-white hover:text-red-500 cursor-pointer">Latest Uploads</Link>
                                    <Link to='/about' className="text-white hover:text-red-500 cursor-pointer">About Us</Link>
                                    <Link to='/subscribe' className='w-full'>
                                        <button className="w-full bg-red-500 text-white p-1 rounded-md hover:bg-red-600 transition">
                                            Subscribe
                                        </button>
                                    </Link>
                                </nav>
                            </div>
                            :
                            <div className='hidden'></div>
                    }
                    {
                        isMenuOpen && (
                            <div
                            className='fixed inset-0 bg-black/40 backdrop-blur-sm z-40'
                            onClick={()=>setIsMenuOpen(false)}
                            >
                            </div>
                        )
                    }
                </div>
            </div>
        </>

    )
}

export default Header
