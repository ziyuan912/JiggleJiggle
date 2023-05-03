import React from "react";
import { useNavigate } from "react-router-dom";

export default function VideoInput() {
  const navigate = useNavigate(); 
  let data = {name: null, file: null};

  const inputRef = React.useRef();

  const [source, setSource] = React.useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    data = {name: file.name, file: file, url: url};
    console.log(file.name);
    setSource(url);
    navigate("../culture", {state: data});
  };

  return (
    <div className="VideoInput">
      <input
        ref={inputRef}
        className="VideoInput_input"
        type="file"
        onChange={handleFileChange}
        accept=".mov,.mp4"
        id="videoInput"
      hidden/>
    </div>
  );
}
