const CityPromotion = (props) => {
    const { cityInformation } = props;
    console.log("city info", cityInformation)
    return (
        <div>
            <h3>Travelling to <span>{cityInformation.cityName}? Know more about it.</span></h3>
            <h5>{cityInformation.weather}</h5>
            <p>{cityInformation.description}</p>
        </div>
    )
}

export default CityPromotion;