import { useState, useEffect } from "react";
import ReactFlow, {
  Panel,
  MiniMap,
  useNodesState,
  useEdgesState,
  Controls,
} from "reactflow";
import Dagre from "@dagrejs/dagre";

import {
  genealogy,
  initialNodes,
  initialEdges,
} from "../components/Nodes-edges";

import Details from "../components/Details";

// style du graph depuis reactflow
import "reactflow/dist/style.css";

const dagreGraph = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));

// cette fonction calcule la disposition des noeuds et des arêtes à l'aide de l'algorithme de Dagre et des noeuds et arêtes définis dans Nodes-edges.jsx
const getLayoutedElements = (nodes, edges, options) => {
  dagreGraph.setGraph({ rankdir: options.direction });

  edges.forEach((edge) => dagreGraph.setEdge(edge.source, edge.target));
  nodes.forEach((node) => dagreGraph.setNode(node.id, node));

  Dagre.layout(dagreGraph);

  return {
    nodes: nodes.map((node) => {
      const { x, y } = dagreGraph.node(node.id);

      return { ...node, position: { x, y } };
    }),
    edges,
  };
};

function Graph() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [data] = useState(genealogy);
  const [selectedNode, setSelectedNode] = useState(null);
  const [direction, setDirection] = useState("BT");

  // défini l'affichage des détails du noeud sélectionné au clic
  const onNodeClick = (event, node) => {
    console.warn("Node clicked:", node);
    console.warn("data : ", data);
    console.warn("id :", node.id);
    const selectedElement = data.find((el) => el.id === parseInt(node.id, 10));
    console.warn("SelectedElement:", selectedElement);
    if (selectedElement) {
      setSelectedNode(selectedElement);
    }
    console.warn("SelectedNode :", selectedNode);
  };

  // fonction permettant de redéfinir la direction de l'affichage
  const onLayout = (newDirection) => {
    setDirection(newDirection);
  };

  // met à jour la disposition des éléments graphiques lorsque la direction change
  useEffect(() => {
    const layouted = getLayoutedElements(nodes, edges, { direction });

    setNodes([...layouted.nodes]);
    setEdges([...layouted.edges]);
  }, [nodes, edges, setEdges, setNodes, direction]);

  // permet l'affichage vertical dès le chargement initial du composant
  useEffect(() => {
    onLayout("BT");
  }, []);

  return (
    <div className="flow">
      {
        // dans ReactFlow, il est indispensable de définir une hauteur et une largeur au conteneur parent pour que le graph s'affiche
      }
      <div style={{ width: "80%", height: "100vh" }} className="graph">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
        >
          <Panel position="top-right">
            <button type="button" onClick={() => onLayout("BT")}>
              vertical layout
            </button>
            <button type="button" onClick={() => onLayout("RL")}>
              horizontal layout
            </button>
          </Panel>
          <MiniMap nodeColor="grey" nodeStrokeWidth={3} zoomable pannable />
          {
            // gestion du zoom native à ReactFlow
          }
          <Controls />
        </ReactFlow>
      </div>
      <div />
      {
        // affichage conditionnel des détails du noeud sélectionné
      }
      <div style={{ width: "20%", height: "100vh" }} className="details">
        {selectedNode && <Details selectedNode={selectedNode} />}
      </div>
    </div>
  );
}

export default Graph;
