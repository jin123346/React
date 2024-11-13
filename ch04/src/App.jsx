import "./App.css";
import UseCallbackComponent from "./components/UseCallbackComponent";
import UseCounterComponent from "./components/UseCounterComponent";
import UseEffectComponent from "./components/UseEffectComponent";
import UseMemoComponent from "./components/UseMemoComponent";
import UserReducerComponent from "./components/UseReducerComponent";
import UseRefComponent from "./components/UseRefComponent";
import UseStateComponent from "./components/UseStateComponent";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h3>ch04. react hooks</h3>

      <h4>userRef()</h4>

      <UseRefComponent />

      <h4>userState()</h4>

      <UseStateComponent />
      <UserReducerComponent />
      <h4>userEffect()</h4>
      <UseEffectComponent />

      <h4>userMemo()</h4>

      <UseMemoComponent />

      <h4>userCallback()</h4>
      <UseCallbackComponent />

      <h4>custom Hook()</h4>
      <UseCounterComponent />
    </>
  );
}

export default App;
