import React, { useRef, useState } from "react";
import HighlightBlocks from "../../components/HighlightBlocks/index";
import Popover from "../../components/Popover";

function About() {
  const [stopIndex, setStopIndex] = useState(null);
  const [speed, setSpeed] = useState(1000);
  const highlightBlocksRef = useRef(null);

  const handleReset = () => {
    if (highlightBlocksRef.current) {
      highlightBlocksRef.current.reset();
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <Popover content="This is the popover content!">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
          Click me
        </button>
      </Popover>

      <div className="p-6">
        <HighlightBlocks
          ref={highlightBlocksRef}
          stopIndex={stopIndex}
          speed={speed}
        />
        <div className="mt-6">
          <input
            type="number"
            placeholder="Stop at block (0-5)"
            onChange={(e) => setStopIndex(Number(e.target.value))}
            className="border p-2"
          />
          <input
            type="number"
            placeholder="Speed in ms"
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="border p-2 ml-4"
          />
          <button
            onClick={handleReset}
            className="bg-blue-500 text-white p-2 ml-4"
          >
            Reset and Restart
          </button>
        </div>
      </div>
      {/* <div className="w-full max-w-md">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h1 className="text-xl font-bold mb-4">动态自适应区域</h1>
          <div className="max-h-[70vh] overflow-y-auto bg-gray-200 p-4">
            <p>
              这是一个自适应的内容区域，始终保持在可视窗口的70%以内。即使在不同设备上，它也能够适配屏幕大小。
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              scelerisque velit vitae ligula fermentum, sit amet feugiat mi
              varius. Fusce nec commodo urna. Curabitur dapibus nisl sed
              fermentum pharetra. Cras pharetra urna ac elit cursus, at
              ultricies augue scelerisque. Sed sit amet tellus sit amet mauris
              interdum elementum sit amet a lorem.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac
              lectus venenatis, facilisis orci id, vehicula ex. Mauris a dui
              quis nisi lacinia pulvinar. Integer vehicula enim orci, in sodales
              purus consectetur nec.
            </p>
          
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default About;
