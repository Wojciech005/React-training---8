
const data = {
    cars : [
        {
            id:1,
            year: 2013,
            marka: "MERCEDES",
            model: " A class",
        },
        {
            id:2,
            year: 1999,
            marka : "BMW",
            model: "Z5",
        },
        {
            id:3,
            year: 2020,
            marka: "MERCEDES",
            model: "GLC",
        },
        {
            id: 4,
            year: 2005,
            marka : "MERCEDES",
            model:  "S class"
        },
        {
            id: 5,
            year: 2000,
            marka: "BMW",
            model: "118"
        }

    ]
}

const Vehicle = ({car}) => (
    <div>
        <h1>{car.marka}</h1>
        <p>Info about vehicle:</p>
        <p>Age: {car.year}</p>
        <p>Model: {car.model}</p>
    </div>
)

class ShowCars extends React.Component {
    
    state = {
        select: "all"
    }
    
    handleShowSelectedCars(option) {
        this.setState({
            select: option,
        })

    }

    carList = () => {
        let cars = this.props.data.cars
        switch(this.state.select){
            case "all":
                return cars.map(car => <Vehicle car={car} key={car.id} />) 
            
            case "mercedes":
                    cars = cars.filter(car => car.marka === "MERCEDES");
                    return cars.map((car) => <Vehicle car={car} key={car.id} />)

                    case "BMW":
                        cars = cars.filter(car => car.marka === "BMW");
                        return cars.map(car => <Vehicle car={car} key={car.id} />)
                 
        }
    }

    render() {
        return (
            <div>
                <button onClick = {this.handleShowSelectedCars.bind(this, "all" )}>SHOW ALL</button>
                <button onClick = {this.handleShowSelectedCars.bind(this, "BMW" )}>SELECT BMW</button>
                <button onClick = {this.handleShowSelectedCars.bind(this, "mercedes" )}>SELECT MERCEDES</button>
                {this.carList()}
            </div>
        )
    }
}

ReactDOM.render(<ShowCars data={data} />,document.getElementById('root'))