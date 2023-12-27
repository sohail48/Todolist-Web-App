import { useState } from "react";
import Listitem from './list';
import '../src/App.css';

const App = () => {
    const [Item, Setitem] = useState('');
    const [inputlist, Setinputlist] = useState([]);

    const itemEvents = (event) => {
        Setitem(event.target.value);
    };

    const listOfitem = () => {
        Setinputlist((prevVal) => {
            return [...prevVal, Item]
        });
        Setitem('');
    };

    return(
        <div className="container">
            <h2 className="title">TodoList Application</h2>
            <div className="form">
                <input type="text"  placeholder="Add items" value={Item} onChange={itemEvents} className="styled_input"/>
                <button onClick={listOfitem} className="button_style">+</button>
               
                <div className="list">
                    {inputlist.map((val, index) => {
                        return < Listitem key={index} text={val}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default App;