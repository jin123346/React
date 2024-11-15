import { useCallback, useState } from "react";

export default function UseCallbackComponent() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const count1Handler =useCallback( () => {
    setCount1((preCount) => preCount + 1);
  },[]);

  

  const count2Handler = () => {
    setCount2((preCount) => preCount + 1);
  };

  //함수 식별값 설정
  count1Handler.id = count1Handler.id || crypto.randomUUID();

  console.log("현재 count1Handler 함수 : " + count1Handler.id);

  return (
    <div className="UseMemoComponent">
      <h4>UseMemoComponent</h4>
      <p>count1 : {count1}</p>
      <button onClick={count1Handler}>증가</button>

      <p>count2 : {count2}</p>
      <button onClick={count2Handler}>증가</button>
    </div>
  );
}
