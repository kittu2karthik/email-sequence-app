import React from "react";

import "./../index.css";

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>

      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "Send Email")}
        draggable
      >
        Send Email
      </div>

      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "Wait")}
        draggable
      >
        Wait
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "Decision")}
        draggable
      >
        Decision
      </div>
    </aside>
  );
};
