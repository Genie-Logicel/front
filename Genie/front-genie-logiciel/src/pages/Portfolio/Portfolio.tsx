import Skill from "./Skill";
import Experience from "./Experience";
import Project from "./Project";
import Contact from "./Contact";
import Descri from "./Descri";
function Portfolio() {
    return (
        <div className='w-full py-10 px-5 space-y-5'>
            <div className='grid grid-cols-1 md:grid-cols-8 sm:space-y-1 space-y-5'>
                <div className="col-span-2">
                    <div className="card bg-base-100 shadow-xl !sticky !top-[20%]">
                        <figure><img src="https://source.unsplash.com/300x300/?man,businessman" className="rounded-xl w-4/5" alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <h2 className="card-title font-extrabold flex justify-center">Name</h2>
                            <p>Mail</p>
                            <div className="card-actions justify-center">
                            <div className="flex my-2"> 
                                <a href="#" className="w-12 h-12 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block" ><i className="fa fa-twitter"></i ></a> 
                                <a href="#" className="w-12 h-12 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block" ><i className="fa fa-instagram"></i ></a> 
                                <a href="#" className="w-12 h-12 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block" ><i className="fa fa-facebook"></i ></a> 
                                <a href="#" className="w-12 h-12 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block" ><i className="fa fa-linkedin"></i ></a> </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-6">
                    <div className="pl-5">
                        <Descri />
                    </div>
                    <div className="pl-5">
                        <Skill />
                    </div>
                    <div className="pl-5">
                        <Experience />
                    </div>
                    <div className="pl-5">
                        <Project />
                    </div>
                    <div className="pl-5">
                        <Contact />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;