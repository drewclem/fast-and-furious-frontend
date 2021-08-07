import React, { useState, useEffect } from "react"

function takeRandom(data) {
  return data[Math.floor(Math.random() * data.length)]
}

const Car = () => {
  const [fetchedData, setFetchedData] = useState([])
  const [randomCar, setRandomCar] = useState({})

  useEffect(() => {
    fetch("https://fast-and-furious-data.herokuapp.com/cars")
      .then(response => {
        return response.json()
      })
      .then(json => {
        setFetchedData(json.cars)
        setRandomCar(takeRandom(json.cars))
      })
  }, [])

  function updateCar() {
    setRandomCar(takeRandom(fetchedData))
  }

  return (
    <div>
      <div key={randomCar.id} className="sm:flex pb-12">
        <div className="sm:w-1/2 pb-10">
          <div className="h-64 overflow-hidden mb-4 shadow-md">
            <img
              className="h-64 w-full object-cover"
              src={randomCar.image}
              alt="car"
            />
          </div>
          <button
            className="float-right text-2xl mr-4"
            onClick={() => {
              updateCar()
            }}
          >
            GO!
          </button>
        </div>
        <div className="sm:pl-12 sm:w-1/2">
          <h2 className="font-bold text-3xl tracking-wide mb-4">
            {randomCar.year} {randomCar.make} {randomCar.model}
          </h2>
          {randomCar.specs?.map((spec, index) => {
            return (
              <div className="flex mb-8">
                <h3 className="pr-2 w-4/12" key={index}>
                  {spec.category}
                </h3>
                <ul className="w-11/12">
                  {spec.info.map((item, index) => {
                    return <li>{item}</li>
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Car
