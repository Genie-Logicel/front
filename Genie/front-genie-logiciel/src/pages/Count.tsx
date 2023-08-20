import axios from "axios";
import { useEffect, useState } from "react";

function Count() {
    const [members, setMember] = useState([]);

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
        <div className="py-10">
            <div>
                <img className="w-[640px]" src="/new-team-members-animate.svg" alt="test" />
            </div>
            <div className="flex items-center justify-center">
                <p className="text-2xl first-letter:text-3xl text-justify w-1/2">
                    La communauté compte aujourd'hui <span className="text-4xl font-bold"> {members.length} </span>
                    Les membres avec différents parcours au sein de l'ÉMIT.
                </p>
            </div>
        </div>
    );
}
export default Count;