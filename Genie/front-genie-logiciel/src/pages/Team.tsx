import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Team() {
    const [members, setMember] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://192.168.88.29:8000/api/members/');
            // console.log(response.data.data);
            setMember(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <div className=''>
            <div className="flex items-center bg-gradient-to-r from-blue-400 via-white to-blue-100 w-[100%]">
                <div className="flex flex-col items-center rounded-tr-full rounded-bl-full w-full bg-white">
                    <div className="flex flex-col p-2 m-2 w-full">
                        <div className="text-5xl first-letter:text-7xl font-bold text-center">Notre équipe</div>

                        <div className="flex items-center justify-center text-center">
                            <div className="flex flex-col p-2 m-2 ">
                                <div className="md:grid flex">
                                    <div className="items-center justify-center flex flex-wrap gap-4 p-2">
                                        {/* card */}
                                        {members.map(item => (
                                            <div key={item.id} className="flex-col hover:shadow-xl border-2 rounded-xl hover:border-blue-400 hover:rounded-xl duration-150 px-5 py-3 max-w-7xl space-y-3">
                                                <div className="flex justify-center">
                                                    <img className="w-40 rounded-full" src="https://source.unsplash.com/300x300/?man,businessman" alt=""/>
                                                </div>
                                                <div className="text-lg font-medium text-gray-800 capitalize">{item.nom}</div>
                                                <div className=" italic text-gray-500">{item.role_nom}</div>
                                                <div className="flex justify-center">
                                                    <div className="btn btn-info btn-sm rounded-2xl" >
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
                </div>
            </div>
        </div>
    );
}
export default Team;