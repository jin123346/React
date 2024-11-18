import { useQueryClient , useQuery, useMutation} from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";


//사용자 목록 패치 함수
 const fetchUsers = async () => {
    const response = await axios.get("http://localhost:8080/ch09/user2");
    return response.data;
 };

 // 사용자 삭제함수 
 const deleteUser = async (user2) => {
    const response = await axios.delete(`http://localhost:8080/ch09/user2/${user2.uid}`);
    return response.data;
 };


export default function User2List(){
    // const [User2s,setUser2s] = useState([]);
    const navigate = useNavigate();

    //react-query 사용자 훅
    const queryClient = useQueryClient();

    //react-queryh fetch 함수 정의
    const { data: User2s=[], isLoading, isError } = useQuery({
                                                            queryKey: ["User2s"],
                                                            queryFn: fetchUsers
                                                        });
 
    const modifyMove =  (user2) => {
        console.log("여기?");
        navigate(`/user2/modify?uid=${user2.uid}`);
    };


    const delteMutation = useMutation({
        mutationFn: (user2) => deleteUser(user2),
        onSuccess: () => { 
            queryClient.invalidateQueries(["User2s"]); // 목록 갱신
        }
    });
    const deleteProc = (user2) => {
       delteMutation.mutate(user2);

    }

    const deleteSubmit = async (user2) => {
        await deleteUser(user2);
        queryClient.invalidateQueries(["User2s"]); // 목록 갱신
    };


    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading data.</div>;

    return (
        <div className="User2List">
            <span>User2List</span>
            <table border={1}>
                <tr>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>생년월일</th>
                    <th>주소</th>
                </tr>
                {User2s?.map((user2,index)=>(
                    <tr key={user2.uid}>
                        <td>{user2.uid}</td>
                        <td>{user2.name}</td>
                        <td>{user2.birth}</td>
                        <td>{user2.addr}</td>
                        <td>
                            <button onClick={()=>modifyMove(user2)}>수정</button>
                            <button onClick={()=>deleteProc(user2)}>삭제</button>
                        </td>
                    </tr>
                ))}
            </table>
        
        </div>
    );
}


