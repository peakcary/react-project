import React, { useState } from "react";

function Card({ slots, multiple, number, hasDropdown }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-xl font-bold">{slots} slots</h2>
      <p className="text-3xl font-bold">{multiple}X</p>
      <p className="text-lg">{number}</p>
      {hasDropdown && (
        <div className="cursor-pointer" onClick={toggleDropdown}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            classN
            ame="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-md rounded-md py-2 px-4 mt-2 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              选项1
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              选项2
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

const cardData = [
  { slots: 1, multiple: 100, number: 888, hasDropdown: false },
  { slots: 2, multiple: 50, number: 666, hasDropdown: true },
  { slots: 5, multiple: 20, number: 123, hasDropdown: true },
  { slots: 15, multiple: 10, number: 456, hasDropdown: false },
  { slots: 30, multiple: 5, number: 789, hasDropdown: true },
  { slots: 175, multiple: 2, number: 111, hasDropdown: false },
];

function MyComponent() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 gap-4">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default MyComponent;
