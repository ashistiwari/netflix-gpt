import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoute=({children})=>{
    const token=localStorage.getItem("token");
    const user=useSelector((store)=>store.user);
    if(!token || !user){
        return <Navigate to="/"/>
    }
    return children;
};
export default ProtectedRoute;