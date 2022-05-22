import React from "react";

export function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer p">Copyright &copy; {date}</p>
    </footer>
  );
}
