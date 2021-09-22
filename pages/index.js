import React from "react";
import Fade from 'react-reveal/Fade';

class ModalHeader extends React.Component {

    constructor(props) {
        super(props)
    }

    handleClick = (e) => {
        this.props.parentCallBack()
    };

    render() {
        return (
            <>
                {this.props.show && ( 
                    <Fade zoom>
                        <div className="modal">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3> { this.props.title || "Bem-Vindo"} </h3>
                                </div>
                                <div className="modal-body">
                                    Essa é a minha loja Nerd de Presentes em Latim
                                    <br/>
                                    <br/>
                                    Boa sorte em entendê-la :)
                                </div>
                                <div className="modal-footer">
                                    <button onClick={this.handleClick}>Fechar</button>
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
                <ModalHeader parentCallBack={this.callbackFunction} show={this.state.show} />
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
                <div className="card">
                    <div className={`area ${this.props.color}`}></div>
                    <div className="text">
                        <h2>{this.props.titulo}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.</p>
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
        }
    }

    handleClick = (e) => {
        this.setState({
            show: true,
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
                <ModalHeader title={this.state.title} parentCallBack={this.callbackFunction} show={this.state.show} />
                <section className="container-cards">
                    <ul>
                        <li onClick={this.handleClick} titulo={"Keyblade"}>
                            <Card color={"red"} titulo={"Keyblade"}/>
                        </li>
                        <li onClick={this.handleClick}>
                            <Card color={"blue"} titulo={"Digivice"}/>
                        </li>
                        <li onClick={this.handleClick}>
                            <Card color={"pink"} titulo={"Pokebola"}/>
                        </li>
                        <li onClick={this.handleClick}>
                            <Card color={"green"} titulo={"Escudo América"}/>
                        </li>
                        <li onClick={this.handleClick}>
                            <Card color={"yelow"} titulo={"Mjölnir"}/>
                        </li>
                        <li onClick={this.handleClick}>
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

    handleSubmit = (e) => {
        e.preventDefault()
        alert(`
            Valores do Formulário:  
            
            Nome => ${e.target[0].value || "Não Foi Preenchido"}
            E-mail => ${e.target[1].value || "Não Foi Preenchido"}
            Telefone => ${e.target[2].value || "Não Foi Preenchido"}
            Mensagem => ${e.target[3].value || "Não Foi Preenchido"}
        `)
        e.target[0].value = ""
        e.target[1].value = ""
        e.target[2].value = ""
        e.target[3].value = ""

    };

    render() {
        return ( 
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
