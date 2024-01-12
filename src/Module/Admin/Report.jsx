import { Card, Col, Row } from "antd";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { API_URL } from "../../../API";

const Report = ({ isAdmin }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${API_URL}/report`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <Card style={{ width: "100%", height: "100%", minHeight: "80vh" }}>
      <Row gutter={6}>
        {data &&
          data.length > 0 &&
          data.map((item) => {
            return (
              <Col span={6}>
                <Card>
                  <div>
                    <span style={{ fontWeight: "700" }}>Qusetion</span>:
                    {item.question}
                  </div>
                  <div>
                    <span style={{ fontWeight: "700" }}>Answer</span>:
                    {item?.answer}
                  </div>
                </Card>
              </Col>
            );
          })}
      </Row>
    </Card>
  );
};

export default Report;
