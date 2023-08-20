import Wordz from "../components/Wordz";

function Landing() {
    return (
        <div className="w-full">
            <div className="h-[90vh] relative bg-[url(https://www.emit.mg/uploads/3d_print_school_2f8151be7b.jpg)] bg-no-repeat bg-cover">
                <div className="absolute w-full h-full bg-gray-500 top-0 left-0 opacity-50"></div>
                <Wordz />
                <div className="absolute bottom-0 w-full flex justify-center h-[25%]">
                    <div className="w-1/2 text-center">
                        <h1 className="mb-4 text-xl font-extrabold leading-none tracking-tight md:text-3xl lg:text-4xl text-white"><small className="font-semibold">La plateforme qui regroupe les élites <mark className="px-2 text-white bg-blue-400 rounded">#1</mark> au sein de l' <span className="text-blue-400">É</span>cole de <span className="text-blue-400">M</span>anagement et d'<span className="text-blue-400">I</span>nnovation <span className="text-blue-400">T</span>echnologique de l'Université de Fianarantsoa</small></h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Landing;