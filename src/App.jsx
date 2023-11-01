import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const App = () => {
  const [categories, setCategories] = useState(['Valorant'])

  const addNewCategory = (newCategory) => {
    if (categories.includes(newCategory)) return

    setCategories([newCategory, ...categories])
  }

  return (
    <div className='w-screen  min-h-screen sm:w-full text-white bg-slate-900  flex flex-col'>
      <header className='  min-h-[9rem]  w-full flex flex-col items-center justify-center gap-4  ' >
        <h1 className='text-3xl sm:text-4xl font-bold ' >Gift App</h1>
        <AddCategory
          addCategory={addNewCategory}
        />
      </header>
      <main className=' p-4 sm:w-full   flex flex-col  justify-center items-center gap-3 ' >
        {
          categories.map((category) => (
            <div key={category} className= { ` bg-slate-800 w-4/5 text-center p-4 gap-4 flex flex-col bg-opacity-30 ` }>
              <>
                <div>
                  <h3 className= {` ${categories.indexOf(category) % 2 === 0 ? 'text-pink-500' : ' text-teal-500'} font-bold text-xl`} >{category}</h3>
                </div>
                <GifGrid category={category} />
              </>
            </div>
          )
          )
        }
      </main>
    </div>
  )
}

export default App
