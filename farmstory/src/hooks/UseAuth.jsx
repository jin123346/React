import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
    const navigate = useNavigate();
    const userSlice = useSelector((state) => state.userSlice);

    const username = userSlice.username;
    const role = userSlice.role;
    const accessToken = userSlice.accessToken; 

    if(!username){
        alert('로그인이 필요합니다.')
        navigate("/user/login");
        return;
    }


    return {username,accessToken,role,navigate};
};

export default useAuth;
