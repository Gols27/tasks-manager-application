import React from "react";
import "./page.css";
import PropTypes from "prop-types";
import { PENDING, COMPLETED } from "../constants";

const Page = props => {
  const {
    toggleStatus,
    item: { id, name, status }
  } = props;
  return (
    <div className={`page ${status === PENDING ? PENDING : COMPLETED}`}>
      <div className="page-content" onClick={() => toggleStatus(id)}>
        <div>{name}</div>
        <div>{status}</div>
      </div>
    </div>
  );
};

Page.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  toggleStatus: PropTypes.bool.isRequired
};

export default Page;
