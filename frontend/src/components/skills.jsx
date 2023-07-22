import React, { useEffect, useState } from "react";
import SkillItem from "../services/skillItem";

function Skills() {
  const [softSkills, setSoftSkills] = useState([]);
  const [hardSkills, setHardSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [selectedType, setSelectedType] = useState("softskills");
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    const fetchSoftSkills = () => {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/softskills`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erreur lors de la récupération des Soft skills");
          }
          return response.json();
        })
        .then((data) => {
          setSoftSkills(data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const fetchHardSkills = () => {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/hardskills`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erreur lors de la récupération des Hard skills");
          }
          return response.json();
        })
        .then((data) => {
          setHardSkills(data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchSoftSkills();
    fetchHardSkills();
  }, [showAddForm]);

  const handleAddSkill = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/${selectedType}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: newSkill }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de l'ajout de la compétence");
        }
        return response.json();
      })
      .then((data) => {
        if (selectedType === "softskills") {
          setSoftSkills((prevSoftSkills) => [...prevSoftSkills, data]);
        } else if (selectedType === "hardskills") {
          setHardSkills((prevHardSkills) => [...prevHardSkills, data]);
        }
        setNewSkill("");
        setShowAddForm(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUpdateSkill = (id, updatedContent) => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/${selectedType}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: updatedContent }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la mise à jour de la compétence");
        }
        if (selectedType === "softskills") {
          setSoftSkills((prevSoftSkills) =>
            prevSoftSkills.map((skill) =>
              skill.Id === id ? { ...skill, content: updatedContent } : skill
            )
          );
        } else if (selectedType === "hardskills") {
          setHardSkills((prevHardSkills) =>
            prevHardSkills.map((skill) =>
              skill.Id === id ? { ...skill, content: updatedContent } : skill
            )
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteSkill = (id) => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/${selectedType}/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la suppression de la compétence");
        }
        if (selectedType === "softskills") {
          setSoftSkills((prevSoftSkills) =>
            prevSoftSkills.filter((skill) => skill.Id !== id)
          );
        } else if (selectedType === "hardskills") {
          setHardSkills((prevHardSkills) =>
            prevHardSkills.filter((skill) => skill.Id !== id)
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="skills">
      <div className="softskills">
        <h2>Soft Skills</h2>
        <ul>
          {softSkills.map((skill) => (
            <li key={skill.Id}>
              <SkillItem
                skill={skill}
                onDelete={handleDeleteSkill}
                onUpdate={handleUpdateSkill}
              />
            </li>
          ))}
        </ul>
        {showAddForm && selectedType === "softskills" && (
          <>
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
            />
            <button type="button" onClick={handleAddSkill} className="validé">
              Ajouter un Soft Skill
            </button>
            <button type="button" onClick={() => setShowAddForm(false)}>
              Annuler
            </button>
          </>
        )}
        {!showAddForm && (
          <button
            className="add"
            type="button"
            onClick={() => {
              setSelectedType("softskills");
              setShowAddForm(true);
            }}
          >
            ajouter un Soft Skill
          </button>
        )}
      </div>
      <div className="hardskills">
        <h2>Hard Skills</h2>
        <ul>
          {hardSkills.map((skill) => (
            <li key={skill.Id}>
              <SkillItem
                skill={skill}
                onDelete={handleDeleteSkill}
                onUpdate={handleUpdateSkill}
              />
            </li>
          ))}
        </ul>
        {showAddForm && selectedType === "hardskills" && (
          <>
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
            />
            <button type="button" onClick={handleAddSkill} className="valider">
              ajouter un Hard Skill
            </button>
            <button type="button" onClick={() => setShowAddForm(false)}>
              Annuler
            </button>
          </>
        )}
        {!showAddForm && (
          <button
            className="add"
            type="button"
            onClick={() => {
              setSelectedType("hardskills");
              setShowAddForm(true);
            }}
          >
            ajouter un Hard Skill
          </button>
        )}
      </div>
    </div>
  );
}

export default Skills;
