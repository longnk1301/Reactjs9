import { useState, useEffect } from "react";

const useFetchTodos = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return [data];
};

export default useFetchTodos;
