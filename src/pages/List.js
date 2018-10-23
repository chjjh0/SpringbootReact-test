import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Card, CardText, CardBody,
  CardTitle } from 'reactstrap';
import { Button, UncontrolledCollapse} from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import "../App.css";
import 'bootstrap/dist/css/bootstrap.css'
import $ from 'jquery';
window.$ = $;

// ... other imports here

// const $ = window.jQuery

// ... other declarations here

class List extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  componentDidMount() {
    // Use your jQuery as usual!
    $('#myDiv').css('color', '#f22')
    // Or, if you do not want to declare the global variable $ above:
    window.$('#myDiv').css('color', '#f22')
  }

  render() {
    let count = 1;

    return (

      <div className="listbox">
      <div>
      <Card>
        <CardBody>
          <CardTitle>{count++}</CardTitle>
          <CardText>Content</CardText>
          <Button color="primary" id="toggler1" style={{ marginBottom: '1rem' }}>
          Toggle
          </Button>
          <UncontrolledCollapse toggler="#toggler1">
          <Card>
            <CardBody>
            Detail Content
            </CardBody>
          </Card>
          </UncontrolledCollapse>
        </CardBody>
      </Card>
    </div>
    <div>
      <Card>
        <CardBody>
          <CardTitle>{count++}</CardTitle>
          <CardText>Content</CardText>
          <Button color="primary" id="toggler2" style={{ marginBottom: '1rem' }}>
          Toggle
          </Button>
          <UncontrolledCollapse toggler="#toggler2">
          <Card>
            <CardBody>
            Detail Content
            </CardBody>
          </Card>
          </UncontrolledCollapse>
        </CardBody>
      </Card>
    </div>
    <div>
      <Card>
        <CardBody>
          <CardTitle>{count++}</CardTitle>
          <CardText>Content</CardText>
          <Button color="primary" id="toggler3" style={{ marginBottom: '1rem' }}>
          Toggle
          </Button>
          <UncontrolledCollapse toggler="#toggler3">
          <Card>
            <CardBody>
            Detail Content
            </CardBody>
          </Card>
          </UncontrolledCollapse>
        </CardBody>
      </Card>
    </div>
    <div>
      <Card>
        <CardBody>
          <CardTitle>{count++}</CardTitle>
          <CardText>Content</CardText>
          <Button color="primary" id="toggler4" style={{ marginBottom: '1rem' }}>
          Toggle
          </Button>
          <UncontrolledCollapse toggler="#toggler4">
          <Card>
            <CardBody>
            Detail Content
            </CardBody>
          </Card>
          </UncontrolledCollapse>
        </CardBody>
      </Card>
    </div>
    <div>
      <Card>
        <CardBody>
          <CardTitle>{count++}</CardTitle>
          <CardText>Content</CardText>
          <Button color="primary" id="toggler5" style={{ marginBottom: '1rem' }}>
          toggle
          </Button>
          <UncontrolledCollapse toggler="#toggler5">
          <Card>
            <CardBody>
            Detail Content
            </CardBody>
          </Card>
          </UncontrolledCollapse>
        </CardBody>
      </Card>
    </div>
    <div><p> </p>
    </div>
    {/* PageNation */}
    <div className="pagenation">
    <Pagination aria-label="Page navigation example">
        <PaginationItem disabled>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>
    </div>
{/* listbox end */}
</div>

    )

  }
}
ReactDOM.render(<List />, document.getElementById('root'))
export default List