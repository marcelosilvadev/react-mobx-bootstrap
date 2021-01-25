import * as React from 'react';

interface Props {
  history: any;
}

export default class NotFound extends React.Component<Props> {

  handleBack = () => {
    this.props.history.goBack();
  }


  render() {
    return (
      <div><p>Pagina não Encontrada</p></div>
    );
  }
}
