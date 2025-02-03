import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import styles from "./Search Bar.module.css";
import Button from "../Button/Button";

const SearchBar = ()=>{
    const [inputData,setInputData] = useState("");

    const HandleSearchInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setInputData(e.target.value);
    }
    const HandleSearchButton=(e:React.FormEvent<HTMLButtonElement>)=>{
        console.log("click")
    }

    return(
        <div className={`${styles.searchbar}`} >
            
            <TextInput input_type="text" placeholder="Search something here" onChange={HandleSearchInput} value={inputData}/>
            {/* <Button onClick={HandleSearchButton} label="Search" className={`${styles.searchbutton}`}/>  */}
        </div>
    )
}
export default SearchBar