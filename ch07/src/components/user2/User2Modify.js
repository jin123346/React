import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function User1Modify(){
    const [user2,setUser2] = useState({
        uid: "",
        name: "",
        birth: "",
        addr: "",
    });

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const uid= searchParams.get("uid");
    console.log("uid!!!1",uid);

    useEffect(()=>{
        axios.get(`http://localhost:8080/ch09/user2/${uid}`)
        .then(response => {
            console.log(response.data);

            setUser2(response.data);
        }).catch();
    },[]);


    const changeHandler = (e)=> {
        e.preventDefault();
        setUser2({...user2,[e.target.name]:e.target.value});
    }

    
    const submitHandler = (e) => {
        e.preventDefault();
        
        axios
         .post("http://localhost:8080/ch09/user2",user2)
         .then((resp)=>{
            console.log(resp.data);
            navigate("/user2/list");
            })
         .catch((err)=>{
            console.log(err)
         });
    
    }
    ;

    return (
        <div className="User2Modify">
            <span>User2Modify</span>
            <form onSubmit={submitHandler}>
                <table border={1}>
                    <tr>
                        <td>아이디</td>
                        <td>
                            <input type="text" name="uid" value={user2.uid} readOnly/>
                        </td>
                    </tr>
                    <tr>
                        <td>이름</td>
                        <td>
                            <input type="text" name="name" value={user2.name} onChange={changeHandler}/>
                        </td>
                    </tr>
                    <tr>
                        <td>생년월일</td>
                        <td>
                            <input type="text" name="birth" value={user2.birth} onChange={changeHandler}/>
                        </td>
                    </tr>
                    <tr>
                        <td>주소</td>
                        <td>
                            <input type="text" name="addr" value={user2.addr} onChange={changeHandler} />
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


