import React from 'react'

const OptionSelection = ( {arrayItems, selectOption} ) => {
  return (
    <>
    <h1 className="heading">React AI App</h1>
        <div className="grid-main">
            {arrayItems.map((item) => {
                return (
                    <div className="grid-child" onClick={() => selectOption(item.option)}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default OptionSelection