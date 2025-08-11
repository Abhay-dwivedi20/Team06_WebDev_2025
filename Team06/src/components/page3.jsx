import { useState } from "react";
import { Lightbulb } from "lucide-react";
import React from "react";

export default function Page3() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="page3 overflow-hidden w-full h-screen flex flex-col items-center border-t-2">
      <h1 className="text-3xl md:text-4xl font-bold mt-6 text-center text-yellow-800">
        Let's learn about the events of Indian history
      </h1>
      <div className="relative bg-image w-full h-full">
        <img
          src="public/images/Revolt of 1857.png"
          alt="Revolt of 1857 Background"
          className="w-full h-full object-cover"
        />
        <img
          className="absolute left-[50%] top-[30%] w-[30%] h-auto"
          src="public/images/character-2.png"
          alt="Historical Figure"
        />
        <button
          onClick={() => setShowDialog(true)}
          className="absolute left-[55%] top-[40%] p-2 bg-white rounded-full shadow-md hover:bg-yellow-100 transition"
        >
          <Lightbulb className="w-6 h-6 text-yellow-500" />
        </button>
        {showDialog && (
          <div className="absolute right-[30%] scroll-auto top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-lg shadow-lg p-6 max-w-sm z-50">
            <h2 className="text-lg font-bold mb-2">The Revolt of 1857</h2>
            <p className="text-sm text-gray-700">
              The Revolt of 1857, also known as the First War of Indian Independence,
              was a major uprising against the British East India Company. It began
              with Indian soldiers (sepoys) in Meerut and quickly spread across North
              India, uniting people against colonial rule.
            </p>
            <button
              onClick={() => setShowDialog(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
