import { Component } from "react";

import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/search-box/search-box.component.jsx";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    this.setState(() => {
      return { monsters: data };
    });
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search Monsters"
          className="search-box"
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

// const filteredMonsters = this.state.monsters.filter((arr) => {
//   const name = arr.name.toLowerCase();
//   const lName = name.includes(event.target.value);
//   return lName;
// });

// {
//   filteredMonsters.map((monster) => {
//     return (
//       <div key={monster.id}>
//         <h1>{monster.name}</h1>
//       </div>
//     );
//   });
// }

// this.setState(
//   () => {
//     return {
//       monsters: this.state.monsters.filter((arr) => {
//         return arr.name.includes(event.target.value);
//       }),
//     };
//   },
//   () => console.log(this.state)
// );
