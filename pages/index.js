import React from "react";
import Fade from 'react-reveal/Fade';

class Header extends React.Component {

    handleClick = (e) => {
        alert(`
            Bem-vindo a minha loja de Presentes em Latim

            Boa sorte em entendê-la :)
        `)
    };

    render() {
        return ( 
            <section className="container-header">
                <Fade left>
                    <div className="container-header__info">
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu massa sit amet augue consectetur ullamcorper non ac massa.</p>
                        <button onClick={this.handleClick}> Botão </button>
                    </div>
                    <div className="container-header__img"></div>
                </Fade>
            </section>
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
                        <h2>Titulo do Card</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.</p>
                    </div>
                </div>  
            </Fade>
        );
    }
}

class Cards extends React.Component {
    render() {
        return ( 
            <section className="container-cards">
                <ul>
                    <li><Card color={"red"}/></li>
                    <li><Card color={"blue"}/></li>
                    <li><Card color={"pink"}/></li>
                    <li><Card color={"green"}/></li>
                    <li><Card color={"yelow"}/></li>
                    <li><Card color={"purple"}/></li>
                </ul>
            </section>
        );
    }
}

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
