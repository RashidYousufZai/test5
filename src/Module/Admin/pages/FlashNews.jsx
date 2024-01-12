import { Button, Card, Col, Input, Row, Table, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../../../API";
import { Tag } from "antd";

const FlashNews = () => {
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`${API_URL}/flashnews`)
      .then((users) => {
        setUserData(users.data.reverse());
      })
      .catch((err) => {
        console.log("err=>>>", err);
      });
  }, []);

  const onUpload = () => {
    setLoading(true);
    axios
      .post(`${API_URL}/flashnews?id=${localStorage.getItem("id")}`, {
        link: link,
        slugName: title,
        status: "active", // Set the default status to "active" when uploading
      })
      .then((data) => {
        message.success("Your Flash News was successfully Uploaded");
        setLink("");
        setLoading(false);
        setTitle("");
      })
      .catch(() => {
        message.error("Your Flash News was not successfully Uploaded");
        setLoading(false);
      });
  };

  const handleToggleStatus = (newsId, currentStatus) => {
    const newStatus = currentStatus === "active" ? "inactive" : "active";

    axios
      .put(`${API_URL}/flashnews/${newsId}/status`, { status: newStatus })
      .then(() => {
        message.success(`Flash News Status Changed to ${newStatus}`);
        // Refresh the flash news data
        axios.get(`${API_URL}/flashnews`).then((users) => {
          setUserData(users.data.reverse());
        });
      })
      .catch((error) => {
        console.error("Error updating flash news status", error);
        message.error("Failed to update flash news status");
      });
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "slugName",
      key: "slugName",
    },
    {
      title: "Link",
      dataIndex: "link",
      key: "link",
      render: (_, { link }) => (
        <a href={link} target="_blank">
          {link}
        </a>
      ),
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (_, article) => (
        <>
          <Tag color={article.status === "active" ? "cyan" : "red"}>
            {article.status === "active" ? "Active" : "Inactive"}
          </Tag>
          <Button
            type="link"
            onClick={() => handleToggleStatus(article._id, article.status)}
            style={{ padding: "auto 0px", margin: "10px 0px" }}
          >
            Change Status
          </Button>
        </>
      ),
    },
  ];

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
        Flash News
      </h1>
      <Card style={{ width: "100%", height: "100%" }}>
        <Row gutter={6}>
          <Col span={6}>
            <Input
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Col>
          <Col span={6}>
            <Input
              placeholder="Enter Link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </Col>
          <Col span={6}>
            <Button
              style={{ width: "100%" }}
              loading={loading}
              type="primary"
              onClick={onUpload}
            >
              Upload{" "}
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ marginTop: 20 }}>
            <Table columns={columns} dataSource={userData} />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default FlashNews;
