import * as React from 'react';
import MenuStore from './store';
import { inject, observer } from 'mobx-react';
import NewRouterStore from '../../mobx/router.store';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

interface Props {
  mainMenu?: MenuStore;
  router?: NewRouterStore;
}

@inject('mainMenu', 'router')
@observer
export default class MainMenu extends React.Component<Props> {

  handleItemClick = (_: any, { name, url }: any) => {

    const { setMenuActive } = this.props.mainMenu!;

    setMenuActive(name);

    const { setHistory } = this.props.router!;

    return setHistory(url);
  };

  logout = () => {    
    console.log("Metodo de sair");  
  }

  render() {

    return (      
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}