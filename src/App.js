import React from "react";
import "./App.css";
import LeftSection from "./container/LeftSection";
import MiddleSection from "./container/MiddleSection";
import RightSection from "./container/RightSection";
import { selectDrawer } from "./features/bearishSlice";
import { useSelector } from "react-redux";

function App() {
  const isOpen = useSelector(selectDrawer);
  console.log("Is Open", isOpen);
  return (
    <div className="h-screen ">
      <div className="flex h-full">
        <div
          className={`${
            isOpen ? "w-[20%] " : ""
          } h-full transition-all duration-100 min-w-[5%]`}
        >
          <LeftSection />
        </div>
        <div className="lg:flex-1 h-full md:w-full max-w-[95%] ">
          <MiddleSection />
        </div>
        <div className="w-[20%] h-full bearish-right-panel">
          <RightSection />
        </div>
      </div>
    </div>
  );
}

export default App;
