import { useEffect, useState } from "react";

export default function UseEffectComponent() {
  const [name, setName] = useState("홍길동");
  const [age, setAge] = useState(0);

  //함수형 생명주기
  //mount단계
  useEffect(() => {
    console.log("UseEffect(component mount!!!!)");

    return () => {
      //unmount단계
      console.log("UseEffect(component unmount!!!!)");
    };
  }, []);

  //update단계
  useEffect(() => {
    console.log("UseEffect(component update!!!!)");
  });

  //의존성 배열의 state 값이 수정될 때 호출
  useEffect(() => {
    console.log("UseEffect(component 이름 update!!!!)");
  }, [name]);

  //의존성배열을 여러개 추가가능
  useEffect(() => {
    console.log("UseEffect(component 이름 update!!!!)");
  }, [name,age]);    

  return (
    <div className="UseEffectComponent">
      <p>이름 : {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>나이 : {age}</p>
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
    </div>
  );
}
