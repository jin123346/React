import { decrease, increase, reset } from "../slices/countSlice";
import ReduxChild from "./ReduxChild";
import { useDispatch, useSelector } from "react-redux";

export default function ReduxParent() {
  //리덕스 저장소 조회
  const count = useSelector((state) => state.countReducer.count);

  //리덕스 저장소
  const dispatch = useDispatch();

  return (
    <div className="ReduxParent">
      <h5>ReduxtParent</h5>

      <p>ReduxtParent count : {count}</p>
      <button onClick={() => dispatch(increase())}>증가</button>
      <button onClick={() => dispatch(decrease())}>감소</button>
      <button onClick={() => dispatch(reset(0))}>리셋</button>

      <ReduxChild />
    </div>
  );
}
