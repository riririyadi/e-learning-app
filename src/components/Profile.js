import React, {
  useState,
  useContext,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { getCroppedImg, getRotatedImage } from "./canvasUtils";
import { Link } from "react-router-dom";
import { BiPencil } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { ImCamera } from "react-icons/im";
import { MdClass } from "react-icons/md";
import { LayoutContext } from "./NewLayout";
import "../styles/Profile.css";
import Cropper from "react-easy-crop";
import { getOrientation } from "get-orientation/browser";

const ORIENTATION_TO_ANGLE = {
  3: 180,
  6: 90,
  8: -90,
};

export default function Profile() {

  useEffect(() => {
 document.title = "E-learning | Profile"
  }, [])

  const { isDarkMode } = useContext(LayoutContext);
  const [name] = useState("John Doe");

  const classHistory = [
    { class: "Matematika Dasar - 2KA21" },
    { class: "Fisika - 2KA21" },
    { class: "Algoritma & Pemrograman - 2KA21" },
    { class: "Pemrograman Berbasis Web - 2KA21" },
    { class: "Sistem Basis Data - 2KA21" },
    { class: "Seni Budaya Dasar - 2KA21" },
  ];

  const [imageSrc, setImageSrc] = React.useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation
      );
      console.log("donee", { croppedImage });
      setCroppedImage(croppedImage);
      setImageSrc(null);
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels, rotation]);



  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);

      // apply rotation if needed
      const orientation = await getOrientation(file);
      const rotation = ORIENTATION_TO_ANGLE[orientation];
      if (rotation) {
        imageDataUrl = await getRotatedImage(imageDataUrl, rotation);
      }

      setImageSrc(imageDataUrl);
    }
  };

  return (
    <>
     <div className="main-area-center-loader"><b>This section is under maintainance</b></div>
    </>
  );
}

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}

 // <div className="row">
 //        <div className="col-md-12">
 //          <div
 //            className="card cover shadow-sm"
 //            style={{
 //              minHeight: "300px",
 //              border: "none",
 //              display: "flex",
 //              borderRadius: "10px",
 //            }}
 //          >
 //            <div className="d-flex mt-2 mr-2">
 //              <div className="dropdown ml-auto">
 //                <button
 //                  className={`${
 //                    isDarkMode ? "dark-overlay-btn" : "overlay-btn"
 //                  } centering`}
 //                  style={{
 //                    border: "none",
 //                    borderRadius: "30px",
 //                    padding: "5px",
 //                  }}
 //                  type="button"
 //                  data-toggle="dropdown"
 //                  aria-haspopup="true"
 //                  aria-expanded="false"
 //                  data-toggle-second="tooltip"
 //                  data-placement="right"
 //                  title="More options"
 //                >
 //                  <BsThreeDots />
 //                </button>
 //                <div
 //                  className={`dropdown-menu shadow-sm dropdown-menu-right ${
 //                    isDarkMode ? "dropdown-menu-dark" : "dropdown-menu-light"
 //                  } p-2 mt-2 mb-2`}
 //                >
 //                  <Link
 //                    to="/u/profile/edit"
 //                    style={
 //                      isDarkMode ? { color: "#F5F5F7" } : { color: "#000000" }
 //                    }
 //                  >
 //                    <div
 //                      className={`dropdown-item rounded ${
 //                        isDarkMode ? "dark-mode" : "light"
 //                      } pl-2`}
 //                      style={
 //                        isDarkMode
 //                          ? { color: "#F5F5F7", cursor: "pointer" }
 //                          : { color: "#000000", cursor: "pointer" }
 //                      }
 //                    >
 //                      <BiPencil />
 //                      <span className="ml-2">Edit</span>
 //                    </div>
 //                  </Link>
 //                </div>
 //              </div>
 //            </div>
 //            <div className="centering">
 //              <div className="image-wrapper">
 //                <img
 //                  className="ava"
 //                  src={
 //                    croppedImage
 //                      ? croppedImage
 //                      : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGgEDxzI3XkNdei9mDK-kqW2RuRXQMWta0YA&usqp=CAU`
 //                  }
 //                  alt="avatar"
 //                  style={{
 //                    height: "100px",
 //                    width: "100px",
 //                    borderRadius: "50%",
 //                  }}
 //                />

 //                <div className="upload-area">
 //                  <div className="centering">
 //                    <span style={{ zIndex: 1, marginTop: "10px" }}>
 //                      <ImCamera size="24px" />
 //                    </span>
 //                  </div>
 //                  <label className="label-upload" htmlFor="upload">
 //                    <input
 //                      type="file"
 //                      accept="image/*"
 //                      id="upload"
 //                      hidden
 //                      onChange={onFileChange}
 //                    />
 //                  </label>
 //                </div>
 //              </div>
 //            </div>
          
 //            <div className="text-center mt-4">
 //              <h5>
 //                <b>{name}</b>
 //              </h5>
 //            </div>
 //            <div className="text-white text-center">
 //              <i>
 //                <b>Bekasi, Student</b>
 //              </i>
 //            </div>
 //            <div
 //              className="text-white text-center"
 //              style={{ fontSize: "18px" }}
 //            >
 //              Universitas Gunadarma
 //            </div>
 //            <div
 //              className="text-white text-center"
 //              style={{ fontSize: "18px" }}
 //            >
 //              Fakultas Ilmu Komputer dan Teknologi Informasi
 //            </div>
 //          </div>
 //        </div>
 //      </div>

 //      <div className="row mt-4">
 //        <div className="col-md-6 mb-4">
 //          <div
 //            className={`card shadow-sm ${
 //              isDarkMode ? "bg-darks" : "bg-white"
 //            } p-4`}
 //            style={{ minHeight: "200px", border: "none", borderRadius: "5px" }}
 //          >
 //            <h5>
 //              <b>About</b>
 //            </h5>
 //            <div>Morning Person</div>
 //            <div>Kucing Lovers</div>
 //            <h5 className="mt-4">
 //              <b>Announcement</b>
 //            </h5>
 //            <div>Pernah menjadi bagian proyek NASA</div>
 //          </div>
 //        </div>
 //        <div className="col-md-6 mb-4">
 //          <div
 //            className="card p-4 shadow-sm"
 //            style={{
 //              backgroundColor: "#772CE8",
 //              minHeight: "200px",
 //              border: "none",
 //              borderRadius: "5px",
 //            }}
 //          >
 //            <h5 className="mb-4">
 //              <b>Class Timeline</b>
 //            </h5>
 //            {classHistory.map((data, i) => (
 //              <p className="text-white" key={i}>
 //                <span className="mr-2">
 //                  <MdClass size={18} />
 //                </span>
 //                {data.class}
 //              </p>
 //            ))}
 //          </div>
 //        </div>
 //      </div>
 //        {imageSrc && (
 //              <div className="shadow"
 //                style={{
 //                  position: "absolute",
 //                  left: "50%",
 //                  top: "50%",
 //                  transform: "translate(-50%,-50%)",
 //                  minWidth: "360px",
 //                  maxWidth:"90%",
 //                  zIndex:4,
 //                  backgroundColor:"white",
 //                  padding:"20px",
 //                  borderRadius:"10px"
 //                }}
 //              >
 //              <div className="mb-2"><h5><b>Set Image</b></h5></div>
 //                <div
 //                  style={{
 //                    position: "relative",
 //                    width: "100%",
 //                    height: "200px",
 //                    background: "#333",
 //                  }}
 //                >
 //                  <Cropper
 //                    image={imageSrc}
 //                    crop={crop}
 //                    rotation={rotation}
 //                    zoom={zoom}
 //                    aspect={1 / 1}
 //                    onCropChange={setCrop}
 //                    onRotationChange={setRotation}
 //                    onCropComplete={onCropComplete}
 //                    onZoomChange={setZoom}
 //                  />
 //                </div>
 //                <div>
 //                  <button className="button mt-3" onClick={showCroppedImage}>Submit</button>
 //                    <button className="button ml-3" onClick={()=>setImageSrc(null)}>Cancel</button>
 //                </div>
 //              </div>
 //            )}