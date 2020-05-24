import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadTasks, submitNewTask, toggleTask } from "../redux/actions/tasks";
import Page from "../page";
import PropTypes from "prop-types";
import "./home.css";
import { PENDING } from '../constants';

export function Home(props) {
  const { getTasks, addTask, tasks, toggleStatus } = props;

  useEffect(() => {
    getTasks();
  }, []);

  const addNewTask = () => {
    addTask({ status: PENDING });
  };

  return (
    <div className="tasklist">
      <hr />
      {tasks &&
        tasks.map(item => (
          <Page key={item.id} item={item} toggleStatus={toggleStatus} />
        ))}
      <div className="button-container">
        <button className="button" size="lg" onClick={() => addNewTask()}>
          Add Item
        </button>
      </div>
    </div>
  );
}

const mapDispatch = {
  getTasks: loadTasks,
  addTask: submitNewTask,
  toggleStatus: toggleTask
};

const mapState = state => {
  return { tasks: state.tasks };
};

Home.propTypes = {
  getTasks: PropTypes.func.isRequired,
  addTask: PropTypes.shape({
    status: PropTypes.string.isRequired
  }).isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  toggleStatus: PropTypes.bool.isRequired
};

export default connect(
  mapState,
  mapDispatch
)(Home);
