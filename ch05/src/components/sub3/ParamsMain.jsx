import { useState } from "react";
import { Route, Link, Routes, Navigate, useNavigate } from "react-router-dom";
import Result1 from "./Result1";
import Result2 from "./Result2";
import Result3 from "./Result3";

const ParamsMain = () => {
  const [formData, setFormData] = useState({ name: "", email: "", age: "" });
  const navigate = useNavigate(); //reactrouter에서 제공되는 훅훅훅
  const changehandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submit1Handler = (e) => {
    const queryString = `name=${formData.name}&email=${formData.email}&age=${formData.age}`;

    //result1로 라우팅 요청
    navigate(`/result1?${queryString}`);
  };

  const submit2Handler = (e) => {
    const params = `${formData.name}/${formData.email}/${formData.age}`;

    //result1로 라우팅 요청
    navigate(`/result2/${params}`);
  };

  const submit3Handler = (e) => {
    //result3로 라우팅 요청
    navigate(`/result3`, { state: { formData } });
  };

  return (
    <div className="Main">
      <h4>리액트 데이터 전송</h4>

      <form>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={changehandler}
        />
        <br />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={changehandler}
        />
        <br />
        <input
          type="number"
          name="age"
          placeholder="age"
          value={formData.age}
          onChange={changehandler}
        />
        <br />
        <input type="button" value="쿼리스트링" onClick={submit1Handler} />
        <br />
        <input
          type="button"
          value="주소 파라미터 전송"
          onClick={submit2Handler}
        />
        <br />
        <input type="button" value="state 전송" onClick={submit3Handler} /> 
        <br />
      </form>

      <Routes>
        <Route path="/result1" element={<Result1 />}></Route>
        <Route path="/result2/:name/:email/:age" element={<Result2 />}></Route>
        <Route path="/result3" element={<Result3 />}></Route>
      </Routes>
    </div>
  );
};

export default ParamsMain;
