import {useState} from "react";


const useForm = (initialState) => {
    // state init
    const [input, setInput] = useState(initialState);
    
    // on change
    const handleInputChange = (e) =>{
        setInput((prevState) =>({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    // form reset
    const formReset = () =>{
        setInput(initialState);
    };

    return {input, handleInputChange, formReset};

}


export default useForm;