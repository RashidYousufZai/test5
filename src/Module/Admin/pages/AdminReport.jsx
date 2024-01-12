import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, DatePicker, Image, Modal, Row, Space, Table, Tag, message } from "antd";
import axios from "axios";
import { OnEdit as onEditContext } from "../../../Context";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../../API";
import moment from "moment/moment";
import { AntDesignOutlined, FileImageOutlined } from "@ant-design/icons";
import Input from "antd/es/input/Input";
const { TextArea } = Input;
const { RangePicker } = DatePicker;

const AdminReport = () => {
  const [articleData, setArticleData] = useState([]);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const { onEdit, setOnEdit, id, setId } = useContext(onEditContext);
  const [visible, setVisible] = useState("");
  const [sortedArticleData, setSortedArticleData] = useState([]);
  const [category, setcategory] = useState([]);
  const navigation = useNavigate();

  const OnDelete = () => {
    // Add your delete logic here
    console.log("Delete function executed");
  };

  const handleDeleteCancel = () => {
    setIsModalDeleteOpen(false);
  };

  useEffect(() => {
    axios.get(`${API_URL}/article`).then((article) => {
      setArticleData(article.data.reverse());
      console.log(article);
    });
  }, [axios]);

  useEffect(() => {
    axios.get(`${API_URL}/content?type=category`).then((data) => {
      setcategory(data?.data);
    }).catch((err) => {});
  }, []);

  useEffect(() => {
    const initialSerialNumbers = articleData.map((_, index) => index + 1);
    setSortedArticleData(initialSerialNumbers);
  }, [articleData]);

  const handleSort = (column) => {
    // Sorting logic here
    // ...
  };

  const handleArticleClick = () => {

  }

  console.log(handleArticleClick)
  const columns = [
    {
      title: "News Id",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, { type, image, _id }) => {
        const isImage = type === "img";
        return (
          <>
            {isImage ? (
              <Image
                width={100}
                style={{
                  width: "100px",
                  height: "100px",
                }}
                src={image || ""}
                preview={{
                  visible: _id === visible,
                  src: image || "",
                  onVisibleChange: (value) => {
                    setVisible(visible ? "" : _id);
                  },
                }}
              />
            ) : (
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FileImageOutlined style={{ fontSize: "24px", color: "#ccc" }} />
              </div>
            )}
          </>
        );
      },
    },
    {
      title: "Headline",
      dataIndex: "title",
      key: "title",
      render: (text, record) => {
        let tt = "";
        if (tt.length < 15) {
          for (let icon = 0; icon < text?.length; icon++) {
            const element = text[icon];
            tt += element;
          }
        }
        return (
          <a
            onClick={() => handleArticleClick(record._id)}
            style={{ cursor: "pointer" }}
          >
            {tt + "..."}
          </a>
        );
      },
    },
  ];

  const dataWithSerialNumbers = sortedArticleData.map((serialNumber) => ({
    ...articleData[serialNumber - 1],
    serialNumber,
  }));

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
        Articles
      </h1>
      <Card>
        <Row gutter={12}>
          <Col span={24}>
            <Table
              scroll={{ x: 1300 }}
              columns={columns}
              dataSource={dataWithSerialNumbers}
              onChange={handleSort}
            />
          </Col>
        </Row>
      </Card>
      <Modal
        title="Delete User"
        visible={isModalDeleteOpen}
        onOk={OnDelete}
        onCancel={handleDeleteCancel}
        okText="Yes"
      >
        <div
          style={{
            margin: "20px 0",
            textAlign: "center",
            color: "red",
            fontSize: 30,
            fontWeight: "700",
          }}
        >
          Are You Sure
        </div>
      </Modal>
    </>
  );
};

export default AdminReport;
