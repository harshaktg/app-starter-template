import { FlowCanvas } from '@/components/flow-canvas';
import { InfoIcon } from 'lucide-react';

export default function CanvasDemoPage() {
  return (
    <div className="flex-1 w-full flex flex-col gap-8 p-8">
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Interactive Canvas Demo</h1>
        <p className="text-muted-foreground mb-6">
          Powered by React Flow - Build node-based editors and interactive diagrams
        </p>

        <div className="bg-accent text-sm p-4 rounded-md text-foreground flex gap-3 items-start mb-8">
          <InfoIcon size="20" strokeWidth={2} className="flex-shrink-0 mt-0.5" />
          <div className="space-y-2">
            <p className="font-semibold">Interactive Features:</p>
            <ul className="text-sm space-y-1 ml-4 list-disc">
              <li>Drag nodes to reposition them</li>
              <li>Connect nodes by dragging from one handle to another</li>
              <li>Zoom in/out with mouse wheel or controls</li>
              <li>Pan the canvas by dragging the background</li>
              <li>Click "Add Node" to create new nodes</li>
              <li>Delete nodes/edges by selecting and pressing Delete</li>
            </ul>
          </div>
        </div>

        <FlowCanvas />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">🎨 Customizable</h3>
            <p className="text-sm text-muted-foreground">
              Custom nodes, edges, and styling with Tailwind CSS support
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">⚡ Performant</h3>
            <p className="text-sm text-muted-foreground">
              Handles thousands of nodes with smooth interactions
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">🔧 Feature-Rich</h3>
            <p className="text-sm text-muted-foreground">
              MiniMap, controls, background patterns, and more built-in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

