import React, { useEffect, useState } from "react";
import CommentSec from "./CommentSec";

export default function Mapcomment({ data, filtervalue }) {
  const [active, setActive] = useState(false);
  const [filterdata, setFilterdata] = useState(data);
  function replyInputactive() {
    setActive(!active);
  }
  useEffect(() => {
    setActive(false);
    let arr = [];
    if (filtervalue === "old") {
      arr = data.sort((a, b) => b.time - a.time);
    } else if (filtervalue === "new") {
      arr = data.sort((a, b) => a.time - b.time);
    }
    data = arr;
  }, [filtervalue]);
  console.log("ma[0", data);
  return (
    <>
      {data.map((el, i) => {
        return (
          <div key={i} className="rootmap">
            <div className="flex">
              comment: {el.name}
              <span onClick={replyInputactive}>reply</span>
            </div>
            {active ? <CommentSec id={i} data={data?.comment || data} /> : ""}
          </div>
        );
      })}
    </>
  );
}
