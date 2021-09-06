import React from "react";

class Header extends React.Component {
    render() {
        return ( 
            <section>Header</section>
        );
    }
}

class Cards extends React.Component {
    render() {
        return ( 
            <section>Card</section>
        );
    }
}

class Contato extends React.Component {
    render() {
        return ( 
            <section>Contato Form</section>
        );
    }
}
export default class Principal extends React.Component {
    
    render() {
        return ( 
            <main>
                <Header />
                <Cards />
                <Contato />
            </main>
        );
    }
}
