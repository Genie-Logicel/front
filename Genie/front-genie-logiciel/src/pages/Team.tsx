import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Member {
    id: number;
    nom: string;
    role_nom: string;
}

function Team() {
    const [members, setMember] = useState<Member[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/members/');
            setMember(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <div className=''>
            <div className="flex items-center">
                <div className="flex flex-col items-center rounded-tr-full rounded-bl-full w-full bg-white">
                    <div className="flex flex-col p-2 m-2 w-full space-y-16">
                        <div className="text-5xl first-letter:text-7xl font-bold text-center">Notre équipe</div>
                        <div className="flex justify-center flex-wrap gap-8">
                            {/* card */}
                            {members.map(item => (
                                <div key={item.id} className="flex-col group w-1/5 shadow-lg hover:shadow-xl card duration-150 py-8 max-w-7xl space-y-3">
                                    <div className="avatar flex justify-center">
                                        <div className="w-[50%] rounded-full ring group-hover:ring-blue-500 duration-150 ring-offset-base-100 ring-offset-2">
                                            <img src="https://source.unsplash.com/300x300/?man,businessman" />
                                        </div>
                                    </div>
                                    <div className="text-xl text-center font-semibold text-gray-800 capitalize">{item.nom}</div>
                                    <div className=" italic text-center text-gray-500">{item.role_nom}</div>
                                    <div className="flex justify-center">
                                        <div className="btn btn-info" >
                                            <Link target='_blank' to={"/Portfolio/" + item.id}>Voir le profil</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Team;