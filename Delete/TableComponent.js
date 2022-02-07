import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Table, Container, Button, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faEdit,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import swal from 'sweetalert';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { deleteUser } from "../actions/userAction";
const { SearchBar } = Search;

const handleClick = (dispatch, id) => {
  
  swal({
    title: "Apakah Anda yakin akan menghapus data ini ?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      dispatch(deleteUser(id))
      swal("Data User Sukses dihapus", {
        icon: "success",
      });
    } else {
      swal("Data gagal dihapus");
    }
  });
}

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];


const mapStateToProps = (state) => {
  return{
    getUsersList: state.users.getUsersList,
    errorUsersList: state.users.errorUsersList
  }
}

export const TableComponent = (props) => {
  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
    },
    {
      dataField: "nama",
      text: "Name",
      sort: true,
    },
    {
      dataField: "alamat",
      text: "Alamat",
      sort: true,
    },
    {
      dataField: "umur",
      text: "Umur",
      sort: true,
    },
    {
      dataField: "email",
      text: "Email",
      sort: true,
    },
    {
      dataField: "action",
      text: "Aksi",
      formatter: (rowcContent, row) => {
        return (
          <div>
            <Link to={"detail/" + row.id}>
              <Button color="dark" className="mr-2">
                <FontAwesomeIcon icon={faInfo} /> Detail
              </Button>
            </Link>
  
            <Link to={"edit/" + row.id}>
            <Button color="dark" className="mr-2">
              <FontAwesomeIcon icon={faEdit} /> edit
            </Button>
            </Link>
  
            
            <Button color="dark" className="mr-2"  onClick={() => handleClick(props.dispatch, row.id)}>
              <FontAwesomeIcon icon={faTrash} /> Delete
            </Button>
            
          </div>

        );
      },
    },
  ];
  
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Link to="/create">
              <Button color="dark" className="mr-2">
                <FontAwesomeIcon icon={faUserPlus} /> Create User
              </Button>
            </Link>
          </Col>
          <Col></Col>
        </Row>
          {props.getUsersList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.getUsersList}
          columns={columns}
          defaultSorted={defaultSorted}
          pagination={paginationFactory()}
          search
          //striped
          //hover
          //condensed
        >
          {(props) => (
            <div>
              <div className="float-end">
                <SearchBar {...props.searchProps} placeholder="Search.." />
              </div>
              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
        ) :null}
      </Container>
    </div>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
