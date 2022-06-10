// import { useEffect, useState } from "react";
// import Movie from "./components/Movie";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/movie/:id">
                    <Detail />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

//코인트레커
// function App() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);
//   const [money, setMoney] = useState(0);
//   const [getCoin, setGetCoin] = useState(0);
//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//       .then((response) => response.json())
//       .then((json) => {
//         setCoins(json);
//         setLoading(false);
//       });
//   }, [])
//   const writeMoney = (event) => setMoney(event.target.value);
//   const selectCoin = (event) => setGetCoin(event.target.value);
//   return (
//     <div>
//       <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
//       {loading ? <strong>Loading...</strong> :
//       <div>
//         <select onChange={selectCoin}>
//           <option key="none">
//             select coin
//           </option>
//           {coins.map((coin) => (
//           <option key={coin.id} value={coin.quotes.USD.price}>
//             {coin.name} ({coin.symbol}): {coin.quotes.USD.price}USD
//           </option>
//           ))}
//         </select>
//         <hr />
//         <label>USD</label>
//         <input type="number" value={money} onChange={writeMoney} placeholder="금액을 입력하세요" />
//         <p>Coins you can buy : { getCoin > 0 ? (money / getCoin).toFixed(2) : null}</p>
//       </div>
//       }
//     </div>
//   )
// }

// function App() {
//   const [toDo, setToDo] = useState("");
//   const [toDos, setToDos] = useState([]);
//   const onChange = (event) => setToDo(event.target.value);
//   const onSubmit = (event) => {
//     event.preventDefault();
//     if (toDo === ""){
//       return;
//     }
//     setToDos(currentArray => [toDo, ...currentArray]);
//     setToDo("");
//   };
//   console.log(toDos);
//   return (
//     <div>
//       <h1>My To Dos ({toDos.length})</h1>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."/>
//         <button>Add To Do</button>
//       </form>
//       <hr />
//       <ul>
//         {toDos.map((item, index) => <li key={index}>{item}</li>)}
//       </ul>
//     </div>
//   );
// }
// function Hello(){
//   useEffect(() => {
//     console.log("hi :)");
//     return () => console.log("bye :(");
//   }, [])
//   return <h1>Hello</h1>;
// }

// function App () {
//   const [showing, setShowing] = useState(false);
//   const onClick = () => setShowing((prev) => !prev);
//   return (
//     <div>
//       {showing ? <Hello /> : null}
//       <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
//     </div>
//   )
// }
// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setValue((prev) => prev + 1);
//   const onChange = (event) => setKeyword(event.target.value);
//   useEffect(() => {
//     console.log("I run only once.")
//   }, []);
//   useEffect(() => {
//     console.log("I run when 'keyword' changes.");
//   }, [keyword]);
//   useEffect(() => {
//     console.log("I run when 'counter' changes.");
//   }, [counter]);

//   return (
//     <div>
//       <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   );
// }

export default App;
