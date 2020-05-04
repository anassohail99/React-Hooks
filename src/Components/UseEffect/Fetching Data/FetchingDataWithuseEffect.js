import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchingDataWithuseEffect = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idButton, setIdButton] = useState(1);

  const getReq = () => {
    setIdButton(idButton);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idButton}`)
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((err) => console.log(err));
  }, [idButton]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={getReq}>GET</button>
      <div>{post.title}</div>
    </div>
  );
};

export default FetchingDataWithuseEffect;
