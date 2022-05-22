import React from "react";

export function Note() {
  const title = "This is the note Title";
  const content = "This is the note content";

  return (
    <div className="note">
      <h1 className="note h1">{title}</h1>
      <p className="note p">{content}</p>
    </div>
  );
}
