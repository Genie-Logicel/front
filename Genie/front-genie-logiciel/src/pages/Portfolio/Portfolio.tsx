import Skill from "./Skill";
import Experience from "./Experience";
import Project from "./Project";
import Descri from "./Descri";
import School from "./School";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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
                        <Descri />
                    </div>
                    <div className="pl-5">
                        <Skill />
                    </div>
                    <div className="pl-5">
                        <Experience />
                    </div>
                    <div className="pl-5">
                        <School />
                    </div>
                    <div className="pl-5">
                        <Project />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;