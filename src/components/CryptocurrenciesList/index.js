import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class CryptocurrenciesList extends Component {
  state = {cryptoCurrencyData: [], isLoading: true}

  componentDidMount() {
    this.getCryptoCurrency()
  }

  getCryptoCurrency = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updateCryptoData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogoUrl: eachItem.currency_logo,
    }))

    this.setState({cryptoCurrencyData: updateCryptoData, isLoading: false})
  }

  render() {
    const {cryptoCurrencyData, isLoading} = this.state

    return (
      <div className="cryptocurrencies-list-container">
        <div className="list-header">
          <p className="list-coin-type-heading">Coin Type</p>
          <div className="usd-and-euro-values-container">
            <p className="list-coin-value-heading">USD</p>
            <p className="list-coin-value-heading">EURO</p>
          </div>
        </div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="cryptocurrencies-list">
            {cryptoCurrencyData.map(eachCryptocurrency => (
              <CryptocurrencyItem
                key={eachCryptocurrency.id}
                cryptocurrencyDetails={eachCryptocurrency}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
