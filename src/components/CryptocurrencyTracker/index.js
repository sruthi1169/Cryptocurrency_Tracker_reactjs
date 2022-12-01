import './index.css'
import CryptocurrenciesList from '../CryptocurrenciesList'

const CryptocurrencyTracker = () => (
  <div className="bg-container">
    <h1 className="heading">Cryptocurrency Tracker</h1>
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="image"
      />
    </div>
    <CryptocurrenciesList />
  </div>
)
export default CryptocurrencyTracker
