import { useEffect, useState } from "react";
import { postExample } from "../../client/client";
import { PostExampleResponseOK } from "../../client/client-types";

export function Example() {
  const [example, setExample] = useState<PostExampleResponseOK>();
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [text, setText] = useState("");

  async function fetchExample() {
    const result = await postExample({ num1, num2, text });
    setExample(result);
  }

  useEffect(() => {
    fetchExample();
  }, []);

  if (!example) return <p>...</p>;

  return (
    <>
      <h2>Example</h2>
      <h3>{example.data}</h3>
      <h3>
        <label>1st number:</label>
        <input
          id="num1"
          type="number"
          value={num1}
          onChange={({ target: { value } }) => setNum1(parseInt(value))}
        />
        <label>2nd number:</label>
        <input
          type="number"
          value={num2}
          onChange={({ target: { value } }) => setNum2(parseInt(value))}
        />{" "}
        <label>Optional text:</label>
        <input
          type="text"
          value={text}
          onChange={({ target: { value } }) => setText(value)}
        />{" "}
        <br />
        <button onClick={fetchExample}>CALC</button>
      </h3>
    </>
  );
}
