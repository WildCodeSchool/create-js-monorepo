import { useEffect, useState } from "react";
import PngAvatar from "./PngAvatar";

import "./RPM.scss";

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
        // Add a random query parameter to the URL to force reloading
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

  return (
    <div className="avatar">
      {/* Use the 'hideIframe' state to conditionally apply a CSS class */}
      <iframe
        id="frame"
        className={`frame ${hideIframe ? "hidden" : ""}`}
        allow="camera *; microphone *; clipboard-write"
        title="Ready Player Me Avatar"
      />
      <PngAvatar avatarUrl={avatarUrl} />
    </div>
  );
}

export default RPM;
