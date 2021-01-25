import * as React from "react";
import MenuStore from "../../components/main-menu/store";
import { inject, observer } from "mobx-react";
import NewRouterStore from "../../mobx/router.store";
import { Button, Form } from "react-bootstrap";
import HomeStore from "./store";

interface Props {
  mainMenu: MenuStore;
  router: NewRouterStore;
  home: HomeStore;
}

@inject("mainMenu", "router", "home")
@observer
export default class Home extends React.Component<Props> {
  redirect = (url: string) => {
    const { setMenuActive } = this.props.mainMenu;
    setMenuActive(url);

    const { history } = this.props.router;
    history.push(`${process.env.PUBLIC_URL}/${url}`);
  };

  render() {    

    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>      
    );
  }
}
