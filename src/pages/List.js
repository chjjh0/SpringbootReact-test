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
    $(document).ready(function(){
      $.ajax({
          crossOrigin: true,
          url: "http://api.saramin.co.kr/job-search?keywords=react&count=5",
          dataType: "xml",
          success: function(result){
              console.log(result);
              $(result).find('job').each(function(q){
              $('.cardTitle').eq(q).text($(this).find("name").text())
              });
              $(result).find('job').each(function(q){
                $('.cardText').eq(q).text($(this).find("title").text())
              });
              $(result).find('job').each(function(q){
                $('.location').eq(q).text($(this).find("location").text())
              });
              $(result).find('job').each(function(q){
                $('.jobType').eq(q).text($(this).find("job-type").text())
              }); 
              $(result).find('job').each(function(q){
                $('.industry').eq(q).text($(this).find("industry").text())
              });
              $(result).find('job').each(function(q){
                $('.jobCategory').eq(q).text($(this).find("job-category").text())
              });
              $(result).find('job').each(function(q){
                $('.experienceLevel').eq(q).text($(this).find("experience-level").text())
              });
              $(result).find('job').each(function(q){
                $('.requiredEduLevel').eq(q).text($(this).find("required-education-level").text())
              });
              $(result).find('job').each(function(q){
                $('.keyword').eq(q).text($(this).find("keyword").text())
              });
              
          }
      });
});

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
          <CardTitle className="cardTitle"></CardTitle>
          <CardText className="cardText"></CardText>
          <Button color="primary" id="toggler1" style={{ marginBottom: '1rem' }}>
          Toggle
          </Button>
          <UncontrolledCollapse toggler="#toggler1">
          <Card>
            <CardBody>
              <div className="location"></div>
              <div className="jobType"></div>
              <div className="industry"></div>
              <div className="jobCategory"></div>
              <div className="experienceLevel"></div>
              <div className="requiredEduLevel"></div>
              <div className="keyword"></div>
            </CardBody>
          </Card>
          </UncontrolledCollapse>
        </CardBody>
      </Card>
    </div>
    <div>
      <Card>
        <CardBody>
          <CardTitle className="cardTitle"></CardTitle>
          <CardText className="cardText"></CardText>
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
          <CardTitle className="cardTitle"></CardTitle>
          <CardText className="cardText"></CardText>
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
          <CardTitle className="cardTitle"></CardTitle>
          <CardText className="cardText"></CardText>
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
          <CardTitle className="cardTitle"></CardTitle>
          <CardText className="cardText"></CardText>
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