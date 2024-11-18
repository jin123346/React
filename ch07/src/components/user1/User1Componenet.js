import { Link, Route, Routes } from "react-router-dom";
import User1List from "./User1List";
import User1Modify from "./User1Modify";
import User1Register from "./User1Register";

export default function User1Component(){

    return (
        <div className="User1Component">
            <h4>User1</h4>
            <p>
                <Link to="/user1/list">목록</Link><br/>
                <Link to="/user1/register">등록</Link><br/>
            </p>

            <Routes>
                <Route path="/user1/list" element={<User1List />} />
                <Route path="/user1/register" element={<User1Register />} />
                <Route path="/user1/modify" element={<User1Modify />} />
            </Routes>
        </div>
    )
}