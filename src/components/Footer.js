import React, {useState, useEffect} from 'react';

function Footer() {
  const [width, setWidth] = useState(window.innerWidth);


	 useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
	return (
		 <div
        className="footer d-flex flex-column"
        style={{
          marginTop: "200px",
          padding: "20px",
          height: "400px",
          backgroundColor: "black",
          color: "gray",
          clear: "both",
          position: "relative",
          bottom: "0",
        }}
      >
        <div className="container d-flex p-4">
          <div className={`${width < 768 ? "":"ml-auto"} mr-4 centering`}>
            <div>
              <div className="mb-3">About Us</div>
              <div className="mb-3">Help</div>
              <div className="mb-3">Privacy and Terms</div>
              <div className="mb-4">Yes, we use cookies</div>
              <div style={{marginTop:"50px"}}><b>&#169;2021</b></div>
            </div>
          </div>
        </div>
      </div>
	)
}

export default Footer