import { useState } from "react";
import { Lightbulb } from "lucide-react";
import React from "react";

export default function Page2() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="page2 w-full h-screen overflow-hidden">
        
      <div className="relative bg-image w-full h-full">
        <img
          src="/images/Jaliyabhaagh.png"
          alt="Background"
          className="absolute w-full h-full object-cover"
        />
        <img
          className="absolute left-[10%] top-[32%] w-[30%] h-auto"
          src="/images/character-2.png"
          alt="Boy"
        />
        <button
          onClick={() => setShowDialog(true)}
          className="absolute left-[30%] top-[40%] p-2 bg-white rounded-full shadow-md hover:bg-yellow-100 transition"
        >
          <Lightbulb className="w-6 h-6 text-yellow-500" />
        </button>
        {showDialog && (
          <div className="absolute left-[45%] top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-lg shadow-lg p-6 max-w-sm z-50">
            <h2 className="text-lg font-bold mb-2">Jallianwala Bagh Massacre</h2>
            <p className="text-sm text-gray-700">
              The Jallianwala Bagh Massacre of 1919 was a tragic event in Amritsar,
              where British troops fired upon a peaceful gathering, killing hundreds
              of unarmed Indians.
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
