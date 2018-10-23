// import React, { Component } from 'react';
// import { Card, CardText, CardBody,
//   CardTitle } from 'reactstrap';
// import { Collapse, Button} from 'reactstrap';
// import "./App.css";
// import 'bootstrap/dist/css/bootstrap.css'
// import $ from 'jquery';
// window.$ = $;

// // ... other imports here

// // const $ = window.jQuery

// // ... other declarations here

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.toggleNavbar = this.toggleNavbar.bind(this);
//     this.state = {
//       collapsed: true };
//     this.toggle = this.toggle.bind(this);
//     this.state = { collapse: false };
//   }
//   toggleNavbar() {
//     this.setState({
//       collapsed: !this.state.collapsed
//     });
//   }

//   toggle() {
//     this.setState({ collapse: !this.state.collapse });
//   }

//   componentDidMount() {
//     // Use your jQuery as usual!
//     $('#myDiv').css('color', '#f22')
//     // Or, if you do not want to declare the global variable $ above:
//     window.$('#myDiv').css('color', '#f22')
//   }
//   render() {
//     return (
//       <div>
//       <div className="box">
//       <div>
//       <Card>
//         <CardBody>
//           <CardTitle>Title</CardTitle>
//           <CardText>Content</CardText>
//           <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Detail</Button>
//           <Collapse className="coll1" isOpen={this.state.collapse}>
//           <Card>
//             <CardBody>
//             Detail Content
//             </CardBody>
//           </Card>
//         </Collapse>
//         </CardBody>
//       </Card>
//     </div>
//     <div>
//     <Card>
//       <CardBody>
//         <CardTitle>Title</CardTitle>
//         <CardText>Content</CardText>
//         <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Detail</Button>
//         <Collapse isOpen={this.state.collapse}>
//         <Card>
//           <CardBody>
//           Detail Content
//           </CardBody>
//         </Card>
//       </Collapse>
//       </CardBody>
//     </Card>
//   </div>
//   <div>
//   <Card>
//     <CardBody>
//       <CardTitle>Title</CardTitle>
//       <CardText>Content</CardText>
//       <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Detail</Button>
//       <Collapse isOpen={this.state.collapse}>
//       <Card>
//         <CardBody>
//         Detail Content
//         </CardBody>
//       </Card>
//     </Collapse>
//     </CardBody>
//   </Card>
// </div>
// <div>
//   <Card>
//     <CardBody>
//       <CardTitle>Title</CardTitle>
//       <CardText>Content</CardText>
//       <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Detail</Button>
//       <Collapse isOpen={this.state.collapse}>
//       <Card>
//         <CardBody>
//         Detail Content
//         </CardBody>
//       </Card>
//     </Collapse>
//     </CardBody>
//   </Card>
// </div>
// <div>
//   <Card>
//     <CardBody>
//       <CardTitle>Title</CardTitle>
//       <CardText>Content</CardText>
//       <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Detail</Button>
//       <Collapse isOpen={this.state.collapse}>
//       <Card>
//         <CardBody>
//         Detail Content
//         </CardBody>
//       </Card>
//     </Collapse>
//     </CardBody>
//   </Card>
// </div>
// </div>
// </div>
//     )
//   }
// }
// export default App