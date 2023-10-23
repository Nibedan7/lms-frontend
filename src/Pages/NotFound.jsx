import { useNavigate } from "react-router-dom";

function NotFound(){
    const navigate = useNavigate();
    return(
        <div className="h-screen w-full flex flex-col justify-center item-center bg-[#1A2238]">
            <h1 className="text-9xl font-extrabold text-white traking-widest">
                404
            </h1>
            <div className="bg-black text-white px-2 text-sm rounded rotate-12 absolute">
                Page not found ...
            </div>
            <button className="mt-5 ">
                <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-yellow-5000 focus:outline-none focus:ring"></a>
                <span onClick={()=> navigate(-1)} className="relative block px-8 py-3 bg-[#1A2238] border-current">
                    GO Back
                </span>
            </button>
        </div>
    );
}
export default NotFound