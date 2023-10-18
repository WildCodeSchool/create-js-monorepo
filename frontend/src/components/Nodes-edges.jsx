import { MarkerType } from "reactflow";

export const genealogy = [
  {
    id: 0,
    title: "OF / Fiche suiveuse",
    ancestor: 0,
    detail: "Assemblage verrin",
    type: 1,
    terminal: "<id terminal>",
  },
  {
    id: 5,
    title: "OF / Requisition matière",
    ancestor: 0,
    detail: "Tige",
    type: 2,
    terminal: "<id terminal>",
  },
  {
    id: 6358,
    title: "Composant",
    ancestor: 5,
    detail: "Matière",
    type: 2,
    terminal: "<id terminal>",
  },
  {
    id: 13,
    title: "OF / fiche ??",
    ancestor: 0,
    detail: "Corps",
    type: 3,
    terminal: "<id terminal>",
  },
  {
    id: 46,
    title: "OF / fiche ??",
    ancestor: 13,
    detail: "Autre OF divers",
    type: 3,
    terminal: "<id terminal>",
  },
  {
    id: 47,
    title: "Composants",
    ancestor: 13,
    detail: "joints",
    type: 4,
    terminal: "<id terminal>",
  },
  {
    id: 103,
    title: "Composants",
    ancestor: 13,
    detail: "peinture",
    type: 4,
    terminal: "<id terminal>",
  },
  {
    id: 963,
    title: "Composants",
    ancestor: 963,
    detail: "valve",
    type: 4,
    terminal: "<id terminal>",
  },
  {
    id: 4000,
    title: "Composants",
    ancestor: 564646464,
    detail: "Autre composant divers",
    type: 4,
    terminal: "<id terminal>",
  },
];

const nodeColor = (type) => {
  switch (true) {
    case type === 2:
      return "lightblue";
    case type === 3:
      return "khaki";
    case type === 4:
      return "thistle";
    case type === 1:
      return "gold";
    default:
      return "darkseagreen";
  }
};

const detailErrorHandler = (node) => {
  // Vérifier si le nœud est de type 1 (ancêtre = 0)
  if (node.type === 1) {
    return node.title; // Pas d'erreur pour les nœuds de type 1 car n'ont pas d'ancestor
  }

  const targettedAncestor = genealogy.find((i) => i.id === node.ancestor);

  if (!targettedAncestor || node.id === node.ancestor) {
    // L'ancêtre n'existe pas ou c'est son propre ancêtre, erreur détectée

    return (
      <div>
        <div>{node.detail} </div>
        <div>
          <h3>ERREUR</h3>
          <h4>ANCESTOR NON VALIDE</h4>
        </div>
      </div>
    );
  }
  // L'ancêtre existe, pas d'erreur
  return node.detail;
};

const titleErrorHandler = (node) => {
  // Vérifier si le nœud est de type 1 (ancêtre = 0)
  if (node.type === 1) {
    return node.title; // Pas d'erreur pour les nœuds de type 1 car n'ont pas d'ancestor
  }

  const targettedAncestor = genealogy.find((i) => i.id === node.ancestor);

  if (!targettedAncestor || node.id === node.ancestor) {
    // L'ancêtre n'existe pas ou c'est son propre ancêtre, erreur détectée
    return (
      <div>
        <div>⚠️ {node.title} ⚠️</div>
      </div>
    );
  }

  // L'ancêtre existe, pas d'erreur
  return node.title;
};

/* const errorGroupHandler = (node) => {
  // Vérifier si le nœud est de type 1 (ancêtre = 0)
  if (node.type === 1) {
    return null; // Pas d'erreur pour les nœuds de type 1 car n'ont pas d'ancestor
  } 

  const targettedAncestor = genealogy.find((i) => i.id === node.ancestor);

  if (!targettedAncestor || node.id === node.ancestor) {
    // L'ancêtre n'existe pas ou c'est son propre ancêtre, erreur détectée
    return "-1";
  }
  // L'ancêtre existe, pas d'erreur
  return null;
}; */

export const initialNodes = genealogy.map((el, index) => ({
  id: `${el.id}`,
  data: {
    label: (
      <div>
        <div className="node-titre">
          <h3>
            <b>{titleErrorHandler(el)}</b>
          </h3>
        </div>
        <div className="node-detail">
          <i>{detailErrorHandler(el)}</i>
        </div>
      </div>
    ),
  },
  type: "default",
  position: { x: index, y: index },
  style: { backgroundColor: nodeColor(el.type) },
  draggable: true,
  connectable: true,
  sourcePosition: el.type === 1 ? null : "top",
  targetPosition: "bottom",
}));

export const initialEdges = [];

genealogy.forEach((element) => {
  if (element.ancestor !== "0") {
    initialEdges.push({
      id: `edge-${element.id}`,
      source: `${element.id}`,
      target: `${element.ancestor}`,
      type: "smoothstep",
      label: "",
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: "blue",
      },
      style: { stroke: "blue" },
    });
  }
  return null;
});
