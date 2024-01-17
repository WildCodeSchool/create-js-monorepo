import React, { useEffect } from "react";

import "./Avatar.scss";

function YourReactComponent() {
  useEffect(() => {
    // Initial setup code, only runs once when the component mounts
    const subdomain = "loreal-avatar"; // Replace with your custom subdomain
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
        console.error(`Avatar URL: ${json.data.url}`);
        document.getElementById("avatarUrl").innerHTML =
          `Avatar URL: ${json.data.url}`;
        document.getElementById("frame").hidden = true;
      }

      if (json.eventName === "v1.user.set") {
        console.error(
          `User with id ${json.data.id} set: ${JSON.stringify(json)}`
        );
      }
    };

    window.addEventListener("message", subscribe);

    return () => {
      // Cleanup code, removes the event listener when the component unmounts
      window.removeEventListener("message", subscribe);
    };
  }, []); // useEffect will run once when the component mounts

  const displayIframe = () => {
    // Code to run when the iframe is displayed
    document.getElementById("frame").hidden = false;
  };

  return (
    <div>
      <h2>L'Oréal AVATAR</h2>
      <input
        type="button"
        value="Open Ready Player Me"
        onClick={displayIframe}
      />
      <p id="avatarUrl">Avatar URL:</p>
      <iframe
        id="frame"
        className="frame"
        allow="camera *; microphone *; clipboard-write"
        title="Ready Player Me Avatar"
        hidden
      />
    </div>
  );
}

export default YourReactComponent;
