import Body from "./components/Body";
import appDataStore from "./utils/appDataStore";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={appDataStore}><Body /></Provider>
  );
}

export default App;
