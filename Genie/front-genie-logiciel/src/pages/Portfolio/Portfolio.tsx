import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Hiadina from '../../assets/hiadina.png'
import Huit from '../../assets/8.png'
import WebMapping from '../../assets/webmapp.png'
import Schl from '../../assets/School.png'
import RH from '../../assets/RH-Log.png'
import AirPay from '../../assets/7.png'
import Footer from "../Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Info {
    nom: string,
    email: string,
    adresse: string,
    sex: string
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
        AOS.init();
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
                <svg className="fixed top-0 left-0 -z-50 opacity-10" viewBox='0 0 2000 1500'>
                    <defs>
                        <linearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'>
                            <stop offset='0' stop-color='#7dd3fc' />
                            <stop offset='1' stop-color='#3b82f6' />
                        </linearGradient>
                        <path id='s' fill='url(#b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z' /><g id='g'><use href='#s' transform='scale(0.12) rotate(60)' /><use href='#s' transform='scale(0.2) rotate(10)' /><use href='#s' transform='scale(0.25) rotate(40)' /><use href='#s' transform='scale(0.3) rotate(-20)' /><use href='#s' transform='scale(0.4) rotate(-30)' /><use href='#s' transform='scale(0.5) rotate(20)' /><use href='#s' transform='scale(0.6) rotate(60)' /><use href='#s' transform='scale(0.7) rotate(10)' /><use href='#s' transform='scale(0.835) rotate(-40)' /><use href='#s' transform='scale(0.9) rotate(40)' /><use href='#s' transform='scale(1.05) rotate(25)' /><use href='#s' transform='scale(1.2) rotate(8)' /><use href='#s' transform='scale(1.333) rotate(-60)' /><use href='#s' transform='scale(1.45) rotate(-30)' /><use href='#s' transform='scale(1.6) rotate(10)' /></g></defs><g transform='rotate(0 0 0)'><g transform='rotate(0 0 0)'><circle fill='url(#a)' r='3000' /><g opacity='0.5'><circle fill='url(#a)' r='2000' /><circle fill='url(#a)' r='1800' /><circle fill='url(#a)' r='1700' /><circle fill='url(#a)' r='1651' /><circle fill='url(#a)' r='1450' /><circle fill='url(#a)' r='1250' /><circle fill='url(#a)' r='1175' /><circle fill='url(#a)' r='900' /><circle fill='url(#a)' r='750' /><circle fill='url(#a)' r='500' /><circle fill='url(#a)' r='380' /><circle fill='url(#a)' r='250' /></g><g transform='rotate(0 0 0)'><use href='#g' transform='rotate(10)' /><use href='#g' transform='rotate(120)' /><use href='#g' transform='rotate(240)' /></g><circle fill-opacity='0.1' fill='url(#a)' r='3000' /></g></g>
                </svg>
                <div className='grid grid-cols-1 md:grid-cols-8 sm:space-y-1 space-y-5 z-50'>
                    <div className="col-span-2 relative">
                        <div className="absolute top-0">
                            <Link to={'/'}>
                                <img className="w-[20%] z-50" src="/logo.ico" alt="" />
                            </Link>
                        </div>
                        <div className="card sticky top-[20%]">
                            <div className="avatar flex justify-center">
                                <div className="w-[50%] rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                                    <img src={info.sex === "male" ? "/boy.svg" : "/girl.svg"} />
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
                                <div className="text-4xl flex items-center gap-10 font-extrabold">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-info">
                                        Qui suis-je?
                                    </span>
                                    <svg className="w-14 fill-info" viewBox="0 0 128 128">
                                        <g>
                                            <path
                                                d="M64,1C29.3,1,1,29.3,1,64s28.3,63,63,63s63-28.3,63-63S98.7,1,64,1z M64,119C33.7,119,9,94.3,9,64S33.7,9,64,9   s55,24.7,55,55S94.3,119,64,119z" />
                                            <rect height="40" width="8" x="60" y="54.5" />
                                            <rect height="8" width="8" x="60" y="35.5" />
                                        </g>
                                    </svg>
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
                                    <div className="text-4xl flex items-center gap-10 font-extrabold">
                                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-info">
                                            Compétences
                                        </span>
                                        <svg className="w-14 fill-info" viewBox="0 0 490 490">
                                            <g>
                                                <path d="M195.234,357.719L260.313,245l-65.078-112.719H65.078L0,245l65.078,112.719H195.234z M82.76,162.906h94.794L224.95,245
		l-47.396,82.094H82.76L35.362,245L82.76,162.906z" />
                                                <path d="M294.766,0l-65.078,112.718l65.078,112.718h130.156L490,112.718L424.922,0H294.766z M407.241,194.812h-94.794
		l-47.397-82.093l47.397-82.093h94.794l47.396,82.093L407.241,194.812z" />
                                                <path d="M294.766,264.563l-65.078,112.718L294.766,490h130.156L490,377.281l-65.078-112.718H294.766z M407.241,459.375h-94.794
		l-47.397-82.094l47.397-82.093h94.794l47.396,82.093L407.241,459.375z" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex flex-wrap justify-center gap-5">
                                    {skills.map((skill) => (
                                        <div data-aos="zoom-in" className="card hover:shadow-xl shadow-lg bg-base-100 cursor-pointer duration-100 p-4" key={skill.id}>
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
                                    <div className="text-4xl flex items-center gap-10 font-extrabold">
                                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-info to-primary">
                                            Autres compétences
                                        </span>
                                        <svg className="w-20 fill-primary" viewBox="0 0 100 100">
                                            <g>
                                                <path d="M77.3,55.7L70,44.9l0-0.9c0-13.2-10.8-24-24-24c-1.9,0-3.8,0.2-5.7,0.7C29.7,23.1,22,32.9,22,44
		c0,4.9,1.2,9.3,3.6,12.7c4.2,6,7,10.8,5.3,17.3c-0.4,1.5-0.1,3,0.9,4.2c0.9,1.2,2.2,1.8,3.7,1.8h19.7c2.3,0,4.3-1.6,4.7-3.8
		c0.1-0.4,0.2-0.8,0.2-1.2c0.2-1.2,1.2-2,2.4-2h1.4c2.2,0,4.1-1.3,4.7-3.4c0.6-2.3,1.4-5.6,1.5-9.6h5.2c0.9,0,1.8-0.8,2.2-1.6
		C77.9,57.6,77.8,56.3,77.3,55.7z M61.4,42c-0.8,1.3-2.4,2-4.7,2c-12.3,0-13.2,9-13.2,13.3c0,2-1.6,3.7-3.6,3.7h-0.3
		c-1.7,0-3.1-1.2-3.5-2.9c-0.4-1.8-1.6-2.8-2.8-3.7c-0.8-0.6-1.6-1.2-2-2.1c-1.1-2.3-2.2-5-2.2-8.4c0-7.8,5.4-14.6,12.7-16.3
		c1.4-0.3,2.7-0.5,4.1-0.5c6.8,0,12.9,4.1,15.5,10.3C61.5,37.7,62.6,40.1,61.4,42z" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex flex-wrap justify-center gap-5">
                                    {others.map((other) => (
                                        <div data-aos="flip-down" className="card hover:shadow-xl bg-base-100 shadow-lg cursor-pointer duration-100 p-4" key={other.id}>
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
                                <div className="text-4xl flex items-center gap-10 font-extrabold">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-info to-primary">
                                        Expériences
                                    </span>
                                    <svg className="w-14 fill-primary" viewBox="0 0 512 512">
                                        <g>
                                            <g>
                                                <polygon points="95.283,490.084 95.283,512 110.937,512 110.937,505.738 310.268,505.738 310.268,512 325.922,512 
			325.922,490.084 		" />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M311.512,317.902V198.689h-190.5v119.212H41.537v47.444h23.481v146.653h15.654V365.346H342.62v146.653h15.654V365.346
			h24.765v-47.444H311.512z M136.666,214.343h159.192v103.558h-25.248V269.88h-15.654v48.022h-79.315V269.88h-15.654v48.022h-23.321
			V214.343z M367.386,349.691H57.191v-16.135h310.196V349.691z" />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M180.618,71.528v111.025h71.287V71.528H180.618z M236.252,166.898h-39.979V87.182h39.979V166.898z" />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M391.109,0c-43.757,0-79.356,35.598-79.356,79.355c0,43.757,35.599,79.355,79.356,79.355
			c43.757,0,79.355-35.598,79.355-79.355C470.463,35.598,434.866,0,391.109,0z M391.109,143.055
			c-35.125,0-63.701-28.576-63.701-63.7c0-35.124,28.576-63.7,63.701-63.7c35.124,0,63.7,28.576,63.7,63.7
			C454.809,114.479,426.233,143.055,391.109,143.055z" />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M391.109,23.843c-30.609,0-55.512,24.903-55.512,55.512s24.903,55.512,55.512,55.512s55.511-24.903,55.511-55.512
			S421.718,23.843,391.109,23.843z M391.109,119.212c-21.979,0-39.858-17.88-39.858-39.858s17.88-39.858,39.858-39.858
			s39.857,17.88,39.857,39.858S413.086,119.212,391.109,119.212z" />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <polygon
                                                    points="382.278,59.07 382.278,76.811 367.667,76.811 367.667,92.466 397.932,92.466 397.932,59.07 		" />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex justify-center px-[25%]">
                                <ol className="relative border-l border-gray-200">
                                    {experiences.map((experience) => (
                                        <li data-aos="fade-right" key={experience.id} className="mb-10 ml-12">
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
                                        <div className="text-4xl flex items-center gap-10 font-extrabold">
                                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-info to-primary">
                                                Etudes
                                            </span>
                                            <svg className="fill-primary w-14" viewBox="0 0 512 512">
                                                <g>
                                                    <path d="M463.29,305.295v-84.777h-9.38c-39.71,0-75.128,6.873-104.271,15.713c-3.467-7.023-7.264-14.182-10.956-20.92
		c1.59-1.441,3.166-2.919,4.682-4.435c22.331-22.316,36.183-53.253,36.168-87.343c0.016-34.089-13.837-65.026-36.168-87.336
		C321.035,13.837,290.089,0,256.007,0c-34.082,0-65.027,13.837-87.343,36.198c-22.331,22.309-36.182,53.246-36.182,87.336
		c0,34.09,13.851,65.027,36.182,87.343c1.516,1.516,3.076,3.017,4.682,4.435c-3.706,6.738-7.503,13.897-10.97,20.92
		c-29.159-8.84-64.547-15.713-104.257-15.713h-9.38v84.777c-28.318,0.526-39.154,23.877-39.154,52.631
		c0,28.754,10.836,52.106,39.154,52.631v67.481l9.035,0.315h0.255c2.836,0.098,28.634,1.208,63.586,5.89
		c34.938,4.667,79.044,12.958,118.244,27.193l1.545,0.563h29.22l1.545-0.563c40.445-14.692,86.158-23.044,121.59-27.629
		c17.739-2.288,32.896-3.661,43.611-4.456c5.358-0.398,9.604-0.646,12.501-0.811c1.441-0.068,2.536-0.128,3.286-0.15
		c0.36-0.023,0.646-0.038,0.811-0.038h0.27l9.049-0.315v-67.481c28.319-0.548,39.124-23.877,39.124-52.631
		C502.414,329.172,491.609,305.836,463.29,305.295z M49.746,391.821c-0.315,0-0.646,0-1.006-0.015
		c-6.438-0.068-20.395-1.756-20.395-33.879c0-32.131,13.957-33.819,20.395-33.88c0.36-0.022,0.691-0.022,1.006-0.022
		c6.498,0,12.576,1.861,17.739,5.043c9.694,5.958,16.147,16.673,16.147,28.859c0,12.186-6.453,22.894-16.147,28.852
		C62.322,389.967,56.244,391.821,49.746,391.821z M230.63,286.259v202.262c-38.089-12.126-78.069-19.15-109.974-23.314
		c-23.502-3.046-42.576-4.48-53.171-5.125V407.51c20.365-7.293,34.906-26.728,34.906-49.584c0-22.856-14.542-42.299-34.906-49.584
		v-68.921c48.863,1.395,90.494,13.536,120.389,25.73c15.893,6.453,28.469,12.914,36.978,17.731c2.192,1.246,4.127,2.371,5.778,3.37
		V286.259z M268.884,492.708c-0.495,0.165-1.006,0.353-1.501,0.541h-22.736c-0.495-0.188-0.99-0.376-1.516-0.541V292.396h25.753
		V492.708z M256.007,228.682c-28.574,0-54.402-11.353-73.341-29.812c-0.33-0.33-0.66-0.646-1.006-0.975
		c-10.28-10.296-18.414-22.669-23.742-36.46c18.459-3.482,35.418-10.445,50.545-19.03c25.498-14.452,45.923-33.459,60.09-48.849
		c6.123-6.649,11.061-12.629,14.723-17.296c5.898,7.602,14.797,18.752,24.942,30.315c9.11,10.378,19.21,21.086,29.235,29.978
		c4.997,4.458,9.995,8.464,14.947,11.773c1.681,1.103,3.347,2.108,5.013,3.061c-4.878,17.836-14.317,33.774-27.043,46.508
		c-0.346,0.33-0.675,0.668-1.021,0.998C310.379,217.352,284.552,228.682,256.007,228.682z M444.545,460.082
		c-10.595,0.645-29.67,2.079-53.201,5.125c-31.875,4.142-71.856,11.188-109.944,23.314c0,0,0,0-0.014,0V286.236
		c0.014,0,0.014,0,0.014,0c8.164-4.899,23.157-13.168,43.492-21.4c29.834-12.066,71.18-24.042,119.654-25.415v68.921
		c-20.365,7.286-34.922,26.728-34.922,49.584c0,22.856,14.557,42.291,34.922,49.584V460.082z M463.29,391.806
		c-0.375,0.015-0.705,0.015-1.02,0.015c-6.498,0-12.562-1.831-17.724-5.02c-9.695-5.98-16.178-16.688-16.178-28.874
		c0-12.186,6.483-22.901,16.178-28.882c5.162-3.181,11.226-5.02,17.724-5.02c0.315,0,0.646,0,1.02,0.022
		c6.453,0.083,20.38,1.794,20.38,33.88C483.669,390.012,469.743,391.723,463.29,391.806z" />
                                                    <circle class="st0" cx="215.383" cy="161.037" r="12.502" />
                                                    <circle class="st0" cx="296.632" cy="161.037" r="12.502" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        {studies.map((study) => (
                                            <div data-aos="zoom-in-down" className="py-8 px-4">
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
                                        <div className="text-4xl flex items-center gap-10 font-extrabold">
                                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-info">
                                                Formations
                                            </span>
                                            <svg className="w-14 fill-info" viewBox="0 0 512 512">
                                                <g>
                                                    <g>
                                                        <g>
                                                            <path d="M137.432,231.747c28.231,0,51.2-22.969,51.2-51.2s-22.969-51.2-51.2-51.2s-51.2,22.969-51.2,51.2
				S109.2,231.747,137.432,231.747z M137.432,145.516c19.316,0,35.032,15.716,35.032,35.032s-15.716,35.032-35.032,35.032
				S102.4,199.863,102.4,180.547S118.116,145.516,137.432,145.516z" />
                                                            <path d="M277.558,145.516h226.358c4.465,0,8.084-3.62,8.084-8.084c0-4.465-3.62-8.084-8.084-8.084h-25.663
				c8.908-5.235,11.95-16.728,6.776-25.692l-53.895-93.349c-2.519-4.363-6.587-7.485-11.454-8.788
				c-4.866-1.304-9.949-0.634-14.313,1.884l-13.55,7.823C388.879,4.619,382.253,0,374.568,0H353.01
				c-4.004,0-7.722,1.255-10.779,3.391C339.175,1.255,335.457,0,331.453,0h-21.558c-10.401,0-18.863,8.463-18.863,18.863v107.789
				c0,0.915,0.066,1.814,0.192,2.695h-13.666c-4.465,0-8.084,3.62-8.084,8.084C269.474,141.896,273.093,145.516,277.558,145.516z
				 M394.78,28.183l18.67-10.779c0.482-0.278,0.951-0.361,1.339-0.361c0.29,0,0.534,0.045,0.706,0.092
				c0.403,0.108,1.15,0.414,1.636,1.256l53.895,93.348c0.743,1.287,0.301,2.939-0.986,3.682l-18.67,10.779
				c-1.286,0.742-2.938,0.3-3.681-0.987l-53.895-93.349C393.051,30.578,393.494,28.926,394.78,28.183z M393.432,126.653V63.573
				l37.974,65.774h-38.167C393.366,128.467,393.432,127.568,393.432,126.653z M307.2,18.863c0-1.485,1.209-2.695,2.695-2.695h21.558
				c1.485,0,2.695,1.209,2.695,2.695v21.558c0,4.465,3.62,8.084,8.084,8.084c4.465,0,8.084-3.62,8.084-8.084V18.863
				c0-1.485,1.209-2.695,2.695-2.695h21.558c1.485,0,2.695,1.209,2.695,2.695v107.789c0,1.485-1.209,2.695-2.695,2.695H353.01
				c-1.485,0-2.695-1.209-2.695-2.695V72.758c0-4.465-3.62-8.084-8.084-8.084c-4.465,0-8.084,3.62-8.084,8.084v53.895
				c0,1.485-1.209,2.695-2.695,2.695h-21.558c-1.485,0-2.695-1.209-2.695-2.695V18.863z" />
                                                            <path d="M493.137,377.263H363.789c-10.401,0-18.863,8.463-18.863,18.863v45.81h-35.032c-4.465,0-8.084,3.62-8.084,8.084
				c0,4.465,3.62,8.084,8.084,8.084h35.032v35.032c0,10.401,8.463,18.863,18.863,18.863h129.347
				c10.401,0,18.863-8.463,18.863-18.863v-97.01C512,385.726,503.537,377.263,493.137,377.263z M495.832,493.137
				c0,1.485-1.209,2.695-2.695,2.695H363.789c-1.485,0-2.695-1.209-2.695-2.695v-13.666c0.881,0.127,1.78,0.192,2.695,0.192h129.347
				c0.915,0,1.814-0.066,2.695-0.192V493.137z M495.832,460.8c0,1.485-1.209,2.695-2.695,2.695H363.789
				c-1.485,0-2.695-1.209-2.695-2.695v-10.779v-2.887c0.881,0.127,1.78,0.192,2.695,0.192h129.347c0.915,0,1.814-0.066,2.695-0.192
				V460.8z M495.832,428.463c0,1.485-1.209,2.695-2.695,2.695H363.789c-1.485,0-2.695-1.209-2.695-2.695v-32.337
				c0-1.485,1.209-2.695,2.695-2.695h35.032v13.474c0,4.465,3.62,8.084,8.084,8.084c4.465,0,8.084-3.62,8.084-8.084v-13.474h16.168
				v13.474c0,4.465,3.62,8.084,8.084,8.084c4.465,0,8.084-3.62,8.084-8.084v-13.474h16.168v13.474c0,4.465,3.62,8.084,8.084,8.084
				c4.465,0,8.084-3.62,8.084-8.084v-13.474h13.474c1.485,0,2.695,1.209,2.695,2.695V428.463z" />
                                                            <path d="M256,312.589h-13.92c-4.035-36.328-34.925-64.674-72.312-64.674h-64.674c-40.119,0-72.758,32.639-72.758,72.758v118.568
				c0,0.908,0.041,1.808,0.122,2.695H8.084c-4.465,0-8.084,3.62-8.084,8.084c0,4.465,3.62,8.084,8.084,8.084H39.13
				c5.441,6.579,13.664,10.779,22.849,10.779h67.368v13.474c0,16.345,13.297,29.642,29.642,29.642H256
				c16.345,0,29.642-13.297,29.642-29.642V342.232C285.642,325.886,272.345,312.589,256,312.589z M137.432,452.716H61.979
				c-7.43,0-13.474-6.044-13.474-13.474V320.674c0-31.204,25.385-56.589,56.589-56.589h64.674c28.459,0,52.078,21.117,56.014,48.505
				h-66.793c-16.345,0-29.642,13.297-29.642,29.642V409.6H91.621v-67.368c0-4.465-3.62-8.084-8.084-8.084
				c-4.465,0-8.084,3.62-8.084,8.084v75.453c0,4.465,3.62,8.084,8.084,8.084h53.805c0.053,0.001,0.106,0.001,0.16,0
				c7.398,0.039,13.404,6.067,13.404,13.474C150.905,446.672,144.861,452.716,137.432,452.716z M269.474,482.358
				c0,7.43-6.044,13.474-13.474,13.474h-97.01c-7.43,0-13.474-6.044-13.474-13.474v-14.595
				c12.428-3.527,21.558-14.978,21.558-28.521s-9.13-24.994-21.558-28.521v-68.489c0-7.43,6.044-13.474,13.474-13.474H256
				c7.43,0,13.474,6.044,13.474,13.474V482.358z" />
                                                            <path d="M503.916,301.811H490.25c0.127-0.881,0.192-1.78,0.192-2.695v-107.79c0-10.401-8.463-18.863-18.863-18.863h-21.558
				c-4.004,0-7.722,1.255-10.779,3.391c-3.057-2.136-6.775-3.391-10.779-3.391h-21.558c-10.401,0-18.863,8.463-18.863,18.863v107.79
				c0,0.915,0.066,1.814,0.192,2.695h-56.781c-4.465,0-8.084,3.62-8.084,8.084c0,4.465,3.62,8.084,8.084,8.084h172.463
				c4.465,0,8.084-3.62,8.084-8.084C512,305.43,508.38,301.811,503.916,301.811z M474.274,299.116c0,1.485-1.209,2.695-2.695,2.695
				h-21.558c-1.485,0-2.695-1.209-2.695-2.695v-53.895c0-4.465-3.62-8.084-8.084-8.084c-4.465,0-8.084,3.62-8.084,8.084v53.895
				c0,1.485-1.209,2.695-2.695,2.695h-21.558c-1.485,0-2.695-1.209-2.695-2.695v-107.79c0-1.485,1.209-2.695,2.695-2.695h21.558
				c1.485,0,2.695,1.209,2.695,2.695v21.558c0,4.465,3.62,8.084,8.084,8.084c4.465,0,8.084-3.62,8.084-8.084v-21.558
				c0-1.485,1.209-2.695,2.695-2.695h21.558c1.485,0,2.695,1.209,2.695,2.695V299.116z" />
                                                            <path d="M245.221,452.716h-64.674c-4.465,0-8.084,3.62-8.084,8.084s3.62,8.084,8.084,8.084h64.674
				c4.465,0,8.084-3.62,8.084-8.084S249.686,452.716,245.221,452.716z" />
                                                            <path d="M245.221,355.705h-64.674c-4.465,0-8.084,3.62-8.084,8.084c0,4.465,3.62,8.084,8.084,8.084h64.674
				c4.465,0,8.084-3.62,8.084-8.084C253.305,359.325,249.686,355.705,245.221,355.705z" />
                                                            <path d="M245.221,420.379h-43.116c-4.465,0-8.084,3.62-8.084,8.084c0,4.465,3.62,8.084,8.084,8.084h43.116
				c4.465,0,8.084-3.62,8.084-8.084C253.305,423.999,249.686,420.379,245.221,420.379z" />
                                                            <path d="M245.221,388.042h-64.674c-4.465,0-8.084,3.62-8.084,8.084c0,4.465,3.62,8.084,8.084,8.084h64.674
				c4.465,0,8.084-3.62,8.084-8.084C253.305,391.662,249.686,388.042,245.221,388.042z" />
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        {formations.map((formation) => (
                                            <div data-aos="zoom-in-left" className="py-8 px-4">
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
                                <div className="text-4xl flex items-center gap-10 font-extrabold">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-info">
                                        Projets
                                    </span>
                                    <svg className="w-14 fill-info" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M8 6.5H16M7.70502 8.70919L12.2826 15.3034M4.6 9H6.4C6.96005 9 7.24008 9 7.45399 8.89101C7.64215 8.79513 7.79513 8.64215 7.89101 8.45399C8 8.24008 8 7.96005 8 7.4V5.6C8 5.03995 8 4.75992 7.89101 4.54601C7.79513 4.35785 7.64215 4.20487 7.45399 4.10899C7.24008 4 6.96005 4 6.4 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V7.4C3 7.96005 3 8.24008 3.10899 8.45399C3.20487 8.64215 3.35785 8.79513 3.54601 8.89101C3.75992 9 4.03995 9 4.6 9ZM13.6 20H15.4C15.9601 20 16.2401 20 16.454 19.891C16.6422 19.7951 16.7951 19.6422 16.891 19.454C17 19.2401 17 18.9601 17 18.4V16.6C17 16.0399 17 15.7599 16.891 15.546C16.7951 15.3578 16.6422 15.2049 16.454 15.109C16.2401 15 15.9601 15 15.4 15H13.6C13.0399 15 12.7599 15 12.546 15.109C12.3578 15.2049 12.2049 15.3578 12.109 15.546C12 15.7599 12 16.0399 12 16.6V18.4C12 18.9601 12 19.2401 12.109 19.454C12.2049 19.6422 12.3578 19.7951 12.546 19.891C12.7599 20 13.0399 20 13.6 20ZM17.6 9H19.4C19.9601 9 20.2401 9 20.454 8.89101C20.6422 8.79513 20.7951 8.64215 20.891 8.45399C21 8.24008 21 7.96005 21 7.4V5.6C21 5.03995 21 4.75992 20.891 4.54601C20.7951 4.35785 20.6422 4.20487 20.454 4.10899C20.2401 4 19.9601 4 19.4 4H17.6C17.0399 4 16.7599 4 16.546 4.10899C16.3578 4.20487 16.2049 4.35785 16.109 4.54601C16 4.75992 16 5.03995 16 5.6V7.4C16 7.96005 16 8.24008 16.109 8.45399C16.2049 8.64215 16.3578 8.79513 16.546 8.89101C16.7599 9 17.0399 9 17.6 9Z"
                                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
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
            </div>
            <Footer />
        </div>
    );
}

export default Portfolio;