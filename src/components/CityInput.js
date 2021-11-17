import React, { useState } from 'react'

const CityInput = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onUserInput(inputValue);
    setInputValue('')
  }

  return (
    <div className='init'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='city'>Enter the city:</label>
        <input id='city' value={inputValue} onChange={handleChange} />
        <button className='submitbtn'>Enter</button><br />
        <div className='validation'>
          {props.validation}
        </div>
      </form>
    </div>
  )
}

export default CityInput
