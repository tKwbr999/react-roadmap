import { useState } from "react";
import MyButton from "./components/MyButton";

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h2>Counters that update separately</h2>
      <MyButton />
      <MyButton />
      <h2>Counters that update together</h2>
      <SyncMyButton count={count} onClick={handleClick} />
      <SyncMyButton count={count} onClick={handleClick} />
    </>
  );
}

function SyncMyButton({
  count,
  onClick,
}: {
  count: number;
  onClick: () => void;
}) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}
