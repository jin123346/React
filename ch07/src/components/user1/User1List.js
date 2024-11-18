import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function User1List(){
    const [Users,setUsers] = useState([]);
    const navigate = useNavigate();


    //컴포넌트 생명주기 제어한느 훅
    useEffect(()=> {
        axios.get("http://localhost:8080/ch09/user1")
        .then(response=>{
            console.log(response.data);

            //서버에서 받아온 데이터로 상태 업데이트
            setUsers(response.data);
        }).catch();
    },[]); //의존성(반응형) 배열을 빈배열로 선언하면 컴포넌크가 처음 마운트 될떄 한번만 실행 


    const modifyMove = (user) => {
        navigate(`/user1/modify?uid=${user.uid}`);
    };

    const deleteMove = (user) => {
        axios.delete(`http://localhost:8080/ch09/user1/${user.uid}`)
        .then(response=>{
            console.log(response.data);
            

            setUsers(Users.filter((u) => u.uid !== user.uid));
    
        }).catch();
    };

    return (
        <div className="User1List">
            <span>User1List</span>
            <table border={1}>

                <tr>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>생년월일</th>
                    <th>나이</th>
                    <th>휴대폰</th>
                    <th>관리</th>
                </tr>
                {Users.map((user,index) => (
                    <tr key={index}>
                            <td>{user.uid}</td>
                            <td>{user.name}</td>
                            <td>{user.birth}</td>
                            <td>{user.age}</td>
                            <td>{user.hp}</td>
                            <td>
                                <button onClick={()=> modifyMove(user)}>수정</button>
                                {/* <button onClick={modifyHandler(user)}>수정</button>  => 이렇게 하면 버튼을 클릭하지 않아도 실행되기 때문에 이렇게 하면 안됨 */}
                                <button onClick={()=> deleteMove(user)}>삭제</button>
                            </td>
                    </tr>

                ))}
            </table>
        
        </div>
    );
}


