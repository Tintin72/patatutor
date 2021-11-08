import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Moment from "react-moment";

const Assignment = (props) => (
  <tr>
    <td> {props.assignments.name} </td>
  </tr>
);
class AllAssignment extends Component {
  constructor(props) {
    super(props);
    this.state = { assignments: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/api/return-assignments/all")
      .then((response) => {
        this.setState({ assignments: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  componentDidUpdate() {
    axios
      .get("http://localhost:4000/api/return-assignments/all")
      .then((response) => {
        this.setState({ assignments: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  assignmentList() {
    return this.state.assignments.map(function (currentAssignment, i) {
      return <Assignment assignments={currentAssignment} key={i} />;
    });
  }
  render() {
    return (
      <div>
        <h3> Assignments </h3>{" "}
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th> Assignment Name </th>
            </tr>{" "}
          </thead>{" "}
          <tbody> {this.assignmentList()} </tbody>{" "}
        </table>{" "}
      </div>
    );
  }
}
export default AllAssignment;
