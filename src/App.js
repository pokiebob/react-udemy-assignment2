import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./validationComponent";
import CharComponent from "./charComponent";

class App extends Component {
  state = {
    name: "",
  };

  nameHandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  deleteNameHandler = (nameIndex) => {
    //const persons = this.state.persons;
    console.log(nameIndex);
    const newName = this.state.name;

    // delete the nth elem of name
    const newNameArray = newName.split("");
    newNameArray.splice(nameIndex, 1);

    this.setState({ name: newNameArray.join("") });
  };

  render() {
    const strArray = this.state.name.split("");
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(ev) => this.nameHandler(ev)}
        ></input>
        <p>{this.state.name.length}</p>
        <ValidationComponent
          length={this.state.name.length}
        ></ValidationComponent>
        {strArray.map((x, index) => (
          <CharComponent
            char={x}
            click={() => this.deleteNameHandler(index)}
          ></CharComponent>
        ))}
      </div>
    );
  }
}

export default App;
