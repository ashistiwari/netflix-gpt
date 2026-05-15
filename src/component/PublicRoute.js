import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const user=useSelector((store)=>store.user);
  if(token && user){
    return <Navigate to="/browse"/>
  }
  return children;
};
export default PublicRoute;