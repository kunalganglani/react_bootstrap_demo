import React, { Component } from 'react';
import { Button, Alert } from 'react-bootstrap';

class AlertTry extends React.Component{
    constructor(props, context){
        super(props, context);
        this.handleDismiss=this.handleDismiss.bind(this);
        this.handleShow=this.handleShow.bind(this);
        this.state={show : true};
    }

    handleShow(){
      this.setState({show : true});
    }

    handleDismiss(){
      this.setState({show : false});
    }

    render(){
        if(this.state.show){
            return(
<Alert bsStyle="danger" onDismiss={this.handleDismiss}>
<h4>Oh snap! You got an error!</h4>
            <p>
              Change this and that and try again. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
              Cras mattis consectetur purus sit amet fermentum.
            </p>
            <p>
<Button bsStyle="danger">Take this Action</Button>
<span>or</span>
<Button onClick={this.handleDismiss}>Hide Alert</Button>
</p>
</Alert>

            );
        }
        return <Button onClick={this.handleShow}>Show Alert</Button>;
        return(<h1>hey there</h1>);
    }
}

export default AlertTry;