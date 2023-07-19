import React, { useRef, useState } from "react";
import Mapcomment from "./Mapcomment";

export default function CommentSec({ id, data }) {
  const replyRef = useRef("");
  const [replycomment, setReplycomment] = useState([]);
  function handle(i) {
    setReplycomment([...replycomment, { name: replyRef.current.value }]);
    data[i].comment = [...replycomment];
    data[i].time = new Date().getTime();
  }

  return (
    <div className="commentmap">
      <input type="text" ref={replyRef} />
      <button
        onClick={() => {
          handle(id);
        }}
      >
        send
      </button>
      {data[id]?.comment?.length > 0 ? (
        <Mapcomment data={data[id].comment} />
      ) : (
        ""
      )}
    </div>
  );
}
