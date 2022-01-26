import React from "react";
import Fade from 'react-reveal/Fade';

class Modal extends React.Component {

    componentDidMount(){
        document.title = "Gift-Store"
      }
    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                {this.props.show && ( 
                    <Fade zoom>
                        <div className="modal">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3> { this.props.isProduct ? `Shopping ${this.props.title}` : (this.props.isForm ? "Thanks for contacting us" : "Welcome") } </h3>
                                </div>
                                <div className="modal-body">
                                    {this.props.isProduct && 
                                        (
                                            <>
                                                <h4>Excellent choice</h4>
                                                <br/>
                                                <h5>Gift: {this.props.title}</h5>
                                                <br/>
                                                <div>Price: R$ {parseInt(this.props.price)}</div>
                                                <div>International Delivery Fee: BRL {1000.00}</div>
                                                <div>Total: R$ { parseInt(this.props.price) + 1000.00}</div>
                                                <br/>
                                            </>
                                        )
                                    }
                                    {this.props.isForm && 
                                        (
                                            <>
                                                <h4>Your Answer:</h4>
                                                <br/>
                                                <div>Name: {this.props.name}</div>
                                                <div>Email: {this.props.email}</div>
                                                <div>Phone Number: {this.props.phone}</div>
                                                <div>Message: {this.props.message}</div>
                                                <br/>
                                            </>
                                        )
                                    }
                                    {/* Fazer if do Is form com info do form contact */}
                                    { !this.props.isProduct && !this.props.isForm && (
                                            <>
                                                <h4>This is my Nerd Gift Shop in English</h4>
                                                <br/>
                                                <div>Good luck figuring it out :)</div>
                                                <br/>
                                                <div>I invite you to click on my products</div>
                                                <div>Fill in the form at the end to get in touch</div>
                                                <br/>
                                            </>
                                        )
                                    }
                                </div>
                                <div className="modal-footer">
                                    <button onClick={() => this.props.parentCallBack()}>{ this.props.isProduct ? "Purchase" :  (this.props.isForm ? "Enviar" : "close")}</button>
                                </div>
                            </div>
                        </div> 
                    </Fade>
                )} 
            </>            
        )      
    }
}

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    handleClick = (e) => {
        this.setState({
            show: true
        })
    };

    callbackFunction = (childData) => {
        this.setState({
            show: false
        })
    };

    render() {
        return ( 
            <>
                <Modal parentCallBack={this.callbackFunction} show={this.state.show} />
                <section className="container-header">
                    <Fade left>
                        <div className="container-header__info">
                            <h2>Welcome to Nerd Store</h2>
                            <p>a store primarily selling souvenirs, memorabilia, and other items relating to a particular topic or theme</p>
                            <button onClick={this.handleClick}> Click Me </button>
                        </div>
                        <div className="container-header__img"></div>
                    </Fade>
                </section>
            </>            
        );
    }
}

class Card extends React.Component {

    render() {
        return ( 
            <Fade left>                    
                <div id="principal" className="card">
                    <div id="card-img" className={`area ${this.props.color}`}></div>
                    <div id="card-text" className="text">
                        <h2 id="card-h2">{this.props.titulo}</h2>Since some online shoppers only scan text on websites, it might be helpful to use bullet points that cover the most important product details. Bullet points should generally be used for specs (like dimensions) or short phrases (like features) so they are quick and easy to read.
                        <p id="card-p"></p>
                    </div>
                </div>  
            </Fade> 
        );
    }
}

class Cards extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false,
            title: "",
            price: ""
        }
    }

    handleClick = (title, price) => {
        this.setState({
            show: true,
            title,
            price
        })
    };

    callbackFunction = (childData) => {
        this.setState({
            show: false
        })
    };


    render() {
        return ( 
            <>
                <Modal 
                    title={this.state.title}
                    price = {this.state.price} 
                    parentCallBack={this.callbackFunction} 
                    show={this.state.show}
                    isProduct = {true} 
                />
                <section className="container-cards">
                    <ul>
                        <li onClick={()=>this.handleClick("Keyblade", "100,00")}>
                            <Card color={"red"} titulo={"Keyblade"}/>
                        </li>
                        <li onClick={()=>this.handleClick("Device", "150,00")}>
                            <Card color={"blue"} titulo={"Device"}/>
                        </li>
                        <li onClick={()=>this.handleClick("Pokéball", "200,00")}>
                            <Card color={"pink"} titulo={"Pokéball"}/>
                        </li>
                        <li onClick={()=>this.handleClick("Captain America Shield", "300,00")}>
                            <Card color={"green"} titulo={"Captain America Shield"}/>
                        </li>
                        <li onClick={()=>this.handleClick("Mjollnir", "500,00")}>
                            <Card color={"yelow"} titulo={"Mjollnir"}/>
                        </li>
                        <li onClick={()=>this.handleClick("Infinity Stone", "1000,00")}>
                            <Card color={"purple"} titulo={"Infinity Stone"}/>
                        </li>
                    </ul>
                </section>
            </>
        );
    }
}

// class ModalContato extends React.Component {
    
// }

class Contato extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false,
            name:"",            
            email:"",            
            phone:"",            
            message:"",            
        }
    }

    callbackFunction = (childData) => {
        this.setState({
            show: false,
            name:"",            
            email:"",            
            phone:"",            
            message:"",  
        })
    };

    handleSubmit = (e, title, price) => {
        e.preventDefault()
        this.setState({
            show: true,
            name: e.target[0].value || "NULL",            
            email:e.target[1].value || "NULL",            
            phone:e.target[2].value || "NULL",            
            message:e.target[3].value || "NULL",
        })
        e.target[0].value = ""
        e.target[1].value = ""
        e.target[2].value = ""
        e.target[3].value = ""
    };

    render() {
        return ( 
            <>
                <Modal 
                        parentCallBack={this.callbackFunction} 
                        show={this.state.show}
                        name = {this.state.name}
                        email = {this.state.email}
                        phone = {this.state.phone}
                        message = {this.state.message}
                        isForm = {true}
                />                
                <section className="container-contact">
                    <Fade left>
                        <h3>Contact Me </h3>
                        <form onSubmit={this.handleSubmit}>
                            <input placeholder="Name"></input>
                            <input placeholder="E-mail"></input>
                            <input placeholder="Phone Number"></input>
                            <textarea placeholder="Message"></textarea>
                            <button>SUBMIT MESSAGE</button>
                        </form>                    
                    </Fade>
                </section>
            </>
        );
    }
}
export default class Principal extends React.Component {

    render() {
        return ( 
            <main className="content">
                <Header />
                <Cards />
                <Contato />
            </main>            
        );
    }
}
