import { createContext, useState } from "react";

// Context 객체 생성
//createContext 객체를 호출해서 Context 생성하기

//provide 정의 => 매개변수 받아서

const UsersContext = createContext();

// Provider 정의
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

// 내보내기
export default UsersContext;
