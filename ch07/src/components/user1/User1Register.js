import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function User1Register(){

    //라우팅 기능을 제공하는 훅
    const navigate = useNavigate();

    const [User,setUser] = useState({
        uid: "",
        name: "",
        birth: "",
        hp: "",
        age: 0,
    });

    const changeHandler = (e)=> {
        e.preventDefault();
        setUser({...User,[e.target.name]:e.target.value});
    }


    const submitHandler = (e) => {
        e.preventDefault();

        fetch(" http://localhost:8080/ch09/user1",{
             method:"POST",
             headers:{
                "Content-Type" : "application/json",
             },
             body: JSON.stringify(User),
        }).then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            navigate("/user1/list");

        })
        .catch((e)=> console.log(e));
    
    }
    ;

    return (
        <div className="User1List">
            <span>User1  등록</span>
            <form onSubmit={submitHandler}>
                <table border={1}>
                    <tr>
                        <td>아이디</td>
                        <td>
                            <input type="text" name="uid" value={User.uid} onChange={changeHandler} />
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
                            <input type="submit"  value={"등록하기"}  />
                        </td>
                    </tr>

                </table>

            </form>
        </div>
    );
}


