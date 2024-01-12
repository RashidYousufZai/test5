// Poll.js

import {
  Button,
  Card,
  Col,
  Input,
  Modal,
  Row,
  Space,
  Table,
  message,
} from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../../../API";

const Poll = () => {
  const [userData, setUserData] = useState([]);
  const [filterItem, setFilterItem] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([{ text: "" }, { text: "" }]);

  console.log(userData);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
      render: (_, { _id }) => <a>{_id}</a>,
    },
    {
      title: "Question",
      dataIndex: "question",
      key: "question",
    },
    {
      title: "Options",
      dataIndex: "options",
      key: "options",
      render: (_, record) => (
        <ul>
          {record.options.map((option, index) => (
            <li key={index}>
              {option.optionText} - Votes: {option.votes}, Percentage:{" "}
              {option.percentage.toFixed(0)}%
            </li>
          ))}
        </ul>
      ),
    },
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const createPoll = async () => {
    try {
      const response = await axios.post(`${API_URL}/polls`, {
        question,
        options: options.map((option) => ({
          optionText: option.text,
          votes: 0, // Assuming you want to initialize votes to 0
          percentage: 0, // Assuming you want to initialize percentage to 0
        })),
      });
      console.log(response);

      // rest of the code
    } catch (error) {
      // error handling
    }
  };

  const getAllPolls = async () => {
    try {
      const response = await axios.get(`${API_URL}/polls`);
      const pollsData = response.data;
      setUserData(pollsData);
    } catch (error) {
      console.error("Error fetching polls:", error);
      message.error("Failed to fetch polls. Please try again.");
    }
  };

  useEffect(() => {
    getAllPolls();
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
        Poll
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
        title="Upload Poll"
        visible={isModalOpen}
        onOk={createPoll}
        onCancel={handleCancel}
      >
        <Input
          value={question}
          style={{ width: 310, height: 50 }}
          placeholder="Enter Your Question"
          onChange={(e) => setQuestion(e.target.value)}
        />
        <br />
        {options.map((option, index) => (
          <Input
            key={index}
            value={option.text}
            style={{ width: 150, height: 50, marginTop: 10, marginRight: 10 }}
            placeholder={`Enter Option ${index + 1}`}
            onChange={(e) => {
              const newOptions = [...options];
              newOptions[index].text = e.target.value;
              setOptions(newOptions);
            }}
          />
        ))}
        <br />
        <a
          onClick={() => setOptions([...options, { text: "" }])}
          href="javascript:void(0)"
        >
          Add New Option
        </a>
      </Modal>
    </>
  );
};

export default Poll;
