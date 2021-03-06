import React, {Component} from "react";
import styled from "styled-components";
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Route, withRouter , Link} from 'react-router-dom';


class ProductImages extends Component{
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div className="productDescription dashboardTextArea" >
                {(this.props.fileArray || []).map(url => (
                    <img className="selectedImages" src={url} alt="..." />
                ))}
                <input type="file" className="productaddimageinput" onChange={this.props.uploadMultipleFiles} multiple />
            </div>
        )
    }
    
}



const CommonMainDiv = ({children}) =>{
    return(
        <Container  fluid>
            <Row>
                <Col></Col>
                <Col className="blackborder" sm={12} md={10} lg={10}>{children}</Col>
                <Col></Col>
            </Row>
        </Container>
    )
}



class ProductDetails extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>ProductDetails</div>
        )
    }
}

class AddProduct extends Component{
    fileObj = [];
    fileArray = [];
    constructor(props){
        super(props)
    
        this.state = {
            productName:'',
            category:'',
            stock:'',
            description:'',
            price:'',
            discount:'',
            mainError:{
                error:null
            },
            error: {
                erproductname: null,
                ercategory: null,
                erstock: null,
                erdescription:null,
                erprice:null,
                erdiscount:null,
                ers: null
            },
            file:[null]

        }
        this.handleChange = this.handleChange.bind(this)
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
    }

    uploadMultipleFiles(e) {

        this.fileObj.push(e.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        
        this.setState({ file: this.fileArray })
    }

    uploadFiles(e) {
        e.preventDefault()
        console.log(this.state.file)
    }

    handleChange(event) {
        event.preventDefault();
        const { name, value } = event.target
        this.setState({
            [name]: value,
            saveButton: true
        })
    }
    render(){
        return(
            <CommonMainDiv>
                <Container style={{padding:0}} as="form" fluid onSubmit={this.profileSave}   >
                    <Row>
                        <Col>
                            <div className="flexContainer">
                                <div className="flexItem">
                                    {this.state.mainError.error && <div>{this.state.mainError.e} </div>}
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="flexContainer">
                                <div className="flexItem">
                                    <div className="dashboardLabel">Product Name</div>
                                    <input
                                        type="text"
                                        onChange={this.handleChange}
                                        value={this.state.productName}
                                        name="productName"
                                        className="productNameInput dashboardInput"
                                    />
                                    <div style={this.state.error.erproductname && { background: '#f8d7da', display: 'block' }} className="dashboardError signUpDF  fade-in text-muted ">
                                        {this.state.error.erproductname && this.state.error.erproductname}
                                    </div>

                                </div>
                                <div className="flexItem">
                                    <div className="dashboardLabel">Category</div>
                                    <select
                                        className="dashboardSelect"
                                        onChange={this.handleChange}
                                        value={this.state.category}
                                        name="category"
                                    >
                                        <option value="null">Select Your Value</option>
                                        <option value="example1">exmaple1</option>
                                        <option value="example1">exmaple2</option>
                                        <option value="example3">exmaple3</option>
                                    </select>
                                    <div style={this.state.error.ercategory && { background: '#f8d7da', display: 'block' }} className="dashboardError fade-in text-muted">
                                        {this.state.error.ercategory && this.state.error.ercategory}
                                    </div>
                                </div>
                                <div className="flexItem">
                                    <div className="dashboardLabel">Stock</div>
                                    <select
                                        className="dashboardSelect"
                                        onChange={this.handleChange}
                                        value={this.state.stock}
                                        name="stock"
                                    >
                                        <option value="null">Select Your Value</option>
                                        <option value="example1">exmaple1</option>
                                        <option value="example1">exmaple2</option>
                                        <option value="example3">exmaple3</option>
                                    </select>
                                    <div style={this.state.error.erstock && { background: '#f8d7da', display: 'block' }} className="dashboardError fade-in text-muted">
                                        {this.state.error.erstock && this.state.error.erstock}
                                    </div>
                                </div>  
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="flexContainer">
                                <div className="flexItem">
                                    <div className="dashboardLabel">Product Images</div>
                                   
                                        <ProductImages fileArray={this.fileArray} uploadMultipleFiles={this.uploadMultipleFiles} />
                                    
                                    <div style={this.state.error.erdescription && { background: '#f8d7da', display: 'block' }} className="dashboardError signUpDF  fade-in text-muted ">
                                        {this.state.error.erdescription && this.state.error.erdescription}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="flexContainer">
                                <div className="flexItem">
                                    <div className="dashboardLabel">Product Description</div>
                                    <textarea className="productDescription dashboardTextArea" value={this.state.description} name="description" onChange={this.handleChange} />
                                    <div style={this.state.error.erdescription && { background: '#f8d7da', display: 'block' }} className="dashboardError signUpDF  fade-in text-muted ">
                                        {this.state.error.erdescription && this.state.error.erdescription}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="flexContainer">
                                <div className="flexItem">
                                    <div className="dashboardLabel">Product Price</div>
                                    <input
                                        type="text"
                                        onChange={this.handleChange}
                                        value={this.state.price}
                                        name="productPirice"
                                        className="productNameInput dashboardInput"
                                    />
                                    <div style={this.state.error.erproductprice && { background: '#f8d7da', display: 'block' }} className="dashboardError signUpDF  fade-in text-muted ">
                                        {this.state.error.erproductprice && this.state.error.erproductprice}
                                    </div>
                                </div>
                                <div className="flexItem">
                                    <div className="dashboardLabel">Product Discount</div>
                                    <input
                                        type="text"
                                        onChange={this.handleChange}
                                        value={this.state.productDiscount}
                                        name="productName"
                                        className="productNameInput dashboardInput"
                                    />
                                    <div style={this.state.error.erproductdiscount && { background: '#f8d7da', display: 'block' }} className="dashboardError signUpDF  fade-in text-muted ">
                                        {this.state.error.erproductdiscount && this.state.error.erproductdiscount}
                                    </div>
                                </div>
                            </div>

                        </Col>
                    </Row>    
                    <Row>
                        <Col>
                            <div className="saveButtonDiv flexContainer " >
                                <div className="saveButtonDiv flexItem " >
                                    <Button type="submit" disabled={!this.state.saveButton} className="saveButtonCss"   >
                                       Add Product
                                </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>  
            </CommonMainDiv>
        )
    }
}


class AllProducts extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <CommonMainDiv>
                All Products
            </CommonMainDiv>
        )
    }
}


class SellerProducts extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <Container fluid>
                    <Row>
                        <Col></Col>
                        <Col sm={21} md={10} lg={10}>
                            <Row>
                                <Col>Seller Products</Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Link to="/dashboard/products/allproducts" className="unsetLink pdLink" >ALL Products</Link>
                                    <Link to="/dashboard/products/addproduct" className="unsetLink pdLink" >Add Product</Link>
                                </Col>
                            </Row>

                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}



class SellerProductsDashboard extends Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props)
        return (
            <div>
                
                <SellerProducts />

                <Route exact path={this.props.match.path+"/addproduct"} component={AddProduct} />
                <Route exact path={this.props.match.path +"/allproducts"} component={AllProducts} />
                <Route exact path={this.props.match.path +"/productDetails/:productId"} component={ProductDetails} />
            </div>
        )
    }
}

export default withRouter(SellerProductsDashboard);