import { useRef } from "react";

function UseRefComponent() {
  //id값으로하면 component 재사용시 id값이 겹치는 일이 발생 -> 해결책 : useRef

  const refUid = useRef(null);
  const refName = useRef(null);

  const btnHandler = () => {
    const value = refUid.current.value;
    alert("확인!" + value);
  };

  const btnHandler2 = () => {
    // const name = document.getElementById("name");
    const value = refName.current.value;

    alert("확인2!" + value);
  };

  return (
    <div>
      <h4>UseRefComponent</h4>

      <p>
        <input type="text" name="uid" ref={refUid} />
        <button onClick={btnHandler}>확인</button>
      </p>

      <p>
        <input type="text" name="name" ref={refName} />
        <button onClick={btnHandler2}>확인</button>
      </p>
    </div>
  );
}
export default UseRefComponent;
