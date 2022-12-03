import React, {useState, useEffect, useRef}from "react";
import { RiPictureInPictureExitFill } from "react-icons/ri";

function Todoform(PaymentResponse) {
    const [input, setInput] = useState(PaymentResponse.edit ? PaymentResponse.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        PaymentResponse.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        
        });
        setInput('');
    };
return(
    <form className='todo-form' onSubmit={handleSubmit}>
        {PaymentResponse.edit ? ( 
        <>
        <input 
             type='text'
             placeholder='Update Item'
             value={input}
             name='text'
             className='todo-input'
             onChange={handleChange}
             ref={inputRef}
         />
         <button className='todo-button edit'>Update</button>
        </>
        ):
        (
        <>
        <input
            type='text'
             placeholder='Add to do'
             value={input}
             name='text'
             className='todo-input'
             onChange={handleChange}
             ref={inputRef}
        />
         <button className='todo-button add'>Add Todo</button>
        </>
        )}
    </form>
    );
}
export default Todoform
