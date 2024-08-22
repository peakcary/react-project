import React from "react";

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md">
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
            {/* 可以继续添加更多的内容 */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
