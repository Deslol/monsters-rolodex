import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/search-box/search-box.component.jsx";
import Card from "./components/card/card.component.jsx";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setFilterMonsters] = useState(monsters);
  // console.log("render");
  useEffect(() => {
    const generateData = async function () {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setMonsters(data);
    };
    generateData();
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((arr) => {
      return arr.name.toLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  // const filteredMonsters = monsters.filter((arr) => {
  //   return arr.name.toLowerCase().includes(searchField);
  // });

  // console.log(filteredMonsters);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };
  // console.log(searchField);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="Search Monsters"
      />
      <CardList monsters={filterMonsters} />
    </div>
  );
};

// const pureFunction = (a, b) => {
//   return a + b;
// };

// let c = 3;

// const funcA = (a, b) => {
//   return a + b + c;
// };
// console.log(funcA(3, 2));

// const funcB = (a, b) => {
//   c = a + b;

//   return a * b;
// };

// funcB(2, 4);

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

// async componentDidMount() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   this.setState(() => {
//     return { monsters: data };
//   });
// }

// onSearchChange = (event) => {
//   const searchField = event.target.value.toLowerCase();

//   this.setState(() => {
//     return { searchField };
//   });
// };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (

//     );
//   }
// }

export default App;

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
