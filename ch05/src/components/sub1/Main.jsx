import { Route, Link, Routes } from "react-router-dom";
import Hello from "./Hello";
import Welcome from "./Welcome";
import Greeting from "./Greeting";

const Main = () => {
  return (
    <div className="Main">
      <h4>리액트 라우터 기본</h4>

      <p>
        <Link to="/hello">hello</Link> <br />
        <Link to="/welcome">welcome</Link>
        <br />
        <Link to="/greeting">greeting</Link>
        <br />
      </p>

      <Routes>
        <Route path="/hello" element={<Hello />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </div>
  );
};

export default Main;
