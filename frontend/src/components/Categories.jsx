import { Calculator, Brain, Lightbulb, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const categories = [
    {
        title: "Mathematics",
        icon: Calculator,
        path: "/category/math"
    },
    {
        title: "Tricks",
        icon: Lightbulb,
        path: "/category/tricks"
    },
    {
        title: "Trending",
        icon: TrendingUp,
        path: "/category/trending"
    },
    {
        title: "Guess Papers",
        icon: Brain,
        path: "/category/guess"
    }
]

const Categories = () => {
   
    return (
        <div className='flex flex-col mt-8'>

            <div className='flex flex-col justify-center items-center gap-3 text-black px-6'>
                <h1 className='font-bold text-3xl'>Explore by Category</h1>
                <p className='text-center text-gray-600 max-w-xl'>
                    Dive into our curated content categories and discover videos tailored to your interests
                </p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 mt-6'>
                {categories.map((cat, index) => {
                    const Icon = cat.icon;

                    return (
                        <Link to={cat.path} key={index}>
                            <div className='flex flex-col items-center gap-2 rounded-sm shadow-sm px-6 py-8  hover:shadow-lg transition cursor-pointer group'>

                                <div className='bg-amber-100 h-14 w-14 rounded-full flex justify-center items-center group-hover:scale-110 transition'>
                                    <Icon />
                                </div>

                                <h1 className='font-semibold'>{cat.title}</h1>

                                <p className='text-sm text-gray-500 group-hover:text-red-500'>
                                    Explore →
                                </p>
                            </div>
                        </Link>
                    )
                })}
            </div>

        </div>
    )
}

export default Categories