import { useState } from "react";

//prettier-ignore
const UseStateComponent = () => {
  //state 선언 -> state는 컴포넌트 내부에서 처리되는 값
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [today, setToday] = useState(new Date());
  const [user, setUser] = useState({ uid: "", name: "", age: 0 });


  const inputChangeHandler= (e)=>{
    setMessage(e.target.value);
  }

  return (
    <div className="UseStateComponent">
      <h4>UseStaeComponent</h4>
      <p>
        상태값 count : {count}
      </p>
      <button onClick={()=>{setCount(count+1)}}>+</button>
      <button onClick={()=>{setCount(count-1)}}>-</button>

      <p>{message}</p>
      <input type="text" value={message} onChange={inputChangeHandler} />

      <p>today : {JSON.stringify(today).substring(1,11)}</p>

      <p>
        아이디 : {user.uid} <br />
        이름 : {user.name} <br />
        나이 : {user.age} <br />
      </p>

      {/* ...user =>  state 업데이트  
        ...user을 사용하지 않으면 하나의 타겟만 허용됨? =>  그냥 기존꺼는 초기화되서 사라지게되는 것
        전개연산자(...)를 이용해서 불변성을 유지해 기존 상태값을 업데이트
      */}
      <input type="text" value={user.uid} onChange={(e)=>{setUser({...user,uid:e.target.value})}} />
      <input type="text" value={user.name} onChange={(e)=>{setUser({...user,name:e.target.value})}} />
      <input type="text" value={user.age} onChange={(e)=>{setUser({...user,age:e.target.value})}} />
    </div>
  );
};

export default UseStateComponent;
