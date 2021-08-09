import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//service
import { taskAdded, taskDone, taskRemoved } from "../store/tasks";
import RootState from "./interfaces/RootState";

//design component
import { Row, Input, Button, Divider, List, message, Modal, Form } from "antd";
import {
  CheckOutlined,
  ExclamationCircleOutlined,
  DeleteFilled,
} from "@ant-design/icons";
import HourGlassIcon from "../svg/HourGlassIcon";
import { useFocus } from "./common/useFocus";
function TaskList() {
  const dispatch = useDispatch();
  const [task, setTask] = useState<string>("");
  const [pendingTaskId, setPendingTaskId] = useState<number>();
  const [taskDuration, setTaskDuration] = useState<number>();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const taskList = useSelector((state: RootState) => state.entities.tasks);
  const [inputRef, setInputFocus] = useFocus();

  //modal functions
  const { confirm } = Modal;
  const isShowModal = useCallback(
    () => setIsModalVisible(!isModalVisible),
    [isModalVisible]
  );

  const handleOk = () => {
    if (!taskDuration) {
      message.error("Please insert task completion time");
      return;
    }
    dispatch(taskDone({ id: pendingTaskId, taskDuration }));
    setTaskDuration(0);

    setPendingTaskId(0);
    isShowModal();
  };

  const handleCancel = () => isShowModal();

  //list functions
  function handleDone(id: number) {
    isShowModal();
    setPendingTaskId(id);
  }

  const handleDelete = (id: number) => {
    confirm({
      title: "Are you sure delete this task?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        dispatch(taskRemoved({ id }));
        message.info("Task remove successfully");
      },
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) =>
    name === "task"
      ? setTask(e.target.value)
      : setTaskDuration(parseFloat(e.target.value));

  const handleSubmit = (
    e:
      | React.MouseEvent<HTMLElement, MouseEvent>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    dispatch(taskAdded({ name: task }));
    setTask("");
    message.success("New Task Added!");
  };

  useEffect(() => {
    setInputFocus();
  });

  return (
    <div style={{ padding: "15px 15px " }}>
      <Form layout="inline">
        <Form.Item style={{ width: "75%" }}>
          <Input
            placeholder="add a task"
            type="text"
            value={task}
            onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
            onChange={(e) => handleChange(e, "task")}
          />
        </Form.Item>

        <Form.Item>
          <Button onClick={handleSubmit} disabled={!task}>
            ADD
          </Button>
        </Form.Item>
      </Form>

      <Divider orientation="left">Tasks</Divider>
      <List
        bordered
        dataSource={taskList!}
        renderItem={(item) => (
          <List.Item>
            <Row>
              <span style={{ float: "left" }}>
                {!item.isDone ? (
                  <HourGlassIcon style={{ color: "	#ffcc00" }} />
                ) : (
                  <CheckOutlined style={{ color: "green" }} />
                )}
                {"  "}
                {item.name}
              </span>
              <span style={{ marginLeft: "auto" }}>
                {!item.isDone && (
                  <Button
                    style={{
                      backgroundColor: "#22bb33",
                      color: "white",
                    }}
                    icon={<CheckOutlined />}
                    onClick={() => handleDone(item.id)}
                  >
                    Mark as Done
                  </Button>
                )}{" "}
                <Button
                  icon={<DeleteFilled />}
                  danger={true}
                  onClick={() => handleDelete(item.id)}
                />
              </span>
            </Row>{" "}
          </List.Item>
        )}
      />

      <Modal
        title="Completion Time"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          ref={inputRef}
          type="number"
          placeholder="0.00"
          value={taskDuration}
          onChange={(e) => handleChange(e, "taskDuration")}
          onKeyPress={(e) => e.key === "Enter" && handleOk()}
        />
      </Modal>
    </div>
  );
}

export default TaskList;
