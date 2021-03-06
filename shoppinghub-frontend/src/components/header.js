import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, Form, NavDropdown, FormControl, Button, NavItem} from 'react-bootstrap'
import {connect} from "react-redux"
import { userToken, userDetails } from "../actions/userActions"


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            signedIn:false,
            token:null,
            user:undefined
        }
    }


    static getDerivedStateFromProps(props, state) {
        props.userToken();
        //console.log(props)
        if (props.token != null ) {
            //props.userDetails(props.token)
            //console.log("in")
            return {
                signedIn:true,
                token: props.token
            }
        }

         return {
                signedIn:props.signedOut,
            }
       

    }

    // UNSAFE_componentWillMount(){
    //     this.props.userToken();

        
    // }
    
    // UNSAFE_componentWillReceiveProps(props){
        
    //     if (props.token != null && this.state.token == null && !props.signedOut) {
    //         //props.userDetails(props.token)
    //         this.setState({
    //             signedIn: true,
    //             token: props.token
    //         })
    //     }else {
    //         this.setState({
    //             signedIn: false,
    //             token: null,
    //         })
    //     }
        

    //     if (props.user._id != null && props.user._id != undefined){
    //         this.setState({
    //             user:props.user
    //         })
    //     }

    //     console.log(this.state)
    // }



    
    
    render() {

        return ( 
            <div>
                <Navbar className="header"  expand="lg" fixed="top" >
                    <Navbar.Brand  ><span className="webName">Shopping Hub</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="navbarrowscss justify-content-end" >
                        <Nav className='navbarsearchform justify-content-end'>
                            <Form className="navsearchform" >
                                <FormControl type="text" placeholder="Product Name" className="navseachinput mr-sm-2" />
                                <Button className="navsearchbutton" >Search</Button>
                            </Form>
                            <div className="headerIconsCss">
                            <div className="iconcss">
                            {
                                        this.state.signedIn  ? <LinkContainer to="/dashboard"  ><NavItem className="profile icon"></NavItem></LinkContainer>
                                            : <LinkContainer to="/signin" ><NavItem className="profile icon"></NavItem></LinkContainer>                  
                            }

                            </div>
                            <LinkContainer to="/cart"  >
                                <NavItem className="iccart">
                                <div className="icon-cart">
                                    <div className="notificacao">0</div>
                                    <div className="cart-line-1" ></div>
                                    <div className="cart-line-2" ></div>
                                    <div className="cart-line-3" ></div>
                                    <div className="cart-wheel" ></div>
                                </div>

                                </NavItem>
                            </LinkContainer>
                            </div>
                        </Nav>
                        
                        <Nav className="navscss justify-content-start">
                            <LinkContainer to="/"   ><NavItem className="navitemcss" >Home</NavItem></LinkContainer>
                            <LinkContainer to="/aboutus"   ><NavItem className="navitemcss" >About Us</NavItem></LinkContainer>
                                <LinkContainer to="/contactus"   ><NavItem className="navitemcss" >Contact Us</NavItem></LinkContainer>
                            <LinkContainer to="/returnpolicy"   ><NavItem className="navitemcss" >Return  Policy</NavItem></LinkContainer>
                            {/* {
                                this.state.signedIn && <LinkContainer to="/signin" ><NavItem className="navitemcss"> Sign In</NavItem></LinkContainer>
                                   
                            }
                            {
                                this.state.signedIn && <LinkContainer to="/signup"><NavItem className="navitemcss">Sign Up</NavItem></LinkContainer>
                            }
                            {
                                this.state.user && <LinkContainer to={"/" + this.state.user.dashboard}><NavItem className="navitemcss">{(this.state.user.dashboard).charAt(0).toUpperCase() + (this.state.user.dashboard).slice(1)}</NavItem></LinkContainer>
                            }
                             */}

                            


                            
                        </Nav>
                        
                    </Navbar.Collapse>
                </Navbar>
            </div> 
        );
    }
}

function mapStateToProps(state){
   // console.log(state)
    return {
        user: state.user.userData,

        token: state.user.userToken,
        signedOut: state.signOutUser.userData.signedout,
    }
}
 
export default connect(mapStateToProps, { userToken, userDetails})(Header);