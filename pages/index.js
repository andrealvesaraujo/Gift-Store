import React from "react";
import Fade from 'react-reveal/Fade';

class Modal extends React.Component {
    
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
                                    <h3> { this.props.isProduct ? `Comprando ${this.props.title}` : (this.props.isForm ? "Obrigado por nos contatar" : "Bem-Vindo") } </h3>
                                </div>
                                <div className="modal-body">
                                    {this.props.isProduct && 
                                        (
                                            <>
                                                <h4>Excelente Escolha</h4>
                                                <br/>
                                                <h5>Presente: {this.props.title}</h5>
                                                <br/>
                                                <div>Preço: R$ {parseInt(this.props.price)}</div>
                                                <div>Taxa de Entrega Interdimensional: R$ {1000.00}</div>
                                                <div>Total: R$ { parseInt(this.props.price) + 1000.00}</div>
                                                <br/>
                                            </>
                                        )
                                    }
                                    {this.props.isForm && 
                                        (
                                            <>
                                                <h4>Valores do Formulário:</h4>
                                                <br/>
                                                <div>Nome: {this.props.name}</div>
                                                <div>Email: {this.props.email}</div>
                                                <div>Telefone: {this.props.phone}</div>
                                                <div>Message: {this.props.message}</div>
                                                <br/>
                                            </>
                                        )
                                    }
                                    {/* Fazer if do Is form com info do form contact */}
                                    { !this.props.isProduct && !this.props.isForm && (
                                            <>
                                                <h4>Essa é a minha loja Nerd de Presentes em Latim</h4>
                                                <br/>
                                                <div>Boa sorte em entendê-la :)</div>
                                                <br/>
                                                <div>Convido a clicar nos meus produtos</div>
                                                <div>Preencha o formulário no final para entrar em contato</div>
                                                <br/>
                                            </>
                                        )
                                    }
                                </div>
                                <div className="modal-footer">
                                    <button onClick={() => this.props.parentCallBack()}>{ this.props.isProduct ? "Comprar" :  (this.props.isForm ? "Enviar" : "Fechar")}</button>
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
                            <h2>Bem-vindo a Nerd Store</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu massa sit amet augue consectetur ullamcorper non ac massa.</p>
                            <button onClick={this.handleClick}> Aviso </button>
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
                        <h2 id="card-h2">{this.props.titulo}</h2>
                        <p id="card-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.</p>
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
                        <li onClick={()=>this.handleClick("Digivice", "150,00")}>
                            <Card color={"blue"} titulo={"Digivice"}/>
                        </li>
                        <li onClick={()=>this.handleClick("Pokebola", "200,00")}>
                            <Card color={"pink"} titulo={"Pokebola"}/>
                        </li>
                        <li onClick={()=>this.handleClick("Escudo América", "300,00")}>
                            <Card color={"green"} titulo={"Escudo América"}/>
                        </li>
                        <li onClick={()=>this.handleClick("Mjölnir", "500,00")}>
                            <Card color={"yelow"} titulo={"Mjölnir"}/>
                        </li>
                        <li onClick={()=>this.handleClick("Manopla do Infinito", "1000,00")}>
                            <Card color={"purple"} titulo={"Manopla do Infinito"}/>
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
            name: e.target[0].value || "Não Foi Preenchido",            
            email:e.target[1].value || "Não Foi Preenchido",            
            phone:e.target[2].value || "Não Foi Preenchido",            
            message:e.target[3].value || "Não Foi Preenchido",
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
                        <h3>Entre em contato </h3>
                        <form onSubmit={this.handleSubmit}>
                            <input placeholder="Nome"></input>
                            <input placeholder="E-mail"></input>
                            <input placeholder="Telefone"></input>
                            <textarea placeholder="Mensagem"></textarea>
                            <button>Enviar Mensagem</button>
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
