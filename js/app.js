class App extends React.Component {
    state={
        nom : "",
        prenom: "",
        age: "",
        tab: []
    }

    submitButton = e => {
        this.setState({
            nom: document.querySelector("#nom").value,
            prenom: document.querySelector("#prenom").value,
            age: document.querySelector("#age").value,
            tab: this.state.tab + {
                'nom' : this.state.nom,
                'penom' : this.state.prenom,
                'age' : this.state.age
            }
            })

        console.log(this.state.tab);
    }

    render() {
        return(
            
            <div>
                <input type="text" id="nom" placeholder="Entrer votre Nom"/>
                <input type="text" id="prenom" placeholder="Entrer votre Prénom"/>
                <input type="text" id="age" placeholder="Entrer votre Age"/>
                <button type="submit" onClick = {this.submitButton}>Envoyer</button>
            </div>
        );
        
    }
}

ReactDOM.render(<App/>,document.getElementById("app"));
