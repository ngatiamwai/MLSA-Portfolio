import React from "react";

const Education = () => {
  return (
    <section
      className="light"
      id="education"
      style={{
        // maxWidth: "35%",
        display: "flex",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div
          style={{
            // padding: "15vh",
            backgroundColor: "#daeaf8",
            marginBottom: "3vh",
            paddingLeft: "60vh",
            paddingRight: "60vh",
            paddingTop: "10vh",
            paddingBottom: "15vh",
            borderRadius: "2vh",
          }}
        >
          <h3>Multimedia University of Kenya</h3>
          <p>Bachelor of Science in Computer Technology</p>
          <p>2020 - Present</p>
          <h3>Kagumo High School</h3>
          <p>2016 - 2019</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
