import "./App.scss";
import Router from "../routes/Router";

function App() {
  let isLogin = false;
  return <Router isAuthenticate={isLogin} />;
}

export default App;
