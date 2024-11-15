import { useSelector } from "react-redux";

export default function ReduxUserList() {
  //state.store 파일의 reducer 키값
  const users = useSelector((state) => state.usersReducer.users);

  return (
    <div className="ReduxUserList">
      <h5>ContextUserList</h5>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.uid},{user.name},{user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}
