import Skill from "./Skill";
import Experience from "./Experience";
import Project from "./Project";
import Contact from "./Contact";
function Portfolio() {
    return (
        <div className='w-full py-10 px-5 space-y-5'>
            <div className='grid sm:grid-cols-5 grid-cols-1 sm:grayscale sm:hover:grayscale-0 sm:space-y-1 space-y-5'>
                <div className='sm:col-span-3 col-span-1 flex justify-center items-center'>
                    <div className='flex flex-col justify-center'>

                        <div>
                            <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center">Portfolio</h1>
                        </div>
                        <div>
                            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                        </div>
                    </div>

                </div>
                <div className='sm:col-span-2 col-span-1 p-5'>
                    <img className="h-auto transition-all duration-300 rounded-lg cursor-pointer filter" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
                </div>
            </div>
            <div className="px-5">
                <Skill />
            </div>
            <div className="px-5">
                <Experience />
            </div>
            <div className="px-5">
                <Project />
            </div>
            <div className="px-5">
                <Contact />
            </div>
        </div>
    );
}

export default Portfolio;