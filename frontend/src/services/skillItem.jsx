import React, { useState } from "react";
import PropTypes from "prop-types";
import editer from "../assets/editer.png";
import suppression from "../assets/delete.png";

function SkillItem({ skill, onDelete, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [updatedContent, setUpdatedContent] = useState(skill.content);

  const handleDelete = () => {
    onDelete(skill.Id);
  };

  const handleUpdate = () => {
    onUpdate(skill.Id, updatedContent);
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <>
          <input
            type="text"
            value={updatedContent}
            onChange={(e) => setUpdatedContent(e.target.value)}
          />
          <button type="button" onClick={handleUpdate}>
            Save
          </button>
          <button type="button" onClick={() => setEditing(false)}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <span>{skill.content}</span>
          <button type="button" onClick={handleDelete} className="sup">
            <img src={suppression} alt="sup" className="supp" />
          </button>
          <button
            type="button"
            className="eddit"
            onClick={() => setEditing(true)}
          >
            <img src={editer} alt="edit" className="edit" />
          </button>
        </>
      )}
    </div>
  );
}

SkillItem.propTypes = {
  skill: PropTypes.shape({
    Id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default SkillItem;
