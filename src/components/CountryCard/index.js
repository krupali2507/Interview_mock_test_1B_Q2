import './index.css'

const CountryCard = props => {
  const {countryDetail, onRemovingFromVisitedList} = props

  const {id, name, imageUrl} = countryDetail

  const onRemoveCountry = () => {
    onRemovingFromVisitedList(id)
  }

  return (
    <li className="visited-country-container">
      <img src={imageUrl} alt="thumbnail" className="country-flag" />
      <div className="name-remove-container">
        <p>{name}</p>
        <button type="button" onClick={onRemoveCountry}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default CountryCard
