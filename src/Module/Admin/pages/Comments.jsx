import { Card, Col, Row } from "antd";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { API_URL } from "../../../../API";

const Comments = ({ isAdmin }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${API_URL}/comment`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <>
      <h1
        style={{
          color: "rgba(0,0,0,0.8)",
          marginBottom: 10,
          textAlign: "left",
          fontFamily: "Poppins",
        }}
      >
        Comments
      </h1>
      <Card style={{ width: "100%", height: "100%", minHeight: "80vh" }}>
        <Row gutter={6}>
          {data &&
            data.length > 0 &&
            data.map((item) => {
              return (
                <Col span={6}>
                  <Card>
                    <div>
                      <span style={{ fontWeight: "700" }}>Name </span>:
                      {item.name}
                      <br />
                      <span style={{ fontWeight: "700" }}>email </span>:
                      {item.email}
                      <br />
                      <span style={{ fontWeight: "700" }}>Comment </span>:
                      {item.message}
                      <br />
                      <span style={{ fontWeight: "700" }}>postId </span>:
                      {item.postId}
                    </div>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Card>
    </>
  );
};

export default Comments;
