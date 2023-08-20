import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Hiadina from '../../assets/hiadina.png'
import Huit from '../../assets/8.png'
import WebMapping from '../../assets/webmapp.png'
import Schl from '../../assets/School.png'
import RH from '../../assets/RH-Log.png'
import AirPay from '../../assets/7.png'
import Footer from "../Footer";

interface Info {
    nom: string,
    email: string,
    adresse: string
}

interface Link {
    id: number,
    relation: string,
    nom: string
}

interface Basic {
    id: number,
    description: string,
    nom: string
}

interface Experience {
    id: number,
    poste: string,
    annee: string,
    société: string
}

interface Study {
    id: number,
    domaine: string,
    niveau: string,
    institution: string

}

interface Formation {
    id: number,
    institution: string,
    annee: string,
    titre: string
}

function Portfolio() {
    const { id } = useParams();

    const [info, setInfo] = useState<Info>([]);
    const [links, setLinks] = useState<Link[]>([]);
    const [skills, setSkills] = useState<Basic[]>([]);
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [studies, setStudies] = useState<Study[]>([]);
    const [formations, setFormations] = useState<Formation[]>([]);
    const [others, setOthers] = useState<Basic[]>([]);
    const [randomText, setRandomText] = useState('');

    useEffect(() => {
        fetchData();
        rand()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function fetchData(): Promise<void> {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/members/' + id);
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
    }

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
        <div>
            <div className='py-10 px-5 space-y-5'>
                <div className='grid grid-cols-1 md:grid-cols-8 sm:space-y-1 space-y-5'>
                    <div className="col-span-2">
                        <div className="card bg-base-100 sticky top-[20%]">
                            <div className="avatar flex justify-center">
                                <div className="w-[50%] rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                                    <img src="https://source.unsplash.com/300x300/?man,businessman" />
                                </div>
                            </div>
                            <div className="card-body text-center">
                                <h2 className="card-title font-extrabold text-5xl text-gray-700 flex justify-center capitalize">{info.nom}</h2>
                                <p>{info.email}</p>
                                <p>{info.adresse}</p>
                                <div className="card-actions justify-center">
                                    <div className="flex gap-3 my-2">
                                        {links.map((link) => (
                                            <a className="badge badge-accent badge-lg py-2" key={link.id} target="_blank" href={link.relation}>
                                                {link.nom}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 space-y-[8%]">
                        {/* About me */}
                        <div className="">
                            <div className="flex flex-col justify-center items-center space-y-8">
                                <div className="text-6xl first-letter:text-7xl font-extrabold">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-info">
                                        Qui suis-je?
                                    </span>
                                </div>
                                <div className="w-1/2">
                                    <blockquote className="text-xl italic text-gray-500 text-center">
                                        <p>" {randomText} "</p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="grid grid-cols-2 gap-5">
                            <div className="space-y-10">
                                <div className="flex flex-col justify-center items-center my-6">
                                    <div className="text-6xl first-letter:text-7xl font-extrabold">
                                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-info">
                                            Compétences
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-wrap justify-center gap-5">
                                    {skills.map((skill) => (
                                        <div className="card hover:shadow-xl shadow-lg cursor-pointer duration-100 p-4" key={skill.id}>
                                            <div className="flex items-center gap-5">
                                                <div className="text-2xl font-extrabold text-primary">{skill.nom}</div>
                                                <div className="text-xl font-bold flex justify-center items-center text-base-100 bg-primary rounded-full w-14 h-14">{skill.description}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-10">
                                <div className="flex flex-col justify-center items-center my-6">
                                    <div className="text-6xl first-letter:text-7xl font-extrabold">
                                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-info to-primary">
                                            Autres compétences
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-wrap justify-center gap-5">
                                    {others.map((other) => (
                                        <div className="card hover:shadow-xl shadow-lg cursor-pointer duration-100 p-4" key={other.id}>
                                            <div className="flex items-center gap-5">
                                                <div className="text-2xl font-extrabold text-secondary">{other.nom}</div>
                                                <div className="text-xl font-bold flex justify-center items-center text-base-100 bg-secondary rounded-full w-14 h-14">{other.description}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Experiences */}
                        <div className="space-y-12">
                            <div className="flex flex-col justify-center items-center my-6">
                                <div className="text-6xl first-letter:text-7xl font-extrabold">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-info to-primary">
                                        Expériences
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-center px-[25%]">
                                <ol className="relative border-l border-gray-200">
                                    {experiences.map((experience) => (
                                        <li key={experience.id} className="mb-10 ml-12">
                                            <span className="absolute flex items-center justify-center w-10 h-10 bg-primary/30 rounded-full -left-5">
                                                <svg className="w-4 h-4 text-blue-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                                </svg>
                                            </span>
                                            <h3 className="flex items-center mb-1 text-2xl font-semibold text-gray-900">{experience.poste} , {experience.société}</h3>
                                            <time className="block mb-2 text-lg font-normal leading-none text-gray-400">{experience.annee}</time>
                                            <p className="mb-4 text-base font-normal text-justify text-current">
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
                                        <div className="text-6xl first-letter:text-7xl font-extrabold">
                                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-info to-primary">
                                                Etudes
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        {studies.map((study) => (
                                            <div className="py-8 px-4">
                                                <div className="h-full flex items-start">
                                                    <div className="flex-shrink-0 flex flex-col text-center leading-none pt-1.5">
                                                        <span className="font-bold text-xl text-current title-font leading-none">{study.niveau}</span>
                                                    </div>
                                                    <div className="flex-grow pl-10">
                                                        <h2 className="tracking-widest text-xl title-font font-bold text-secondary">{study.domaine}</h2>
                                                        <h1 className="title-font text-xl font-medium text-gray-900 mb-3">{study.institution}</h1>
                                                        <p className="leading-relaxed mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto error earum est cumque nobis officia quo rerum, iure amet voluptatibus.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                            <div className="pl-5">
                                <div className="flex justify-center flex-col px-10">
                                    <div className="flex flex-col justify-center items-center my-6">
                                        <div className="text-6xl first-letter:text-7xl font-extrabold">
                                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-info">
                                                Formations
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        {formations.map((formation) => (
                                            <div className="py-8 px-4">
                                                <div className="h-full flex items-start">
                                                    <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none pt-1.5">
                                                        <span className="font-bold text-xl text-current title-font leading-none">{formation.annee}</span>
                                                    </div>
                                                    <div className="flex-grow pl-6">
                                                        <h2 className="tracking-widest text-xl title-font font-bold text-secondary">{formation.titre}</h2>
                                                        <h1 className="title-font text-xl font-medium text-gray-900 mb-3">{formation.institution}</h1>
                                                        <p className="leading-relaxed mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto error earum est cumque nobis officia quo rerum, iure amet voluptatibus.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Projects */}
                        <div className="pl-5">
                            <div className="flex flex-col justify-center items-center my-6">
                                <div className="text-6xl first-letter:text-7xl font-extrabold">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-info">
                                        Projets
                                    </span>
                                </div>
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
                <div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Portfolio;