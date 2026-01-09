export const projects = [
  {
    id: "visual-servoing",
    title: "Visual Servoing (bras sans encodeurs)",
    short:
      "Estimation d’états articulaires via caméras + ArUco, contrôle via ROS2 Control + MoveIt2.",
    tags: ["ROS2", "OpenCV", "MoveIt2", "Gazebo"],
    highlights: ["Pipeline perception→états", "Boucle de contrôle", "Validation en simulation"],
    details: {
      context:
        "Objectif : remplacer des encodeurs par une estimation visuelle robuste, et garder un contrôle compatible MoveIt2.",
      whatIDid: [
        "Modélisation URDF/Xacro + intégration Gazebo",
        "Détection ArUco + calibration caméra",
        "Publication des joint_states visuels",
        "Contrôle MoveIt2 / ROS2 Control",
      ],
      results: [
        "Démo stable en simulation",
        "Architecture modulaire et réutilisable",
      ],
      stack: ["ROS2 Humble", "Gazebo", "MoveIt2", "OpenCV", "Python/C++"],
      links: {
        repo: "https://github.com/Eliottfrhl/Robot5A",
        demo: "",
      },
    },
  },
  {
    id: "teleop-layer",
    title: "Teleoperation Layer (parité Python/C++)",
    short:
      "Téléopération ROS2 symétrique avec modules interchangeables et API propre pour release stable.",
    tags: ["ROS2", "C++", "Python", "Architecture"],
    highlights: ["API symétrique", "Modules interchangeables", "Prêt pour production"],
    details: {
      context:
        "Besoin : une téléopération propre et maintenable, utilisable depuis Python ET C++ avec le même modèle mental.",
      whatIDid: [
        "Définition d’API + conventions",
        "Structure modulaire et testable",
        "Intégration ROS2 (interfaces, nœuds, configs)",
      ],
      results: [
        "Réduction de friction d’intégration",
        "Base stable pour itérer sur des fonctionnalités métier",
      ],
      stack: ["ROS2", "C++", "Python", "GitHub Actions"],
      links: { repo: "", demo: "" },
    },
  },
];
