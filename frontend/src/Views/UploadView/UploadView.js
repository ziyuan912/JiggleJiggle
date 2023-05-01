import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";


const { Dragger } = Upload;

const props = {
  name: "dance-video-file",
  accept: "video/*",
  multiple: false,
  maxCount: 1,
  method: "GET",
  action: file => {
    console.log(file);
    // const videoFileURL = URL.createObjectURL(file);
    // localStorage.setItem('dance-video-url', file);
    // console.log("Receive uploaded video: ", videoFileURL);
    // window.location.href = 'dance';
    return new Promise(resolve => {
      resolve("Success")
    });
  }
};

function UplaodView() {
  return (
    <div className="upload-view-container">
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from
          uploading company data or other banned files.
        </p>
      </Dragger>
    </div>
  );
}

export default UplaodView;
