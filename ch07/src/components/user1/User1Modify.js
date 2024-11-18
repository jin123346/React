import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export default function User1Modify(){

    const [User,setUser] = useState({
        uid: "",
        name: "",
        birth: "",
        hp: "",
        age: 0,
    });

    // 현재 경로 정보를 제공하는 훅
    const location = useLocation();
    const navigate = useNavigate();

    //쿼리 스트링 정보를 제공하는 훅 
    const [searchParams] = useSearchParams();

    const uid = searchParams.get("uid");


     //컴포넌트 생명주기 제어한느 훅
     useEffect(()=> {
        axios.get(`http://localhost:8080/ch09/user1/${uid}`)
        .then(response=>{
            console.log(response.data);

            //서버에서 받아온 데이터로 상태 업데이트
            setUser(response.data);
        }).catch();
    },[]); //의존성(반응형) 배열을 빈배열로 선언하면 컴포넌크가 처음 마운트 될떄 한번만 실행 


    const changeHandler = (e)=> {
        e.preventDefault();
        setUser({...User,[e.target.name]:e.target.value});
    }

    const ModifySubmit = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8080/ch09/user1`,User)
        .then(response => {
            console.log(response.data);

                navigate("/user1/list?success=200");
            
        }).catch(err => console.log(err));
    }


     

    return (
        <div className="User1Modify">
            <span>User1Modify</span>
            <form onSubmit={ModifySubmit}>
                <table>
                    <tr>
                        <td>아이디</td>
                        <td>
                            <input type="text" name="uid" value={User.uid} onChange={changeHandler}  readOnly/>
                        </td>
                    </tr>
                    <tr>
                        <td>이름</td>
                        <td>
                            <input type="text" name="name" value={User.name} onChange={changeHandler}/>
                        </td>
                    </tr>
                    <tr>
                        <td>생년월일</td>
                        <td>
                            <input type="text" name="birth" value={User.birth} onChange={changeHandler}/>
                        </td>
                    </tr>
                    <tr>
                        <td>휴대폰</td>
                        <td>
                            <input type="text" name="hp" value={User.hp} onChange={changeHandler} />
                        </td>
                    </tr>
                    <tr>
                        <td>나이</td>
                        <td>
                            <input type="number" name="age" value={User.age} onChange={changeHandler} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} align="right">
                            <input type="submit"  value={"수정하기"}  />
                        </td>
                    </tr>

                </table>

            </form>
        </div>
    );
}


