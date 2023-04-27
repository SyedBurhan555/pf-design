import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Practice = () => {
  const [data, setData] = useState([]);
  const api = "https://fakestoreapi.com/products";

  const getData = async () => {
    try {
      const res = await fetch(api);
      const json = await res.json();
      setData(json);
      // console.log(data[1]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id} style={{border:'1px solid black',width:400,height:500,textAlign:"center"}}>
            <img src={item.image} style={{ height: 200, width: 200 }} alt="" />
            <h1 style={{margin:'0'}}>{item.title}</h1>
            <p>{item.category}</p>
            <p
              style={{
                width: "400px",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {item.description}
            </p>
            <h1>{item.price}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Practice;
