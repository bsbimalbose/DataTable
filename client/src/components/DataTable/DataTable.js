import React, { Component } from "react";
import TBody from "./TBody";
import THead from "./THead";
import Pagination from "./Pagination";

export default class DataTable extends Component {
  state = {
    currentPage: 1,
    data: [],
    filteredData: [],
    displayData: [],
    columns: []
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.columns !== prevState.columns ||
      nextProps.data !== prevState.data
    ) {
      return {
        columns: nextProps.columns,
        data: nextProps.data,
        displayData: nextProps.data,
        filteredData: nextProps.data
      };
    }
    return {};
  }

  handlePageChange = page => {
    this.setState(prevState => {
      const displayData = prevState.filteredData.slice(
        this.props.itemsPerPage * (page - 1),
        this.props.itemsPerPage * page
      );
      return { displayData, currentPage: page };
    });
  };

  filterData = (prop, keyword) => {
    this.setState(
      prevState => {
        const filteredData = prevState.data.filter(item =>
          item[prop]
            .toString()
            .toLowerCase()
            .includes(keyword.toString().toLowerCase())
        );
        return { filteredData };
      },
      () => this.handlePageChange(1)
    );
  };

  sortData = (prop, sortMethord) => {
    this.setState(
      prevState => {
        const filteredData = [...prevState.filteredData];
        filteredData.sort((a, b) => {
          if (a[prop] < b[prop]) return sortMethord === "asc" ? -1 : 1;
          if (a[prop] > b[prop]) return sortMethord === "asc" ? 1 : -1;
          return 0;
        });
        return { filteredData };
      },
      () => this.handlePageChange(1)
    );
  };

  render() {
    const { columns, currentPage, displayData, filteredData } = this.state;
    const { itemsPerPage, keyProp } = this.props;
    return (
      <div>
        <table className="table table-hover table-sm">
          <THead
            columns={columns}
            handleSort={this.sortData}
            handleFilter={this.filterData}
          />
          <TBody
            columns={columns}
            data={displayData}
            itemsPerPage={itemsPerPage}
            keyProp={keyProp}
          />
        </table>
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={filteredData.length}
          handlePageChange={this.handlePageChange}
        />
      </div>
    );
  }
}
