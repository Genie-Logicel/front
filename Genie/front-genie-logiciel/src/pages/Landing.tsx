function Landing() {
    return (
        <div className="w-full">
            <div className="hero h-[75vh]" style={{ backgroundImage: 'url(https://www.emit.mg/uploads/3d_print_school_2f8151be7b.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">Bienvenue sur  <span className="text-blue-400"><mark className="px-2 text-white bg-blue-400 rounded-lg">Elite-MIT</mark></span></h1>
                        <h1 className="mb-4 text-xl font-extrabold leading-none tracking-tight md:text-3xl lg:text-4xl text-white"><small className="font-semibold">La plateforme qui regroupe les élites <mark className="px-2 text-white bg-blue-400 rounded">#1</mark> au sein de l' <span className="text-blue-400">É</span>cole de <span className="text-blue-400">M</span>anagement et d'<span className="text-blue-400">I</span>nnovation <span className="text-blue-400">T</span>echnologique de l'Université de Fianarantsoa</small></h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Landing;