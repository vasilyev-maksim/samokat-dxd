import * as React from "react";
import { SamokatLogo, SunCityLogo } from "./SVGs";

// const Wrapper = styled.div`
//   display: inline-flex;
//   padding: 9.143px 27.429px;
//   align-items: center;
//   gap: 20.571px;
//   border-radius: 92.571px;
//   background: #fff;
// `;

export const HeaderLogoPill: React.FC = () => {
  return (
    <div className="logo-pill">
      <div style={{ flex: 1.5 }}>
        <SamokatLogo />
      </div>
      <div
        style={{
          background: "rgba(118, 118, 118, 0.8)",
          width: 1,
          height: 34,
          margin: "0 15px",
        }}
      ></div>
      <div style={{ flex: 1 }}>
        <SunCityLogo />
      </div>
    </div>
  );
};
