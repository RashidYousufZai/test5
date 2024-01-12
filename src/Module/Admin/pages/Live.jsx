import {
    Button,
    Card,
    Col,
    Input,
    Modal,
    Row,
    Select,
    Space,
    Table,
    Tag,
    message,
  } from "antd";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
import { API_URL } from "../../../../API";
  
  const Live = () => {
    const [userData, setUserData] = useState([]);
    const [filterItem, setfilterItem] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [text, setText] = useState("");
    const [link, setLink] = useState("");
    useEffect(() => {
      axios
        .get(`${API_URL}/live`)
        .then((users) => {
          setUserData(users.data.reverse());
          console.log(users);
        })
        .catch((err) => {
          console.log("err=>>>", err);
        });
    }, []);
    const onAdd = () => {
      axios
        .post(
          `${API_URL}/live`,
          {
            link: link,
            title:text
          }
        )
        .then((users) => {
          setUserData(users.data.data);
          message.success("Successfully Added");
          handleCancel()
        })
        .catch((err) => {
          console.log(err);
          message.error("Successfully Not Added");
        });
    };
    const columns = [
      {
        title: "ID",
        dataIndex: "_id",
        key: "_id",
        // render: (_,{_id}) => <a>{_id}</a>,
      },
      {
        title: "Link",
        dataIndex: "link",
        key: "link",
        render: (_,{link}) => <a>{link}</a>,
      },
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
      },
    ];
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
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
          Live Streaming
        </h1>
        <Card style={{ height: "100%" }}>
          <Row gutter={20}>
            <Col span={4}>
              <Space style={{ marginLeft: 10 }}>
                <Button
                  type="primary"
                  style={{ backgroundColor: "green" }}
                  onClick={showModal}
                >
                  Add
                </Button>
              </Space>
            </Col>
            <Col span={24} style={{ marginTop: 20 }}>
              <Table columns={columns} dataSource={userData} />
            </Col>
          </Row>
        </Card>
        <Modal
          title="Upload Link"
          open={isModalOpen}
          onOk={onAdd}
          onCancel={handleCancel}
        >
          <Row gutter={12}>
            <Col span={12}>
            <Input
          value={text}
            style={{
              width: "100%",
              height: 50,
            }}
            placeholder="Enter Title"
            onChange={(e) => setText(e.target.value)}
          /></Col>
            <Col span={12}>
            <Input
          value={link}
            style={{
              width: "100%",
              height: 50,
            }}
            placeholder="Enter Youtube Live Link"
            onChange={(e) => setLink(e.target.value)}
          /></Col>
          </Row>
        </Modal>
      </>
    );
  };
  
  export default Live;
  