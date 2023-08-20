function Count() {
    return (
        <div className="">
            {/* <div className="flex items-center justify-center bg-gradient-to-r from-blue-300 via-sky-500 to-teal-100 "> */}
            <div className="flex items-center justify-center ">
                <div className="flex flex-col sm:flex-row p-4 space-x-4 max-w-7xl justify-around w-full lg:h-60 items-center ">
                    <div className="h-40 w-[70%] md:w-1/4 flex items-center justify-center  text-3xl font-bold">La communauté compte aujourd'hui</div>
                    <div className="h-40 w-[70%] md:w-1/4 flex items-center justify-center">
                        <div className="flex-col space-y-2 shadow border rounded-xl p-5 hover:scale-105 duration-150 hover:shadow-xl">
                            <div className="text-5xl font-bold">15</div>
                            <div className="text-sm font-medium text-gray-600">membres avec différents parcours au sein de l'ÉMIT.</div>
                        </div>
                    </div>
                    <div className="h-40 w-[70%] md:w-1/4 flex items-center justify-center">
                        <div className="flex-col space-y-2 shadow border rounded-xl p-5 hover:scale-105 duration-150 hover:shadow-xl">
                            <div className="text-5xl font-bold">1.2M+</div>
                            <div className="text-sm font-medium text-gray-600">Tailblocks has more than 1.2M+ total users.</div>
                        </div>
                    </div>
                    <div className="h-40 w-[70%] md:w-1/4 flex items-center justify-center">
                        <div className="flex-col space-y-2 shadow border rounded-xl p-5 hover:scale-105 duration-150 hover:shadow-xl">
                            <div className="text-5xl font-bold">69k</div>
                            <div className="text-sm font-medium text-gray-600">Tailblocks has gained 69k+ users last month.</div>
                        </div>
                    </div>

                </div>

            </div>
            <script src="https://cdn.tailwindcss.com"></script>

        </div>
    );
}
export default Count;