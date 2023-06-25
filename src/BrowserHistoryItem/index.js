import React, {useState} from 'react'
import './index.css'

const BrowserHistoryItem = props => {
  const {eachHistory, onDeleteClick} = props
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)

  const deleteClick = () => {
    setIsAudioPlaying(true)
    const audio = new Audio('../../delete-click.wav')
    audio.play()
    setIsAudioPlaying(false)
    onDeleteClick(eachHistory.id)
  }

  return (
    <li className="history-item-with-time">
      <p className="time">{eachHistory.timeAccessed}</p>
      <div className="history-item">
        <img
          src={eachHistory.logoUrl}
          alt="domain logo"
          className="company-logo"
        />
        <div className="txt-container">
          <p className="title">{eachHistory.title}</p>
          <p className="domain-url">{eachHistory.domainUrl}</p>
        </div>
        <button type="button" onClick={deleteClick} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistoryItem
