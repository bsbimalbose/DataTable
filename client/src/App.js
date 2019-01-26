import React, { Component } from "react";
import axios from "axios";
import DataTable from "./components/DataTable";
import "./App.css";

class App extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    axios.get("http://localhost:5000/getData").then(resp => {
      this.setState({ data: resp.data });
    });
  }
  render() {
    const cols = [
      { header: "ID", name: "id" },
      { header: "Name", name: "name" },
      { header: "Email", name: "email" }
    ];

    return (
      <div className="container App">
        <DataTable
          keyProp={"id"}
          columns={cols}
          data={this.state.data}
          itemsPerPage={5}
        />
      </div>
    );
  }
}

export default App;
