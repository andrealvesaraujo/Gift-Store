import React from "react";

class Header extends React.Component {
    render() {
        return ( 
            <section className="container-header">
                <div className="container-header__info">
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu massa sit amet augue consectetur ullamcorper non ac massa.</p>
                    <button>Botão</button>
                </div>
                <div className="container-header__img"></div>
            </section>
        );
    }
}

class Card extends React.Component {
    render() {
        return ( 
            <div>
                <div></div>
                <div>Titulo do Card</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.</div>
            </div>
        );
    }
}

class Cards extends React.Component {
    render() {
        return ( 
            <section>
                <ul>
                    <li><Card/></li>
                    <li><Card/></li>
                    <li><Card/></li>
                    <li><Card/></li>
                    <li><Card/></li>
                    <li><Card/></li>
                </ul>
            </section>
        );
    }
}

class Form extends React.Component {
    render() {
        return ( 
            <form>
                <input placeholder="Nome"></input>
                <input placeholder="E-mail"></input>
                <input placeholder="Telefone"></input>
                <input placeholder="Mensagem"></input>
                <button>Enviar Mensagem</button>
            </form>
        );
    }
}

class Contato extends React.Component {
    render() {
        return ( 
            <section>
                <div>
                    <h3>Entre em contato </h3>
                    <Form/>
                </div>
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
