import { Link } from 'react-router-dom'
import { SquarePlay } from 'lucide-react'

const Footer = () => {
    return (
        <footer className='bg-black text-white px-6 py-8 md:px-12'>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                
                <div className="flex flex-col gap-2">
                    <div className='flex items-center gap-2'>
                        <SquarePlay className="text-red-500 w-6 h-6" />
                        <h1 className="text-xl font-bold">Tubely</h1>
                    </div>
                    <p className='text-sm text-gray-400'>
                        Your ultimate destination for curated video content.
                    </p>
                    <p className='text-sm text-gray-400'>
                        Watch, learn, and be inspired.
                    </p>
                </div>

                <div className='flex flex-col gap-3'>
                    <h1 className='text-lg text-amber-100'>Quick Links</h1>
                    <nav className='flex flex-col gap-2 text-gray-400'>
                        <Link to='/' className="hover:text-white transition">Home</Link>
                        <Link to='/all-videos' className="hover:text-white transition">All Videos</Link>
                        <Link to='/exam-solutions' className="hover:text-white transition">Exam Solutions</Link>
                        <Link to='/latest-uploads' className="hover:text-white transition">Latest Uploads</Link>
                        <Link to='/about' className="hover:text-white transition">About Us</Link>
                    </nav>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-lg text-amber-100'>Categories</h1>
                    <nav className='flex flex-col gap-2 text-gray-400'>
                        <Link to='/category/math' className="hover:text-white transition">Mathematics</Link>
                        <Link to='/category/tricks' className="hover:text-white transition">Tricks</Link>
                        <Link to='/category/trending' className="hover:text-white transition">Trending</Link>
                        <Link to='/category/guess' className="hover:text-white transition">Guess Papers</Link>
                    </nav>
                </div>

            </div>
            <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
                <p>© 2026 Tubely. All rights reserved.</p>
            </div>

        </footer>
    )
}

export default Footer