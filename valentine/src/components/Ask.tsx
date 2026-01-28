import React from "react";
import gif from "../mm.gif";
import { useState } from "react";

export default function Ask() {
  const [showMessage, setShowMessage] = useState("");
  const [showOtherMessage, setShowOtherMessage] = useState("");

  return (
    <div>
      <div className="flex justify-center mt-20">
        <h1 className="text-4xl font-bold font-['Anton'] text-red-600">
          Will You Be My Valentine PLEASEEEEE
        </h1>
      </div>
      <div className="flex justify-center mt-5">
        <div className="">
          <button
            className="bg-white hover:bg-red-300 mr-2 text-2xl font-bold rounded-md w-25 h-10 border hover:cursor-pointer font-['Anton']"
            onClick={() => {
              setShowMessage("YAYYYY I LOVE YOU SO MUCHHH");
              setShowOtherMessage(
                "Ps... Look outside your door for a surprise!",
              );
            }}
          >
            Yes😻
          </button>
          <button
            className=" bg-white hover:bg-red-300 ml-2 text-2xl font-bold border rounded-md w-25 h-10 hover:cursor-pointer font-['Anton']"
            onClick={() => {
              setShowMessage("So u hate me okay.");
              setShowOtherMessage("");
            }}
          >
            No🙄
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-5">
        {showMessage && (
          <div className="text-7xl font-['Anton']">{showMessage}</div>
        )}
      </div>
      <div className="flex justify-center mt-5">
        {showOtherMessage && (
          <div className="text-2xl font-['Anton']">{showOtherMessage}</div>
        )}
      </div>

      <div className="flex justify-center mt-4">
        <img src={gif} className="w-80 h-80" />
      </div>
    </div>
  );
}
