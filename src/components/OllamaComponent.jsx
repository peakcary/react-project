import { useState } from "react";
import ollama from "ollama/browser";

const OllamaComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const message = { role: "user", content: "你是谁?" };
    const response = await ollama.chat({
      model: "llama3",
      messages: [message],
    });
    setData(response.message.content);
    setLoading(false);
    console.log(response.message.content);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={handleClick}>Confirm</button>
   
      <div style={{paddingLeft: 15, textIndent: 2}} 
      dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}></div>
    </div>
  );
};

export default OllamaComponent;
