import { useEffect, useState } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);

    const [amount, setAmount] = useState();
    const [flipped, setFlipped] = useState(false);
    
    const onChange = (event) => {
        setAmount(event.target.value);
    };

    const [coinval, setCoinval] = useState();

    const reset = () => setAmount(0);
    const onFlip = () => {
        setFlipped((current) => !current);
        reset();
    };

    const f1 = (event) => {
        setCoinval(event.target.value);
        setAmount(0);
    }

    useEffect(()=> {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => {
            setCoins(json);
            setLoading(false);
        });
    }, [])

    return (
        <div>
            <div>
                <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
                {loading ? <strong>Loading...</strong> : <select>
                    {coins.map((coin) => <option>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</option>)}
                </select>}
            </div>
            
            <hr />

            <div>
                <label htmlFor="coins"><select onChange={f1}>
                    <option>Select a Coin</option>
                    {coins.map((coin) => <option value={coin.quotes.USD.price} >{coin.name} ({coin.symbol})</option>)}
                    </select>
                </label>
                <input 
                value = {flipped ? amount/coinval : amount}                 
                id="coins" 
                placeholder="coins" 
                type="number" 
                onChange={onChange}
                disabled={flipped === true}
                />
            </div>

            <div>
                <label htmlFor="dollars">USD</label>
                <input 
                value= {flipped ? amount : amount*coinval}                
                id="dollars" 
                placeholder="dollars" 
                type="number"
                onChange={onChange}
                disabled={flipped === false}
                />
            </div>
            <div>
                
            </div>
            <button onClick={reset}>Reset</button>
            <button onClick={onFlip}>{flipped ? "Turn back" : "Flip"}</button>
        </div>
    );
}

export default App;