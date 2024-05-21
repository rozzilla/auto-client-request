import { setBaseUrl } from "../../client/client";
import "../styles/App.css";
import { Check } from "./Check";
import { Example } from "./Example";

function App() {
  setBaseUrl("http://127.0.0.1:3042");

  return (
    <>
      <Check />
      <hr />
      <Example />
    </>
  );
}

export default App;
