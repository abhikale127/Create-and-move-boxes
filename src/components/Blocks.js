import React, { useState, useEffect } from "react";
import "../Styles/Home.css";

function Blocks(props) {
  const [selectedBlock, setSelectedBlock] = useState(false);
  const [BlockCSS, setBlockCSS] = useState({
    background: "yellow",
    position: "relative",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });
  useEffect(() => {}, [BlockCSS]);

  return (
    <div
      style={
        selectedBlock
          ? {
              background: BlockCSS.background,
              position: "relative",
              right: BlockCSS.right,
              left: BlockCSS.left,
              top: BlockCSS.top,
              bottom: BlockCSS.bottom,
              zIndex: 2,
            }
          : null
      }
      className="Block"
      tabIndex="0"
      onClick={(e) => {
        setSelectedBlock(true);
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          setBlockCSS({
            right: BlockCSS.right + 5,
            background: "yellow",
            position: "relative",
            left: BlockCSS.left,
            top: BlockCSS.top,
            bottom: BlockCSS.bottom,
          });
        }
        switch (e.key) {
          case "ArrowRight":
            setBlockCSS({
              ...BlockCSS,
              left: BlockCSS.left + 5,
            });
            break;
          case "d":
            setBlockCSS({
              ...BlockCSS,
              left: BlockCSS.left + 5,
            });
            break;
          case "ArrowLeft":
            setBlockCSS({
              ...BlockCSS,
              left: BlockCSS.left - 5,
            });
            break;
          case "a":
            setBlockCSS({
              ...BlockCSS,
              left: BlockCSS.left - 5,
            });
            break;
          case "ArrowUp":
            setBlockCSS({
              ...BlockCSS,
              top: BlockCSS.top - 5,
            });
            break;
          case "w":
            setBlockCSS({
              ...BlockCSS,
              top: BlockCSS.top - 5,
            });
            break;
          case "ArrowDown":
            setBlockCSS({
              ...BlockCSS,
              top: BlockCSS.top + 5,
            });
            break;
          case "s":
            setBlockCSS({
              ...BlockCSS,
              top: BlockCSS.top + 5,
            });
            break;

          default:
            break;
        }
      }}
    >
      <h2>{props.Text}</h2>
    </div>
  );
}

export default Blocks;
