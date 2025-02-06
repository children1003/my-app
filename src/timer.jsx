import { useState, useEffect } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("計時開始...");
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // 清除計時器，組件卸載後停止運作
    return () => {
      console.log("計時器清除");
      clearInterval(interval);
    };
  }, []); // 空陣列代表只在組件掛載時執行一次

  return <p>計時：{seconds} 秒</p>;
}

export default App;