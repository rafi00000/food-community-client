import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className='text-5xl font-bold'>Wrong Route!!</h1>
            <img src="/404.gif" alt="" className=''/>
            <button className="btn btn-outline" onClick={()=>navigate('/')}>Go Home?</button>
        </div>
    );
};

export default ErrorPage;