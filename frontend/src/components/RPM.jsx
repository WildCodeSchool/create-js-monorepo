/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import { useEffect, useState } from "react";

import "./RPM.scss";
import "../commons.scss";

function RPM() {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [hideIframe, setHideIframe] = useState(false);

  useEffect(() => {
    const subdomain = "loreal-avatar";
    const frame = document.getElementById("frame");
    frame.src = `https://${subdomain}.readyplayer.me/avatar?frameApi`;

    const parse = (event) => {
      try {
        return JSON.parse(event.data);
      } catch (error) {
        return null;
      }
    };

    const subscribe = (event) => {
      const json = parse(event);

      if (json?.source !== "readyplayerme") {
        return;
      }

      if (json.eventName === "v1.frame.ready") {
        frame.contentWindow.postMessage(
          JSON.stringify({
            target: "readyplayerme",
            type: "subscribe",
            eventName: "v1.**",
          }),
          "*"
        );
      }

      if (json.eventName === "v1.avatar.exported") {
        const pngUrl = json.data.url.replace(".glb", ".png");
        console.error(`Avatar PNG URL: ${pngUrl}`);
        setAvatarUrl(`${pngUrl}?random=${Math.random()}`);
        setHideIframe(false);
      }

      if (json.eventName === "v1.user.set") {
        console.error(
          `User with id ${json.data.id} set: ${JSON.stringify(json)}`
        );
      }
    };

    window.addEventListener("message", subscribe);

    return () => {
      window.removeEventListener("message", subscribe);
    };
  }, []);

  const [imageUrl, setImageUrl] = useState(null);

  const downloadImage = (imageUrl) => {
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        // Create a temporary anchor element
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;

        // Extract the filename from the URL
        const filename = "myAvatar";

        // Set the download attribute and filename
        link.setAttribute("download", filename);
        document.body.appendChild(link);

        // Simulate a click on the anchor element to start the download
        link.click();

        // Clean up the temporary anchor element
        link.parentNode.removeChild(link);

        // Set the downloaded image URL to display on the page
        setImageUrl(url);
      })
      .catch((error) => {
        console.error("Error downloading image:", error);
      });
  };

  const handleDownload = () => {
    if (avatarUrl) {
      downloadImage(avatarUrl);
    }
  };
  return (
    <div className="avatar">
      <iframe
        id="frame"
        className={`frame ${hideIframe ? "hidden" : ""}`}
        allow="camera *; microphone *; clipboard-write"
        title="Ready Player Me Avatar"
      />
      <div className="img-download-block">
        {avatarUrl && (
          <img
            key={avatarUrl}
            src={avatarUrl}
            alt="Ready Player Me Avatar"
            className="avatar-image"
          />
        )}
        {avatarUrl ? (
          <button
            type="button"
            onClick={handleDownload}
            className="download-button"
          >
            Télécharger l'avatar
          </button>
        ) : (
          <span>Attendez la génération de l'image...</span>
        )}
      </div>
      {avatarUrl ? null : (
        <>
          <p className="image-text">
            Cliquez sur le bouton suivant pour générer votre image.
          </p>
          <p className="image-text">
            L'image de votre avatar va apparaître ici
          </p>
        </>
      )}
    </div>
  );
}

export default RPM;
