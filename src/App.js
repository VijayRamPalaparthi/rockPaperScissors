import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    resultShow: false,
    resultStatus: 'YOU WON',
    myChoice: choicesList[0],
    opponentChoice: choicesList[0],
  }

  changeResultShow = () => {
    this.setState(prev => ({
      resultShow: !prev.resultShow,
    }))
  }

  onClickIcon = id => {
    const filtered = choicesList.filter(each => each.id === id)
    const filteredObject = filtered[0]
    const randomNumber = Math.floor(Math.random() * 3)
    const randomObject = choicesList[randomNumber]
    console.log(randomNumber)

    if (filteredObject.id === 'ROCK') {
      if (randomObject.id === 'SCISSORS') {
        this.setState(prev => ({
          score: prev.score + 1,
          resultStatus: 'YOU WON',
          myChoice: filteredObject,
          resultShow: true,
          opponentChoice: randomObject,
        }))
      } else if (randomObject.id === 'PAPER') {
        this.setState(prev => ({
          score: prev.score - 1,
          resultStatus: 'YOU LOSE',
          myChoice: filteredObject,
          resultShow: true,
          opponentChoice: randomObject,
        }))
      } else {
        this.setState({
          resultStatus: 'IT IS DRAW',
          myChoice: filteredObject,
          resultShow: true,
          opponentChoice: randomObject,
        })
      }
    }

    if (filteredObject.id === 'SCISSORS') {
      if (randomObject.id === 'ROCK') {
        this.setState(prev => ({
          score: prev.score - 1,
          resultStatus: 'YOU LOSE',
          myChoice: filteredObject,
          resultShow: true,
          opponentChoice: randomObject,
        }))
      } else if (randomObject.id === 'PAPER') {
        this.setState(prev => ({
          score: prev.score + 1,
          resultStatus: 'YOU WON',
          myChoice: filteredObject,
          resultShow: true,
          opponentChoice: randomObject,
        }))
      } else {
        this.setState({
          resultStatus: 'IT IS DRAW',
          myChoice: filteredObject,
          resultShow: true,
          opponentChoice: randomObject,
        })
      }
    }

    if (filteredObject.id === 'PAPER') {
      if (randomObject.id === 'ROCK') {
        this.setState(prev => ({
          score: prev.score + 1,
          resultStatus: 'YOU WON',
          myChoice: filteredObject,
          resultShow: true,
          opponentChoice: randomObject,
        }))
      } else if (randomObject.id === 'SCISSORS') {
        this.setState(prev => ({
          score: prev.score - 1,
          resultStatus: 'YOU LOSE',
          myChoice: filteredObject,
          resultShow: true,
          opponentChoice: randomObject,
        }))
      } else {
        this.setState({
          resultStatus: 'IT IS DRAW',
          myChoice: filteredObject,
          resultShow: true,
          opponentChoice: randomObject,
        })
      }
    }
  }

  render() {
    const {
      score,
      resultShow,
      myChoice,
      opponentChoice,
      resultStatus,
    } = this.state
    return (
      <div className="bg-container">
        <div className="head-container">
          <div className="name-container">
            <h1 className="name">
              {' '}
              Rock <br /> Paper <br /> Scissors{' '}
            </h1>
          </div>
          <div className="score-container">
            <p className="score"> Score</p>
            <p className="score-count">{score} </p>
          </div>
        </div>
        {resultShow ? (
          <div className="result-container">
            <div className="result">
              <div className="choice">
                <p className="name"> YOU </p>
                <img
                  src={myChoice.imageUrl}
                  alt="your choice"
                  className="image"
                />
              </div>

              <div className="choice">
                <p className="name"> OPPONENT </p>
                <img
                  src={opponentChoice.imageUrl}
                  alt="opponent choice"
                  className="image"
                />
              </div>
            </div>
            <p className="result-heading"> {resultStatus} </p>
            <button
              className="play-again"
              type="button"
              onClick={this.changeResultShow}
            >
              PLAY AGAIN{' '}
            </button>
          </div>
        ) : (
          <ul className="body-container">
            {choicesList.map(each => {
              const onClickImage = () => {
                this.onClickIcon(each.id)
              }
              const type = each.id.toLowerCase()
              const value = `${type}Button`
              console.log(value)
              return (
                <li key={each.id}>
                  {' '}
                  <button
                    className="button"
                    type="button"
                    onClick={onClickImage}
                    data-testid={value}
                  >
                    <img src={each.imageUrl} alt={each.id} className="image" />
                  </button>{' '}
                </li>
              )
            })}
          </ul>
        )}
        <Popup
          modal
          trigger={
            <button type="button" className="rules-button">
              {' '}
              Rules
            </button>
          }
        >
          {close => (
            <div className="popup-container">
              <button className="close-button" type="button" onClick={close}>
                {}
                <RiCloseLine size={20} />
              </button>

              <img
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
                className="popup-image"
              />
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

export default App
