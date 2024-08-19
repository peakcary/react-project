import { useState } from "react";
import axios from "axios";

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
 

  const handleClick = async () => {
    setLoading(true);
    const config = {
      headers: {
        Authorization: 'Bearer nVba2bhv2bqWMB97gsAIvdb05laPUOBZ'
      },
    };
    const data = {
      "assistant_id": "MMnhHRhKWGPZ",
      "user_id": "rodneyxiong",
      "stream": false,
      "messages": [
          {
              "role": "user",
              "content": [
                  {
                      "type": "text",
                      "text": "你是谁"
                  }
              ]
          }
      ]
  }
    axios
      .post("https://yuanqi.tencent.com/openapi/v1/agent/chat/completions",data, config)
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
