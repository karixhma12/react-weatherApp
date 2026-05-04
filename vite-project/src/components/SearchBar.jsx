import {useState} from "react";

function SearchBar({onSearch}){
    const [inputText,setinputText] = useState("");
    return(
        <>
            <input value={inputText} type="text" placeholder="type your city..." onChange={e=>{setinputText(e.target.value)}}></input>
            <button onClick={()=>{onSearch(inputText)}}> Search </button>
        </>
    )
}

export default SearchBar;