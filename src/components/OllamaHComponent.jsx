import { useState } from "react";
import axios from "axios";

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
 

  const handleClick = async () => {
    setLoading(true);
  
    const data = {
        "model": "llama3",
        "prompt":"Why is the sky blue?"
      }
    axios
      .post("http://localhost:11434/api/generate",data)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // 处理错误
        setLoading(false);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={handleClick}>Confirm</button> 
      <div
        style={{ paddingLeft: 15, textIndent: 2 }}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      ></div>
    </div>
  );
};

export default MyComponent;
