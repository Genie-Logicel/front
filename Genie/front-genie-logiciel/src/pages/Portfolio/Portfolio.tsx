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
    const [skills, setSkills] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [studies, setStudies] = useState([]);
    const [formations, setFormations] = useState([]);
    const [others, setOthers] = useState([]);
    const [randomText, setRandomText] = useState('');

    useEffect(() => {
        fetchData();
        rand()
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://192.168.88.29:8000/api/members/' + id);
            setInfo(response.data.data.member);
            setLinks(response.data.data.links);
            setSkills(response.data.data.skills);
            setExperiences(response.data.data.experience);
            setStudies(response.data.data.study);
            setFormations(response.data.data.formation);
            setOthers(response.data.data.others);
            // console.log(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // * rand
    const rand = async () => {
        try {
            const response = await axios.get('/who.json');
            const data = response.data;
            const rand = Math.floor(Math.random() * data.length);
            setRandomText(data[rand]);
        } catch (error) {
            console.log("error", error);
        }
    }



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

                    {/* About me */}
                    <div className="pl-5">
                        <div className="flex flex-col justify-center items-center space-y-4">
                            <h1 className="text-3xl font-extrabold">Qui suis-je?</h1>

                            <div className="w-1/2">
                                <blockquote className="text-xl italic text-gray-500 text-center">
                                    <p>" {randomText} "</p>
                                </blockquote>
                            </div>

                        </div>
                    </div>

                    {/* Skills */}
                    <div className="grid grid-cols-2 gap-5">
                        <div className="pl-5">
                            <div className="flex justify-center ">

                                <div className="flex flex-col justify-center  my-10 w-[90%]  max-w-7xl  ">
                                    <div className="flex flex-col justify-center items-center my-6">
                                        <div className="text-3xl font-extrabold">Compétences</div>
                                    </div>
                                    <div className="flex flex-wrap justify-center gap-5">
                                        {skills.map((skill) => (
                                            <div className="flex flex-col card border-2 border-primary hover:shadow-xl cursor-pointer rounded-full w-32 h-32 duration-100 p-4 justify-center items-center my-6 gap-2" key={skill.id}>
                                                <div className="text-2xl font-extrabold text-primary">{skill.nom}</div>
                                                <div className="text-sm">{skill.description}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pl-5">
                            <div className="flex justify-center ">

                                <div className="flex flex-col justify-center  my-10 w-[90%]  max-w-7xl  ">
                                    <div className="flex flex-col justify-center items-center my-6">
                                        <div className="text-3xl font-extrabold">Autres compétences</div>
                                    </div>
                                    <div className="flex flex-wrap justify-center gap-5">
                                        {others.map((other) => (
                                            <div className="flex flex-col card border-2 border-secondary hover:shadow-xl cursor-pointer rounded-full w-32 h-32 duration-100 p-4 justify-center items-center my-6 gap-2" key={other.id}>
                                                <div className="text-2xl font-extrabold text-secondary">{other.nom}</div>
                                                <div className="text-sm">{other.description}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Experiences */}
                    <div className="pl-5">
                        <div className="flex flex-col justify-center items-center my-6">
                            <div className="text-3xl  font-extrabold">Expériences</div>
                        </div>
                        <div className="flex justify-center">
                            <ol className="relative border-l border-gray-200">
                                {experiences.map((experience) => (
                                    <li className="mb-10 ml-6">
                                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                                            <svg className="w-2.5 h-2.5 text-blue-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                            </svg>
                                        </span>
                                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">{experience.poste} , {experience.société}</h3>
                                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{experience.annee}</time>
                                        <p className="mb-4 text-base font-normal text-gray-500">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere aperiam repellendus placeat aliquid eaque totam, quia vel culpa omnis ad exercitationem magni neque dicta, ipsam deleniti aliquam animi possimus. Excepturi.
                                        </p>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    {/* Studies and formations */}
                    <div className="grid grid-cols-2 gap-5">
                        <div className="pl-5">
                            <div className="flex justify-center flex-col px-10">
                                <div className="flex flex-col justify-center items-center my-6">
                                    <div className="text-3xl  font-extrabold">Etudes</div>
                                </div>
                                <div className="flex flex-col justify-center">
                                    {studies.map((study) => (
                                        <div className="p-5 mb-4 border border-gray-100 rounded-lg">
                                            <time className="text-lg font-semibold text-gray-900">{study.niveau}</time>
                                            <ol className="mt-3 divide-y divider-gray-200">
                                                <li>
                                                    <a href="#" className="items-center block p-3 sm:flex hover:bg-gray-100">
                                                        <div className="text-gray-600">
                                                            <div className="text-base font-normal">{study.institution}</div>
                                                            <div className="text-sm font-normal">{study.domaine}</div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ol>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                        <div className="pl-5">
                            <div className="flex justify-center flex-col px-10">
                                <div className="flex flex-col justify-center items-center my-6">
                                    <div className="text-3xl  font-extrabold">Formations</div>
                                </div>
                                <div className="flex flex-col justify-center">
                                    {formations.map((formation) => (
                                        <div className="p-5 mb-4 border border-gray-100 rounded-lg">
                                            <time className="text-lg font-semibold text-gray-900">{formation.titre}</time>
                                            <ol className="mt-3 divide-y divider-gray-200">
                                                <li>
                                                    <a href="#" className="items-center block p-3 sm:flex hover:bg-gray-100">
                                                        <div className="text-gray-600">
                                                            <div className="text-base font-normal">{formation.institution}</div>
                                                            <div className="text-sm font-normal">{formation.annee}</div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ol>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Projects */}
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