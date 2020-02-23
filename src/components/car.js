import React from "react"

function takeRandom(data) {
  return data[Math.floor(Math.random() * data.length)]
}

class Car extends React.Component {

  constructor(props) {
    super(props);

    this.updateCar = this.updateCar.bind(this)
    this.state = {
      fetchedData: [],
      randomCar: {
        id: '',
        specs: {
          engine: [],
          exterior: [],
          chasis: [],
          interior: [],
          av: [],
          performance: []
        }
      }
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/cars').then(response => {
      return response.json()
    }).then(json => {
      this.setState({
        fetchedData: json.cars,
        randomCar: takeRandom(json.cars)
      })
    })
  }

  updateCar() {
    this.setState({
      randomCar: takeRandom(this.state.fetchedData)
    })
  }

  render() {
    const car = this.state.randomCar

    return (
      <div>
        <div key={car.id} className="sm:flex pb-12">
          <div className="sm:w-1/2">
            <img src={car.image} alt="car" className="w-full mb-4" />
            <button className="float-right text-2xl mr-4" onClick={this.updateCar}>GO!</button>
          </div>
          <div className="sm:pl-12 sm:w-1/2">
            <h2 className="font-bold text-3xl tracking-wide mb-4">{car.year} {car.make} {car.model}</h2>
            <div class="flex">
              <h3 className="pr-2 w-4/12">Performance</h3>
              <ul className="mt-1 w-11/12">{car.specs.performance.map(spec => <li className="text-xs opacity-50">{spec}</li>)}</ul>
            </div>
            <div class="flex mb-4">
              <h3 className="pr-2 w-4/12">Engine</h3>
              <ul className="mt-1 w-11/12">{car.specs.engine.map(spec => <li className="text-xs opacity-50">{spec}</li>)}</ul>
            </div>
            <div class="flex mb-4">
              <h3 className="pr-2 w-4/12">Chasis</h3>
              <ul className="mt-1 w-11/12">{car.specs.chasis.map(spec => <li className="text-xs opacity-50">{spec}</li>)}</ul>
            </div>
            <div class="flex mb-4">
              <h3 className="pr-2 w-4/12">Exterior</h3>
              <ul className="mt-1 w-11/12">{car.specs.exterior.map(spec => <li className="text-xs opacity-50">{spec}</li>)}</ul>
            </div>
            <div class="flex mb-4">
              <h3 className="pr-2 w-4/12">Interior</h3>
              <ul className="mt-1 w-11/12">{car.specs.interior.map(spec => <li className="text-xs opacity-50">{spec}</li>)}</ul>
            </div>
            <div class="flex mb-4">
              <h3 className="pr-2 w-4/12">Audio</h3>
              <ul className="mt-1 w-11/12">{car.specs.av.map(spec => <li className="text-xs opacity-50">{spec}</li>)}</ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Car
