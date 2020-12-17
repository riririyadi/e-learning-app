import React from "react";
import { useDropzone } from "react-dropzone";

function Dropzone(props) {
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  console.log(files);
  return (
    <>
      <button
        type="button"
        className="mb-2 button"
        onClick={open}
      >
        Open File
      </button>
      <div className="container rounded centering" style={{border:"1px solid #c3c3c3"}}>
        <div
          {...getRootProps({ className: "dropzone" })}
          style={{
            width: "100%",
            height: "100px",
          }}
        >
          <input {...getInputProps()} />
          {files.length > 0 ? (
            <ul>{files}</ul>
          ) : (
            <p>Drag 'n' drop some files here</p>
          )}
        </div>
      </div>
    </>
  );
}

export default function FileUpload() {
  return <Dropzone />;
}
