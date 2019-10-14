import "../css/sign.css";
import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import validator from 'validator';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            error:{
                eremail:null,
                erpassword:null,
                ers:null
            }
        }
    }


    changeHandler = event => {
        //console.log(event.target.value)
        const error = this.state.error

        error[`er${event.target.name}`] = null

        this.setState({ [event.target.name]: event.target.value, ['error']: error });
    };


    formSubmit = event => {
        event.preventDefault()
        let val = this.validationOfForm()
       
        if (val) {
            const { email, password } = this.state
            // this.props.signupUser({ email, password })
        }
    }

    validationOfForm = () => {
        const { email, password, error } = this.state
        let ru = true
        if (!email.length <= 0) {
            if (!validator.isEmail(email)) {
                ru = false
                error.eremail = "email is not valid"
                //console.log(email)
            }
        } else {
            ru = false
            error.eremail = "Feild is required"
        }

        if (password.length <= 0) {
            ru = false
            error.erpassword = "Field is required"

        } else {
            if (!(password.length < 10 && password.length >= 6)) {
                ru = false
                error.erpassword = "Value length sould be min 6 and max 10"
                // console.log("Fields are required")
            }
        }

        this.setState({
            error,
        })
        
        return ru
    }

    render() {
        return (
            <div>
                <Container fluid={true}>
                    <Row>
                        <Col xs={12} sm={12} md={4} lg={4}></Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <Container>
                                <Row>
                                    <Col>
                                        <Form className="signInformCss" noValidate onSubmit={this.formSubmit}>
                                            <div className=" signInCssHead ">
                                                Sign In
                                            </div>
                                            <Form.Text style={this.state.error.ers && { background: '#f8d7da' }} className="signInDFS text-muted">
                                                {this.state.error.ers && this.state.error.ers}
                                            </Form.Text>
                                            <div className="signInformCssf">
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label className="signLabelCss">Email</Form.Label>
                                                    <Form.Control
                                                        className="signInInput"
                                                        type="text"
                                                        onChange={this.changeHandler}
                                                        value={this.state.email}
                                                        name="email"
                                                    />


                                                    <Form.Text style={this.state.error.eremail && { background: '#f8d7da' }} className="signInDF text-muted">
                                                        {this.state.error.eremail && this.state.error.eremail}
                                                    </Form.Text>
                                                </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control
                                                    className="signInInput"
                                                    type="password"
                                                    value={this.state.password}
                                                    name="password"
                                                    onChange={this.changeHandler}
                                                />
                                                <Form.Text style={this.state.error.erpassword && { background: '#f8d7da' }} className="signInDF text-muted">
                                                    {this.state.error.erpassword && this.state.error.erpassword}
                                                </Form.Text>
                                            </Form.Group>
                                                <Form.Group className="text-center">
                                                    <Button className="signInSubmitButton " type="submit">
                                                        Sign In
                                                </Button>

                                                </Form.Group>
                                                <Form.Group className='text-center'>
                                                    <Link to="/signup" className="signLink">Sign Up !</Link>
                                                </Form.Group>
                                            </div>
                                        </Form>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Signin;