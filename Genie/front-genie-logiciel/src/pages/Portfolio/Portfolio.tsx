import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Hiadina from '../../assets/hiadina.png'
import Huit from '../../assets/8.png'
import WebMapping from '../../assets/webmapp.png'
import Schl from '../../assets/School.png'
import RH from '../../assets/RH-Log.png'
import AirPay from '../../assets/7.png'

function Portfolio() {
    const { id } = useParams();

    const [info, setInfo] = useState([]);
    const [links, setLinks] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://192.168.88.29:8000/api/members/' + id);
            setInfo(response.data.data.member);
            setLinks(response.data.data.links);
            console.log(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <div className='py-10 px-5 space-y-5'>
            <div className='grid grid-cols-1 md:grid-cols-8 sm:space-y-1 space-y-5'>
                <div className="col-span-2">
                    <div className="card bg-base-100 sticky top-[20%]">
                        <figure><img src="https://source.unsplash.com/300x300/?man,businessman" className="rounded-full w-9/12" alt="Photo" /></figure>
                        <div className="card-body text-center">
                            <h2 className="card-title font-extrabold flex justify-center capitalize">{info.nom}</h2>
                            <p>{info.email}</p>
                            <p>{info.adresse}</p>
                            <div className="card-actions justify-center">
                                <div className="flex gap-3 my-2">
                                    {links.map((link) => (
                                        <a className="badge badge-info py-2" key={link.id} target="_blank" href={link.relation}>
                                            {link.nom}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-6 space-y-5">
                    <div className="pl-5">
                        <div className="flex flex-col justify-center items-center space-y-4">
                            <h1 className="text-3xl font-extrabold">Qui suis-je?</h1>

                            <div className="w-1/2">
                                <blockquote className="text-xl italic text-gray-500">
                                    <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                                </blockquote>
                            </div>

                        </div>
                    </div>
                    <div className="pl-5">
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
                    <div className="pl-5">
                        <div className="flex flex-col justify-center items-center my-6">

                            <div className="text-3xl  font-extrabold">Expériences</div>

                        </div>
                        <div className="flex justify-center">
                            <ol className="relative border-l border-gray-200">
                                <li className="mb-10 ml-6">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                                        <svg className="w-2.5 h-2.5 text-blue-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </span>
                                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Flowbite Application UI v2.0.0 <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">Latest</span></h3>
                                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400">Released on January 13th, 2022</time>
                                    <p className="mb-4 text-base font-normal text-gray-500">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                                </li>
                                <li className="mb-10 ml-6">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                                        <svg className="w-2.5 h-2.5 text-blue-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </span>
                                    <h3 className="mb-1 text-lg font-semibold text-gray-900">Flowbite Figma v1.3.0</h3>
                                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400">Released on December 7th, 2021</time>
                                    <p className="text-base font-normal text-gray-500">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                                </li>
                                <li className="ml-6">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                                        <svg className="w-2.5 h-2.5 text-blue-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </span>
                                    <h3 className="mb-1 text-lg font-semibold text-gray-900">Flowbite Library v1.2.2</h3>
                                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400">Released on December 2nd, 2021</time>
                                    <p className="text-base font-normal text-gray-500">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                                </li>
                            </ol>

                        </div>
                    </div>
                    <div className="pl-5">
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
                    </div>
                    <div className="pl-5">
                        <div className="flex flex-col justify-center items-center my-6">
                            <div className="text-3xl  font-extrabold">Projets</div>
                        </div>
                        <div className="mockup-window border">
                            <div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-5">
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg" src={Hiadina} alt="" />
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg" src={Huit} alt="" />
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg" src={WebMapping} alt="" />
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg" src={Schl} alt="" />
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg" src={RH} alt="" />
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg" src={AirPay} alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;