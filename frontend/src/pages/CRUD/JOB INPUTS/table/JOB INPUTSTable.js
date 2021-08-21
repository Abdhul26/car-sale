
// eslint-disable-next-line
import * as dataFormat from 'pages/CRUD/JOB INPUTS/table/JOB INPUTSDataFormatters';

// eslint-disable-next-line
import * as Application sizeDataFormat from 'pages/CRUD/Application size/table/Application sizeDataFormatters';
// eslint-disable-next-line
import * as Openning ValueDataFormat from 'pages/CRUD/Openning Value/table/Openning ValueDataFormatters';

import actions from 'actions/JOB INPUTS/JOB INPUTSListActions';
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

class JOB INPUTSTable extends Component {
  constructor(props) {
  super(props);
    this.state = {
    modalOpen: false,
    idToDelete: null,
    filters: [
      {label: 'Hoistway Width (mm)', title: 'Hoistway Width (mm)'},{label: 'Hoistway Depth (mm)', title: 'Hoistway Depth (mm)'},{label: 'Glass Door', title: 'Glass Door'},{label: 'Opening Type', title: 'Opening Type'},{label: 'No of Stops', title: 'No of Stops'},{label: 'Minimum Travel  (mm) Based on Stops', title: 'Minimum Travel  (mm) Based on Stops'},{label: 'Maximum Travel (mm)', title: 'Maximum Travel (mm)'},{label: 'Travel (mm)', title: 'Travel (mm)'},{label: 'Minimum Overhead (mm)', title: 'Minimum Overhead (mm)'},{label: 'Minimum Pit Depth (mm)', title: 'Minimum Pit Depth (mm)'},{label: 'Overhead (mm)', title: 'Overhead (mm)'},{label: 'Pit Depth (mm)', title: 'Pit Depth (mm)'},{label: 'Capacity (Person/Kg)', title: 'Capacity (Person/Kg)'},{label: 'Opening Width (mm)', title: 'Opening Width (mm)'},{label: 'Car Inside Width', title: 'Car Inside Width'},{label: 'Car Inside Depth', title: 'Car Inside Depth'},{label: 'Door Offset', title: 'Door Offset'},{label: 'Speed (M/s)', title: 'Speed (M/s)'},{label: '"Opening Height (mm) & Clear Ceiling Height"', title: '"Opening Height (mm) & Clear Ceiling Height"'},
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
          onClick={() => this.props.dispatch(push(`/admin/JOB INPUTS/${cell}`))}
        >
      View
      </Button>
}
        <Button
          color="info"
          size="xs"
          onClick={() => this.props.dispatch(push(`/admin/JOB INPUTS/${cell}/edit`))}
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
        return dispatch(push(`/admin/JOB INPUTS/${row.id}/edit`))
      },
    };

    return (
      <div>
        <Widget title={"JOB INPUTS"} collapse close>
          <Link to="/admin/JOB INPUTS/new">
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
            
              <TableHeaderColumn dataField="Hoistway Width (mm)" dataSort
                
              >
                <span className="fs-sm">Hoistway Width (mm)</span>
              </TableHeaderColumn>
            
              <TableHeaderColumn dataField="Hoistway Depth (mm)" dataSort
                
              >
                <span className="fs-sm">Hoistway Depth (mm)</span>
              </TableHeaderColumn>
            
              <TableHeaderColumn dataField="Glass Door" dataSort
                
              >
                <span className="fs-sm">Glass Door</span>
              </TableHeaderColumn>
            
              <TableHeaderColumn dataField="Capacity (Person/Kg)" dataSort
                
                dataFormat={Application sizeDataFormat.listFormatter}
                
              >
                <span className="fs-sm">Capacity (Person/Kg)</span>
              </TableHeaderColumn>
            
              <TableHeaderColumn dataField="Opening Width (mm)" dataSort
                
                dataFormat={Application sizeDataFormat.listFormatter}
                
              >
                <span className="fs-sm">Opening Width (mm)</span>
              </TableHeaderColumn>
            
              <TableHeaderColumn dataField="Opening Type" dataSort
                
              >
                <span className="fs-sm">Opening Type</span>
              </TableHeaderColumn>
            
              <TableHeaderColumn dataField="Car Inside Width" dataSort
                
                dataFormat={Application sizeDataFormat.listFormatter}
                
              >
                <span className="fs-sm">Car Inside Width</span>
              </TableHeaderColumn>
            
              <TableHeaderColumn dataField="Car Inside Depth" dataSort
                
                dataFormat={Application sizeDataFormat.listFormatter}
                
              >
                <span className="fs-sm">Car Inside Depth</span>
              </TableHeaderColumn>
            
              <TableHeaderColumn dataField="Door Offset" dataSort
                
                dataFormat={Application sizeDataFormat.listFormatter}
                
              >
                <span className="fs-sm">Door Offset</span>
              </TableHeaderColumn>
            
              <TableHeaderColumn dataField="Speed (M/s)" dataSort
                
                dataFormat={Openning ValueDataFormat.listFormatter}
                
              >
                <span className="fs-sm">Speed (M/s)</span>
              </TableHeaderColumn>
            
              <TableHeaderColumn dataField=""Opening Height (mm) & Clear Ceiling Height"" dataSort
                
                dataFormat={Openning ValueDataFormat.listFormatter}
                
              >
                <span className="fs-sm">"Opening Height (mm) & Clear Ceiling Height"</span>
              </TableHeaderColumn>
            
              <TableHeaderColumn dataField="No of Stops" dataSort
                
              >
                <span className="fs-sm">No of Stops</span>
              </TableHeaderColumn>
            
              <TableHeaderColumn dataField="Minimum Travel  (mm) Based on Stops" dataSort
                
              >
                <span className="fs-sm">Minimum Travel  (mm) Based on Stops</span>
              </TableHeaderColumn>
            
              <TableHeaderColumn dataField="Maximum Travel (mm)" dataSort
                
              >
                <span className="fs-sm">Maximum Travel (mm)</span>
              </TableHeaderColumn>
            
              <TableHeaderColumn dataField="Travel (mm)" dataSort
                
              >
                <span className="fs-sm">Travel (mm)</span>
              </TableHeaderColumn>
            
              <TableHeaderColumn dataField="Minimum Overhead (mm)" dataSort
                
              >
                <span className="fs-sm">Minimum Overhead (mm)</span>
              </TableHeaderColumn>
            
              <TableHeaderColumn dataField="Minimum Pit Depth (mm)" dataSort
                
              >
                <span className="fs-sm">Minimum Pit Depth (mm)</span>
              </TableHeaderColumn>
            
              <TableHeaderColumn dataField="Overhead (mm)" dataSort
                
              >
                <span className="fs-sm">Overhead (mm)</span>
              </TableHeaderColumn>
            
              <TableHeaderColumn dataField="Pit Depth (mm)" dataSort
                
              >
                <span className="fs-sm">Pit Depth (mm)</span>
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
    loading: store.JOB INPUTS.list.loading,
    rows: store.JOB INPUTS.list.rows,
    modalOpen: store.JOB INPUTS.list.modalOpen,
    idToDelete: store.JOB INPUTS.list.idToDelete,
  };
}

export default connect(mapStateToProps)(JOB INPUTSTable);
