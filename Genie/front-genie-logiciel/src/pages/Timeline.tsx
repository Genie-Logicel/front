import Hiadina from '../assets/hiadina.png'
import WebMapping from '../assets/webmapp.png'
import RH from '../assets/RH-Log.png'
import AirPay from '../assets/7.png'

function Timeline() {
    return (
        <div>
            <div className="container mx-auto space-y-10">
                <div className="text-5xl first-letter:text-7xl font-bold text-center pb-5">
                    Les projets réalisés
                </div>
                <div className="flex justify-center flex-wrap gap-4">
                    <a href="#" className="w-1/3 sm:col-span-2 md:col-span-1 block group relative transition ease-out active:opacity-75 overflow-hidden">
                        <img src={Hiadina} alt="Product Image" className="transform transition ease-out group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
                        <div className="p-4 flex items-center justify-center absolute inset-0">
                            <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-400/90">
                                Plateforme examen
                            </div>
                        </div>
                    </a>
                    <a href="#" className="w-1/3 block group relative transition ease-out active:opacity-75 overflow-hidden">
                        <img src={WebMapping} alt="Product Image" className="transform transition ease-out group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
                        <div className="p-4 flex items-center justify-center absolute inset-0">
                            <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-400/90">
                                WebMapping
                            </div>
                        </div>
                    </a>
                    <a href="#" className="w-1/3 block group relative transition ease-out active:opacity-75 overflow-hidden">
                        <img src={AirPay} alt="Product Image" className="transform transition ease-out group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
                        <div className="p-4 flex items-center justify-center absolute inset-0">
                            <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-400/90">
                                Hackathon
                            </div>
                        </div>
                    </a>
                    <a href="#" className="w-1/3 block group relative transition ease-out active:opacity-75 overflow-hidden">
                        <img src={RH} alt="Product Image" className="transform transition ease-out group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
                        <div className="p-4 flex items-center justify-center absolute inset-0">
                            <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-400/90">
                                Hotel
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Timeline;