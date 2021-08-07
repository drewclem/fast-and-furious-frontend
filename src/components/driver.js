import React from "react"

function takeRandom(data) {
  return data[Math.floor(Math.random() * data.length)]
}

class Driver extends React.Component {
  constructor(props) {
    super(props)

    this.updateDriver = this.updateDriver.bind(this)
    this.state = {
      fetchedData: [],
      randomDriver: {
        quotes: [
          {
            id: "",
            quote: "",
          },
        ],
      },
    }
  }

  componentDidMount() {
    fetch("https://fast-and-furious-data.herokuapp.com/drivers")
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.setState({
          fetchedData: json.drivers,
          randomDriver: takeRandom(json.drivers),
        })
      })
  }

  updateDriver() {
    this.setState({
      randomDriver: takeRandom(this.state.fetchedData),
    })
  }

  render() {
    const driver = this.state.randomDriver

    return (
      <div>
        <div key={driver.id} className="sm:flex pb-12">
          <div className="pb-10 sm:w-1/2">
            <div className="h-64 overflow-hidden mb-4">
              <img
                src={driver.image}
                alt="driver"
                className="h-64 object-cover w-full"
              />
            </div>
            <button
              className="float-right text-2xl mr-4"
              onClick={this.updateDriver}
            >
              GO!
            </button>
          </div>
          <div className="sm:pl-12 sm:w-1/2">
            <h2 className="font-bold text-4xl sm:text-5xl sm:tracking-wide">
              {driver.name}
            </h2>
            <p className="text-xl mb-4 opacity-50">{driver.alias}</p>
            <p>Memorable quotes:</p>
            <ul className="text-md opacity-50 leading-relaxed">
              {driver.quotes.map(quotes => (
                <li key={quotes.id} className="mb-2">
                  '{quotes.quote}'
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Driver
