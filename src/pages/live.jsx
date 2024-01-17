import React from "react";

const Live = () => {
  return (
    <>
      <div className="black-bacgkround">
        <div style={{ width: "100%", padding: "0 0", textAlign: "center", position: "relative", }}>
          <p className="big-title-green">
            live
          </p>
        </div>

        <div>
          <p className="text-center-white">
            Vaata ürituse otseülekannet Sadamateatrist!
          </p>
        </div>

        <div className="align " style={{ position: "relative" }}>
          <p style={{ fontSize: 28, color: "white", fontWeight: "500", position: "absolute", top: "calc(50% - 80px)", left: "calc(50% - 220px)",  zIndex: 99 }}>
          Otseülekanne algab 24.05 kell 11:00
          </p>
          <div className="video video-blur disabled" style={{ position: "relative", zIndex: 0 }}>
            <iframe width="720" height="360" src="https://www.youtube.com/embed/7LYlaOOkzW4?si=1tNNdf-OnBzVtu7i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
          </div>
        </div>

      </div>
    </>
  )
}

export default Live;
