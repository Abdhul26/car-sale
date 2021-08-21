
// eslint-disable-next-line
import * as dataFormat from 'pages/CRUD/Openning Value/table/Openning ValueDataFormatters';


import actions from 'actions/Openning Value/Openning ValueListActions';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { uniqueId } from 'lodash';


  import {
  Form,
  FormGroup,
  Input,
  Label,
  Col,
  Row,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import {
  BootstrapTable,
  TableHeaderColumn,
} from 'react-bootstrap-table';

import Widget from 'components/Widget';

class Openning ValueTable extends Component {
  constructor(props) {
  super(props);
    this.state = {
    modalOpen: false,
    idToDelete: null,
    filters: [
      {label: 'Concatenate', title: 'Concatenate'},{label: 'Speed (mm)', title: 'speed (mm)'},{label: 'OverHeas *** mm', title: 'OverHeas *** mm'},{label: 'Pit depth', title: 'Pit depth'},{label: 'Opennning Height(mm)&Clear Ceiling Height', title: 'Opennning Height(mm)&Clear Ceiling Height', number: 'true'},
    ],
    filterItems: [],
  }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.addFilter = this.addFilter.bind(this);
    this.deleteFilter = this.deleteFilter.bind(this);
  }

  handleChange = (id) => (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    const index = this.state.filterItems.findIndex(item => item.id === id)
    let obj = this.state.filterItems[index]
    obj.fields[name] = value;
    obj.id = id

    this.setState({
      filterItems: this.state.filterItems
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let request = '?';
    this.state.filterItems.forEach(item => {
      this.state.filters[this.state.filters.map(filter => filter.title).indexOf(item.fields.selectedField)].hasOwnProperty('number')
        ? request += `${item.fields.selectedField}Range=${item.fields.filterValueFrom}&${item.fields.selectedField}Range=${item.fields.filterValueTo}&`
        : request += `${item.fields.selectedField}=${item.fields.filterValue}&`
    })
    this.props.dispatch(actions.doFilter(request));
  };

  handleReset = () => {
    this.setState({
      filterItems: []
    })
    const { dispatch } = this.props;
    dispatch(actions.doFetch({}));
  }

  addFilter = () => {
    let newItem = {
      id: uniqueId(),
      fields: {
        filterValue: "",
        filterValueFrom: "",
        filterValueTo: "",
      }
    }
    newItem.fields.selectedField = this.state.filters[0].title;
    this.setState({
      filterItems: [...this.state.filterItems, newItem]
    })
  }

  deleteFilter = (value) => (e) => {
    e.preventDefault();
    const newItems = this.state.filterItems.filter(item => item.id !== value)
    this.setState({
      filterItems: newItems
    })
  }

  handleDelete() {
    const id = this.props.idToDelete;
    this.props.dispatch(actions.doDelete(id));
  };

  openModal(cell) {
    const id = cell;
    this.props.dispatch(actions.doOpenConfirm(id));
  }

  closeModal() {
    this.props.dispatch(actions.doCloseConfirm());
  }

  actionFormatter(cell) {
    return (
        <div>
{ null && <Button
          color="default"
          size="xs"
          onClick={() => this.props.dispatch(push(`/admin/Openning Value/${cell}`))}
        >
      View
      </Button>
}
        <Button
          color="info"
          size="xs"
          onClick={() => this.props.dispatch(push(`/admin/Openning Value/${cell}/edit`))}
        >
        Edit
      </Button>
      &nbsp;&nbsp;
      <Button
          color="danger"
          size="xs"
          onClick={() => this.openModal(cell)}
        >
        Delete
        </Button>
        </div>
     )
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.doFetch({}));
  }

  renderSizePerPageDropDown = (props) => {
    const limits = [];
    props.sizePerPageList.forEach((limit) => {
      limits.push(<DropdownItem key={limit} onClick={() => props.changeSizePerPage(limit)}>{ limit }</DropdownItem>);
    });

    return (
      <Dropdown isOpen={props.open} toggle={props.toggleDropDown}>
        <DropdownToggle color="default" caret>
          { props.currSizePerPage }
        </DropdownToggle>
        <DropdownMenu>
          { limits }
        </DropdownMenu>
      </Dropdown>
    );
  };

  rowStyleFormat = (row, rowIdx) => {
    return { backgroundColor: rowIdx % 2 === 0 ? '#eaeaea' : '#dedede' };
  }

  render() {
    const {
      rows, dispatch
    } = this.props;

    const options = {
      sizePerPage: 10,
      paginationSize: 5,
      sizePerPageDropDown: this.renderSizePerPageDropDown,
      onRowClick: function(row){
        return dispatch(push(`/admin/Openning Value/${row.id}/edit`))
      },
    };

    return (
      <div>
        <Widget title={"Openning Value"} collapse close>
          <Link to="/admin/Openning Value/new">
            <button
              className="btn btn-primary"
              type="button"
            >
              New
            </button>
          </Link>
          <button
            className="btn btn-primary ml-3"
            type="button"
            onClick={this.addFilter}
          >
            Add Filter
          </button>
          <Form onSubmit={this.handleSubmit}>
            { this.state.filterItems.map(item => (
            <Row form className="mt-3" key={item.id}>
              <Col xs={4} md={4} lg={3}>
                <FormGroup>
                  <Label for="selectedField">Field</Label>
                  <Input
                    type="select"
                    name="selectedField"
                    id="selectedField"
                    defaultValue={item.fields.selectedField}
                    onChange={this.handleChange(item.id)}
                  >
                    {this.state.filters.map(selectOption => <option key={selectOption.title} value={`${selectOption.title}`}>{selectOption.label}</option>)}
                  </Input>
                </FormGroup>
              </Col>
              <Col xs={4} md={4} lg={3} className="ml-0 ml-md-4">
                {this.state.filters[this.state.filters.map(filter => filter.title).indexOf(item.fields.selectedField)].hasOwnProperty('number')
                ?
                (<Row>
                  <Col>
                    <FormGroup>
                      <Label for="filterValueFrom">From</Label>
                      <Input
                        type="text"
                        defaultValue={item.fields.filterValueFrom}
                        name="filterValueFrom"
                        id="filterValueFrom"
                        onChange={this.handleChange(item.id)}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                  <FormGroup>
                    <Label for="filterValueTo">To</Label>
                    <Input
                      type="text"
                      defaultValue={item.fields.filterValueTo}
                      name="filterValueTo"
                      id="filterValueTo"
                      onChange={this.handleChange(item.id)}
                    />
                  </FormGroup>
                  </Col>
                </Row>)
                :
                (<>
                  <FormGroup>
                    <Label for="filterValue">Contains</Label>
                    <Input
                      type="text"
                      defaultValue={item.fields.filterValue}
                      name="filterValue"
                      id="filterValue"
                      onChange={this.handleChange(item.id)}
                    />
                  </FormGroup>
                </>)}
                </Col>
                <Col xs={3} md={3} lg={2} className="align-self-center">
                  <button className="btn btn-danger ml-3 mt-2" onClick={this.deleteFilter(item.id)}>
                    Delete
                  </button>
                </Col>
              </Row>))
            }
            { this.state.filterItems.length > 0 && (
              <Row>
                <Col xs={12} lg={3} className="align-self-end mb-3">
                  <button type="submit" className="btn btn-primary" value="Submit">
                    Apply
                  </button>
                  <button type="reset" className="btn btn-danger ml-3" value="Reset" onClick={this.handleReset}>
                    Clear
                  </button>
                </Col>
              </Row>
            )}
          </Form>

          <BootstrapTable bordered={false} data={rows} version="4" pagination options={options} trStyle={this.rowStyleFormat} search tableContainerClass={`table-responsive table-striped table-hover`}>
            
              <TableHeaderColumn dataField="Concatenate" dataSort
                
              >
                <span className="fs-sm">Concatenate</span>
              </TableHeaderColumn>
            
              <TableHeaderColumn dataField="Opennning Height(mm)&Clear Ceiling Height" dataSort
                
              >
                <span className="fs-sm">Opennning Height(mm)&Clear Ceiling Height</span>
              </TableHeaderColumn>
            
              <TableHeaderColumn dataField="speed (mm)" dataSort
                
              >
                <span className="fs-sm">Speed (mm)</span>
              </TableHeaderColumn>
            
              <TableHeaderColumn dataField="OverHeas *** mm" dataSort
                
              >
                <span className="fs-sm">OverHeas *** mm</span>
              </TableHeaderColumn>
            
              <TableHeaderColumn dataField="Pit depth" dataSort
                
              >
                <span className="fs-sm">Pit depth</span>
              </TableHeaderColumn>
            
            <TableHeaderColumn isKey dataField="id" dataFormat={this.actionFormatter.bind(this)}>
              <span className="fs-sm">Actions</span>
            </TableHeaderColumn>
          </BootstrapTable>
        </Widget>

        <Modal size="sm" isOpen={this.props.modalOpen} toggle={() => this.closeModal()}>
          <ModalHeader toggle={() => this.closeModal()}>Confirm delete</ModalHeader>
          <ModalBody className="bg-white">
            Are you sure you want to delete this item?
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.closeModal()}>Cancel</Button>
            <Button color="primary" onClick={() => this.handleDelete()}>Delete</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    loading: store.Openning Value.list.loading,
    rows: store.Openning Value.list.rows,
    modalOpen: store.Openning Value.list.modalOpen,
    idToDelete: store.Openning Value.list.idToDelete,
  };
}

export default connect(mapStateToProps)(Openning ValueTable);
