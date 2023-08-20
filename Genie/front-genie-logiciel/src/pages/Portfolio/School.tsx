function School() {
    return (
        <div className="flex justify-center flex-col px-10">
            <div className="flex flex-col justify-center items-center my-6">
                <div className="text-3xl  font-extrabold">Etudes</div>
            </div>
            <div className="flex flex-col justify-center">
                <div className="p-5 mb-4 border border-gray-100 rounded-lg">
                    <time className="text-lg font-semibold text-gray-900">September 13th, 2022</time>
                    <ol className="mt-3 divide-y divider-gray-200">
                        <li>
                            <a href="#" className="items-center block p-3 sm:flex hover:bg-gray-100">
                                <img className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="https://www.emit.mg/uploads/logo_7e9a47c268.png" alt="Jese Leos image" />
                                <div className="text-gray-600">
                                    <div className="text-base font-normal"><span className="font-medium text-gray-900">Ecole de management et d'Innovation Technologique</span> à <span className="font-medium text-gray-900">Université de Fianarantsoa</span>, <span className="font-medium text-gray-900"> Andrainjato</span></div>
                                    <div className="text-sm font-normal">Master 2 : Modelisation et Ingénierie Informatique</div>
                                </div>
                            </a>
                        </li>
                    </ol>
                </div>
                <div className="p-5 mb-4 border border-gray-100 rounded-lg">
                    <time className="text-lg font-semibold text-gray-900">June 12th, 2021 - July 15th, 2022</time>
                    <ol className="mt-3 divide-y divider-gray-200">
                        <li>
                            <a href="#" className="items-center block p-3 sm:flex hover:bg-gray-100">
                                <img className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="https://source.unsplash.com/300x300/?man,businessman" alt="Laura Romeros image" />
                                <div className="text-gray-600">
                                <div className="text-base font-normal"><span className="font-medium text-gray-900">Ecole de management et d'Innovation Technologique</span> à <span className="font-medium text-gray-900">Université de Fianarantsoa</span>, <span className="font-medium text-gray-900"> Andrainjato</span></div>
                                    <div className="text-sm font-normal">Master 1 : Modelisation et Ingénierie Informatique</div>
                                </div>
                            </a>
                        </li>
                    </ol>
                </div>
                <div className="p-5 mb-4 border border-gray-100 rounded-lg">
                    <time className="text-lg font-semibold text-gray-900">April 04th, 2018  - April, 2021</time>
                    <ol className="mt-3 divide-y divider-gray-200">
                        <li>
                            <a href="#" className="items-center block p-3 sm:flex hover:bg-gray-100">
                                <img className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="https://source.unsplash.com/300x300/?man,businessman" alt="Laura Romeros image" />
                                <div className="text-gray-600">
                                <div className="text-base font-normal"><span className="font-medium text-gray-900">Ecole de management et d'Innovation Technologique</span> à <span className="font-medium text-gray-900">Université de Fianarantsoa</span>, <span className="font-medium text-gray-900"> Andrainjato</span></div>
                                    <div className="text-sm font-normal">Licence : Développement d'Application et Système d'Information</div>
                                </div>
                            </a>
                        </li>
                    </ol>
                </div>
            </div>

        </div>
    );
}

export default School;