import PropTypes from "prop-types";

function AvatarImage({ avatarUrl }) {
  return (
    <div className="avatar-image-container">
      {avatarUrl && (
        <img
          key={avatarUrl}
          src={avatarUrl}
          alt="Ready Player Me Avatar"
          className="avatar-image"
        />
      )}
    </div>
  );
}

AvatarImage.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
};

export default AvatarImage;
