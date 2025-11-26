'use client';

import { useCallback, useState } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
  Connection,
  Edge,
  Node,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Start' },
    position: { x: 250, y: 5 },
  },
  {
    id: '2',
    data: { label: 'Process Data' },
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    data: { label: 'Make Decision' },
    position: { x: 400, y: 100 },
  },
  {
    id: '4',
    data: { label: 'Output Result' },
    position: { x: 250, y: 200 },
  },
  {
    id: '5',
    type: 'output',
    data: { label: 'End' },
    position: { x: 250, y: 300 },
  },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  { id: 'e2-4', source: '2', target: '4', label: 'success' },
  { id: 'e3-4', source: '3', target: '4', label: 'approved' },
  { id: 'e4-5', source: '4', target: '5' },
];

export function FlowCanvas() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [nodeId, setNodeId] = useState(6);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const addNode = useCallback(() => {
    const newNode: Node = {
      id: String(nodeId),
      data: { label: `Node ${nodeId}` },
      position: {
        x: Math.random() * 400,
        y: Math.random() * 400,
      },
    };
    setNodes((nds) => [...nds, newNode]);
    setNodeId((id) => id + 1);
  }, [nodeId, setNodes]);

  return (
    <div className="h-[600px] w-full border rounded-lg overflow-hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
      <div className="absolute bottom-4 right-4 z-10">
        <button
          onClick={addNode}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Add Node
        </button>
      </div>
    </div>
  );
}

