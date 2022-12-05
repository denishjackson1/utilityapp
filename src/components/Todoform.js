import React, { useState, useEffect, useRef } from 'react';

function Todoform(PaymentResponse) {
  const [input, setInput] = useState(PaymentResponse.edit ? PaymentResponse.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    PaymentResponse.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
          {PaymentResponse.edit ? (
            <>
              <input
                placeholder='Update schedule'
                value={input}
                onChange={handleChange}
                name='text'
                ref={inputRef}
                className='todo-input edit'
              />
              <button onClick={handleSubmit} className='todo-button edit'>
                Update
              </button>
            </>
          ) : (
            <>
              <input
                placeholder='Enter Todo'
                value={input}
                onChange={handleChange}
                name='text'
                className='todo-input'
                ref={inputRef}
              />
              <button onClick={handleSubmit} className='todo-button'>
                Add
              </button>
            </>
          )}
        </form>
      );
    }
    export default Todoform;