import React, { useState } from 'react'

// eslint-disable-next-line react/prop-types
const AddCategory = ({ addCategory }) => {
  const [inputValue, setInputValue] = useState('')

  const changeValue = ({ target }) => {
    // addCategory(target.value)
    setInputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (inputValue.trim().length <= 1) return
    addCategory(inputValue.trim())
    setInputValue('')
  }

  return (
    <form onSubmit={onSubmit} className='flex gap-4 justify-center sm:w-4/5' >
      <input
        className="bg-transparent w-4/5 appearance-none border-2 border-teal-500 rounded py-2 px-4  leading-tight focus:outline-none text-teal-500 focus:text-pink-500  focus:border-pink-500"
        onChange={changeValue}
        value={ inputValue }
      />
      <button className="bg-transparent text-teal-500 font-semibold hover:text-pink-500 py-2 px-4 border border-teal-500 hover:border-pink-500 rounded">
      Search
      </button>
    </form>
  )
}

export default AddCategory
