import { useContext, useState } from "react";
import UsersContext from "../context/UsersContext ";
import { useDispatch } from "react-redux";
import { addUser } from "../slices/UsersSlice";

export default function ReduxUserRegister() {
 
  const dispatch = useDispatch();

  const [user, setUser] = useState({ uid: "", name: "", age: 0 });

  const changeHandler = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const submitHanler = (e) => {
    e.preventDefault();

    //리덕트 users 상태 업데이트
    dispatch(addUser(user));
  };

  return (
    <div className="ReduxUserRegister">
      <h5>ReduxUserRegister</h5>
      <form onSubmit={submitHanler}>
        <input type="text" name="uid" value={null} onChange={changeHandler} />{" "}
        <br />
        <input
          type="text"
          name="name"
          value={null}
          onChange={changeHandler}
        />{" "}
        <br />
        <input
          type="text"
          name="age"
          value={null}
          onChange={changeHandler}
        />{" "}
        <br />
        <input type="submit" value="저장" /> <br />
      </form>
    </div>
  );
}
