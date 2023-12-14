import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/AxiosSecure";


const Feedback = () => {
    const axiosSecure = useAxiosSecure();
    const [feedback, setFeedback] = useState([]);
    
    useEffect(() =>{
        axiosSecure.get('/feedback')
        .then(res => {
            console.log(res.data);
            setFeedback(res.data);
        })
    }, [axiosSecure]);

    return (
        <div className="my-10 space-y-5">
            <h2 className="primary-btn">Feedback</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {
                    feedback?.map(user => <div className="p-5 border shadow-xl rounded-lg" key={user?.email}>
                        <p>Name: {user?.name}</p>
                        <p>Email: {user?.email}</p>
                        <p>Message: {user?.message}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Feedback;