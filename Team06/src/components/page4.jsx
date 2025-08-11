import { useState } from "react";
import { Lightbulb } from "lucide-react";
import React from "react";

export default function Page4() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="page4 overflow-hidden w-full h-screen flex flex-col items-center border-t-2">

      <div className="relative bg-image w-full h-full">
        <img
          src="public/images/Quit india 1942.png"
          alt="Quit India Movement Background"
          className="w-full h-full object-cover"
        />
        <img
          className="absolute left-[20%] top-[30%] w-[30%] h-auto"
          src="public/images/character-2.png"
          alt="Quit India Movement Figure"
        />
        <button
          onClick={() => setShowDialog(true)}
          className="absolute left-[45%] top-[40%] p-2 bg-white rounded-full shadow-md hover:bg-yellow-100 transition"
        >
          <Lightbulb className="w-6 h-6 text-yellow-500" />
        </button>
        {showDialog && (
          <div className="absolute left-[60%] top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-lg shadow-lg p-6 max-w-sm z-50">
            <h2 className="text-lg font-bold mb-2">Quit India Movement</h2>
            <p className="text-sm text-gray-700">
              The Quit India Movement, launched by Mahatma Gandhi on 8 August 1942,
              was a mass protest demanding an end to British rule in India. It called
              for immediate independence, inspiring nationwide strikes, demonstrations,
              and acts of civil disobedience.
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
