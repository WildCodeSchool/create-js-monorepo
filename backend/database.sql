CREATE TABLE projet (
  Id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  text TEXT,
  url VARCHAR(255)
);
INSERT INTO projet (name, text, url)
VALUES
  ("Todolist", "Création d'un site web pouvant gérer ses tâches quotidiennes efficacement.", "https://alex-5110.github.io/todolist/");


CREATE TABLE competence (
  Id INT AUTO_INCREMENT PRIMARY KEY,
  content TEXT NOT NULL,
  type ENUM('hardskills', 'softskills') NOT NULL
);

INSERT INTO competence (content, type)
VALUES
  ("HTML/CSS/JavaScript", "hardskills"),
  ("Node.JS (Express)", "hardskills"),
  ("React.JS", "hardskills"),
  ("VS Code / Figma /Canva", "hardskills"),
  ("Git/Gihub", "hardskills"),
  ("Scrum", "hardskills"),
  ("Capacité d'adaptation", "softskills"),
  ("Curiosité", "softskills"),
  ("Réactivité", "softskills"),
  ("Sens de l'organisation", "softskills"),
  ("Travail en équipe", "softskills"),
  ("Autonomie", "softskills");







CREATE TABLE competence_project (
  competence_id INT,
  project_id INT,
  FOREIGN KEY (competence_id) REFERENCES competence(Id),
  FOREIGN KEY (project_id) REFERENCES projet(Id)
);

