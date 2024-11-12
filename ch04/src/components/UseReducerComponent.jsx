import { useReducer } from "react";

//상태선언   ==>  컴포넌트 밖에다가 선언하기
const initCountState = {
  count: 0,
};

//리듀서(상태값을 처리하는 함수) 정의
function countReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
  }
}

const initUserState = {
  uid: "",
  name: "",
  age: 0,
};

function userReducer(state, action) {
  //action =>  tag!
  console.log("action.name : ", action.name);
  console.log("action.value : ", action.value);

  //이렇게 하면 초기 값으로 state 고정됨
  //return state;

  //  고정되지 않으려면  => 1번째 방법
  //   const user = { ...state };
  //   if (action.name === "uid") {
  //     user.uid = action.value;
  //   }
  //   if (action.name === "name") {
  //     user.name = action.value;
  //   }
  //   if (action.name === "age") {
  //     user.age = action.value;
  //   }
  //   return user;

  // 간략하게 
  return { ...state, [action.name]: action.value };
}

export default function UserReducerComponent() {
  //복잡한 쿼리 useRender() , 사용자정의 state와 처리함수를 정의
  const [counstState, countDispatch] = useReducer(countReducer, initCountState);
  const [userState, userDispatch] = useReducer(userReducer, initUserState);

  return (
    <div className="UserReducerComponent">
      <h4>UserReducerComponent</h4>
      <p>count: {counstState.count}</p>
      <button onClick={() => countDispatch({ type: "INCREMENT" })}>증가</button>
      <button onClick={() => countDispatch({ type: "DECREMENT" })}>감소</button>
      <button onClick={() => countDispatch({ type: "RESET" })}>초기화</button>
      <p>
        아이디 : {userState.uid}
        <br />
        이름 : {userState.name}
        <br />
        나이 : {userState.age}
        <br />
      </p>
      <input
        type="text"
        name="uid"
        value={userState.uid}
        placeholder="uid"
        onChange={(e) => userDispatch(e.target)}
      />{" "}
      <br />
      <input
        type="text"
        name="name"
        value={userState.name}
        onChange={(e) => userDispatch(e.target)}
        placeholder="name"
      />
      <br />
      <input
        type="text"
        name="age"
        value={userState.age}
        onChange={(e) => userDispatch(e.target)}
        placeholder="age"
      />
      <br />
    </div>
  );
}
