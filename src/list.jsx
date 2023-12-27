import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import '../src/list.css';

const Listitem = (props) => {
    const [line, Setline] = useState();

    const Cutit = () => {
        Setline(true);
    };

    return(
        <div onClick={Cutit}> 
            <DeleteIcon className="delete_style"/>
            <span style={{textDecoration: line ? 'line-through': 'none'}}>{props.text}</span>
        </div>
    );
};

export default Listitem;