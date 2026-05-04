import {useState,useEffect,useRef} from "react";

/*In SearchBar.jsx, use useRef + useEffect together to auto-focus the input when the page loads.
Think about:
Where does useRef get created?
Where does the ref get attached?
When should .focus() be called — and which hook handles "when component first loads"?*/

function SearchBar({onSearch}){
    const [inputText,setinputText] = useState("");
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    },[]);
    return(
        <>
            <input value={inputText} ref={inputRef} type="text" placeholder="type your city..." onChange={e=>{setinputText(e.target.value)}}></input>
            <button onClick={()=>{onSearch(inputText)}}> Search </button>
        </>
    )
}

export default SearchBar;