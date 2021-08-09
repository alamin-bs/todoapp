import "./App.css";
import { Row, Col } from "antd";

//components
import AddTask from "./components/TaskList";
import PieChart from "./components/PieChart";
import XYChart from "./components/XYChart";

function App() {
  return (
    <div className="App">
      <Row style={{ height: "100vh" }}>
        <Col span={10}>
          <AddTask />
        </Col>
        <Col span={14}>
          <Row className=" chart-div">
            <PieChart />
          </Row>
          <Row className=" chart-div">
            <XYChart />
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
