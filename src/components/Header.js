import React from "react";

export default function Header() {
  return (
    <div className="d-flex container">
      <div
        className="d-flex"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <span style={{ paddingLeft: 20 }}>
          <i class="bi bi-facebook"></i>
        </span>
        <span style={{ paddingLeft: 20 }}>
          <i class="bi bi-twitter"></i>
        </span>
        <span style={{ paddingLeft: 20 }}>
          <i class="bi bi-linkedin"></i>
        </span>
        <span style={{ paddingLeft: 20 }}>
          <i class="bi bi-youtube"></i>
        </span>
      </div>
      <div
        className="d-flex"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <span style={{ fontWeight: 500, paddingRight: 20 }}>
          <i class="bi bi-telephone-fill"></i>(606) 638-0123
        </span>
        <span style={{ fontWeight: 500 }}>
          <i class="bi bi-envelope-fill"></i>markgrayson@me.com
        </span>
      </div>
    </div>
  );
}
