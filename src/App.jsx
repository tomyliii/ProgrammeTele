import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper">
      <Header />
      <Main />
    </div>
  );
}

export default App;
