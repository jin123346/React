import { useSearchParams } from "react-router-dom";

export default function Result1() {
  const [searchParms] = useSearchParams();
  const name = searchParms.get("name");
  const email = searchParms.get("email");
  const age = searchParms.get("age");
  return (
    <div className="Result1">
      <span>Result1</span>
      <p>
        이름: {name}
        <br />
        이메일: {email}
        <br />
        나이: {age}
        <br />
      </p>
    </div>
  );
}
