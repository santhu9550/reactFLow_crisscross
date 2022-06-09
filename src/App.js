import React, { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  addEdge,
  Controls,
  useEdgesState,
  useNodesState
} from "react-flow-renderer";
import "./style.css";
import SourceNode from "./SourceNode";
import TargetNode from "./TargetNode";

const initBgColor = "#FFF";

const connectionLineStyle = { stroke: "#OOO" };
const snapGrid = [20, 20];
const nodeTypes = {
  source: SourceNode,
  target: TargetNode
};

const CustomNodeFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [bgColor, setBgColor] = useState(initBgColor);

  useEffect(() => {
    setNodes([
      {
        id: "s1",
        type: "source",
        data: { color: initBgColor, label: "one" },
        style: { border: "1px solid #777", padding: 10 },
        position: { x: 300, y: 50 },
        draggable: false
      },
      {
        id: "s2",
        type: "source",
        data: { color: initBgColor, label: "two" },
        style: { border: "1px solid #777", padding: 10 },
        position: { x: 300, y: 150 },
        draggable: false
      },
      {
        id: "s3",
        type: "source",
        data: { color: initBgColor, label: "three" },
        style: { border: "1px solid #777", padding: 10 },
        position: { x: 300, y: 250 },
        draggable: false
      },
      {
        id: "s4",
        type: "source",
        data: { color: initBgColor, label: "four" },
        style: { border: "1px solid #777", padding: 10 },
        position: { x: 300, y: 350 },
        draggable: false
      },

      {
        id: "t1",
        type: "target",
        data: { color: initBgColor, label: "ONE" },
        style: { border: "1px solid #777", padding: 10 },
        position: { x: 700, y: 50 },
        draggable: false
      },
      {
        id: "t2",
        type: "target",
        data: { color: initBgColor, label: "TWO" },
        style: { border: "1px solid #777", padding: 10 },
        position: { x: 700, y: 150 },
        draggable: false
      },
      {
        id: "t3",
        type: "target",
        data: { color: initBgColor, label: "THREE" },
        style: { border: "1px solid #777", padding: 10 },
        position: { x: 700, y: 250 },
        draggable: false
      },
      {
        id: "t4",
        type: "target",
        data: { color: initBgColor, label: "FOUR" },
        style: { border: "1px solid #777", padding: 10 },
        position: { x: 700, y: 350 },
        draggable: false
      }
    ]);
  }, []);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge({ ...params, animated: true, style: { stroke: "#000" } }, eds)
      ),
    []
  );
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      style={{ background: bgColor }}
      nodeTypes={nodeTypes}
      connectionLineStyle={connectionLineStyle}
      snapToGrid={true}
      snapGrid={snapGrid}
      defaultZoom={1.5}
      fitView
      attributionPosition="bottom-left"
      // translateExtent={[[0,0],[1000,1000]]}
      // nodeExtent={[[0,0],[1000,1000]]}
    >
      <Controls />
    </ReactFlow>
  );
};

export default CustomNodeFlow;
