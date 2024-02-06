import { Suspense, useEffect, useState } from "react";
import { IData } from "./types/type";
import Component from "./components/Components";

function App() {
  const [data, setData] = useState<IData | null>();

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setData(data);
  };
  console.log(data);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Suspense fallback={<h1>...Loading</h1>}>
        <Component />
      </Suspense>
    </>
  );
}

export default App;
