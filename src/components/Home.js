import React, { useState } from "react";
import "../Styles/Home.css";
import Blocks from "./Blocks";

function Home() {
  const [BlocksArray, setBlocksArray] = useState([]);
  const [Count, setCount] = useState(0);
  const addCount = () => {
    setCount(Count + 1);
  };
  const addBlock = () => {
    setBlocksArray([...BlocksArray, <Blocks Text={Count} />]);
  };
  const deleteBlock = (i) => {
    setBlocksArray(
      BlocksArray.filter(function (person) {
        return BlocksArray.indexOf(person) !== i;
      })
    );
  };

  return (
    <div className="BorderBox">
      <div className="Heading">
        Create Boxes and move them around the fence with your keyboard{" "}
      </div>

      <button
        className="button"
        onClick={() => {
          addCount();
          addBlock();
        }}
      >
        Click to here to create Boxes
      </button>

      <div className="fence">
        {BlocksArray.map((block, i) => (
          <div
            key={i}
            onKeyDown={(e) => {
              if (e.key === "Delete") {
                deleteBlock(i);
              }
            }}
          >
            {" "}
            {block}{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
