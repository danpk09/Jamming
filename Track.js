import React, { useState } from "react";
import "./Track.css";

function Track(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio(props.track.preview_url));

  function playAudio() {
    if (!isPlaying) {
      if (audio.src !== props.track.preview_url) {
        audio.pause();
        setAudio(new Audio(props.track.preview_url));
      }
      audio.play();
    } else {
      audio.pause();
    }
    setIsPlaying(!isPlaying);
  }

  function handleAddTrack() {
    props.onAdd(props.track);
  }

  function handleRemoveTrack() {
    props.onRemove(props.track);
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} {props.track.album}
        </p>
      </div>
      <button className="play-button" onClick={playAudio}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <button
        className="Track-action"
        onClick={props.isRemoval ? handleRemoveTrack : handleAddTrack}
      >
        {props.isRemoval ? "-" : "+"}
      </button>
    </div>
  );
}

export default Track;

// import React, { useState } from "react";
// import "./Track.css";

// function Track(props) {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [audio, setAudio] = useState(new Audio(props.track.preview_url));

//   function playAudio() {
//     if (isPlaying) {
//       audio.pause();
//     } else {
//       audio.play();
//     }
//     setIsPlaying(!isPlaying);
//   }

//   function handleAddTrack() {
//     props.onAdd(props.track);
//   }

//   function handleRemoveTrack() {
//     props.onRemove(props.track);
//   }

//   function handleNewTrack() {
//     audio.pause();
//     setIsPlaying(false);
//     setAudio(new Audio(props.track.preview_url));
//   }

//   return (
//     <div className="Track">
//       <div className="Track-information">
//         <h3>{props.track.name}</h3>
//         <p>
//           {props.track.artist} {props.track.album}
//         </p>
//       </div>
//       <button className="play-button" onClick={playAudio}>
//         {isPlaying ? "Pause" : "Play"}
//       </button>
//       <button
//         className="Track-action"
//         onClick={props.isRemoval ? handleRemoveTrack : handleAddTrack}
//       >
//         {props.isRemoval ? "-" : "+"}
//       </button>
//       {isPlaying && audio.src !== props.track.preview_url && handleNewTrack()}
//     </div>
//   );
// }

// export default Track;