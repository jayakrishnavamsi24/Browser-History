import {Component} from 'react'
import './index.css'
import BrowserHistoryItem from '../BrowserHistoryItem'

class BrowserHistory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialHistoryList: props.initialHistoryList,
      inputVal: '',
    }
  }

  onChangeSearchInput = event => {
    this.setState({inputVal: event.target.value})
  }

  onDeleteClick = id => {
    const {initialHistoryList} = this.state
    const unDeletedList = initialHistoryList.filter(eachHistoryItem => {
      if (eachHistoryItem.id !== id) {
        return true
      }
      return false
    })

    this.setState({initialHistoryList: unDeletedList})
  }

  render() {
    const {initialHistoryList, inputVal} = this.state
    const filteredHistoryList = initialHistoryList.filter(eachHistoryItem =>
      eachHistoryItem.title.toLowerCase().includes(inputVal.toLowerCase()),
    )

    const filteredHistoryLength = filteredHistoryList.length

    return (
      <div className="bg-container">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-container-outer">
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
              <input
                type="search"
                placeholder="Search history"
                value={inputVal}
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
        </div>
        {filteredHistoryLength > 0 && (
          <ul className="history-list">
            {filteredHistoryList.map(eachHistory => (
              <BrowserHistoryItem
                eachHistory={eachHistory}
                key={eachHistory.id}
                onDeleteClick={this.onDeleteClick}
              />
            ))}
          </ul>
        )}
        {filteredHistoryLength === 0 && (
          <div className="history-empty-view">
            <p>There is no history to show</p>
          </div>
        )}
      </div>
    )
  }
}

export default BrowserHistory
