import { useState, useEffect } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("�p�ɶ}�l...");
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // �M���p�ɾ��A�ե�����ᰱ��B�@
    return () => {
      console.log("�p�ɾ��M��");
      clearInterval(interval);
    };
  }, []); // �Ű}�C�N��u�b�ե󱾸��ɰ���@��

  return <p>�p�ɡG{seconds} ��</p>;
}

export default App;