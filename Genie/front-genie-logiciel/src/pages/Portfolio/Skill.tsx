function Skill() {
    return (
        <div>
            <div className="flex justify-center ">

                <div className="flex flex-col justify-center  my-10 w-[90%]  max-w-7xl  ">
                    <div className="flex flex-col justify-center items-center my-6">

                        <div className="text-3xl font-extrabold">Compétences</div>

                    </div>
                    <div className="flex gap-5">
                        <div className="bg-base-100 shadow-lg flex flex-col justify-center items-center p-4 w-1/4 rounded-lg group">
                            <div className="group-hover:text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 group-hover:text-blue-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                                </svg>
                            </div>
                            <div className="text-center text-sm py-5 px-2 truncate">
                                Experte en communicxation.
                            </div>
                        </div>
                        <div className="bg-base-100 hover:bg-blue-200 shadow-lg flex flex-col justify-center items-center p-4 w-1/4 rounded-lg">
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 hover:text-blue-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                </svg>
                            </div>
                            <div className="w-full sm:text-center text-start text-sm py-5 truncate">
                                Experte en communicxation.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skill;