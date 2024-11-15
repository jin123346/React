import { createContext, useState } from "react";

// Context 객체 생성
//createContext 객체를 호출해서 Context 생성하기

//provide 정의 => 매개변수 받아서

const CountContext = createContext();

// Provider 정의
export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const reset = (value) => {
    setCount(value);
  };

  return (
    <CountContext.Provider value={{ count, increase, decrease, reset }}>
      {children}
    </CountContext.Provider>
  );
};

// 내보내기
export default CountContext;

// export const CountProvider = ({ children }) => {
//   const [count, setCount] = useState(0);
//   const increase = () => {
//     setCount(count + 1);
//   };
//   const decrease = () => {
//     setCount(count - 1);
//   };
//   const reset = (value) => {
//     setCount(value);
//   };

//   return (
//     <CountContext.Provider value={{ count, increase, decrease, reset }}>
//       {children}
//     </CountContext.Provider>
//   );
// };
// export default CountContext;
