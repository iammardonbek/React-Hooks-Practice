import React, { useState, useEffect, useRef } from "react";

export default function UseRef() {
  console.log("whole");
  const [name, setName] = useState("");
  const prevName = useRef("");
  useEffect(() => {
    prevName.current = name;
    console.log("useEffect");
  }, [name]);
  return (
    <>
      {" "}
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
    </>
  );
}
