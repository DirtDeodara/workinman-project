import "./numbersPad.css"
import { numberButtonIconMap } from "../utils/numberIcons"
import { ReactComponent as Answer } from "../assets/answer_btn.svg"
import { useAppContext } from "../stores/AppProvider"

// TODO fix this type of any nonsense
const NumbersPad = (): any => {
  const { setUserAnswer, evaluateUserAnswer } = useAppContext()
  const numberIconArray = Object.entries(numberButtonIconMap)

  return (
    <div className="numPadContainer">
      <button className="answerBtn" onClick={() => evaluateUserAnswer()}>
        <Answer />
      </button>
      <div className="flexbox">
        {numberIconArray.map(([key, value], i) => {
          const Icon = value.icon
          const number = value.number
          return (
            <button
              key={i}
              className="numBtn"
              onClick={() => {
                setUserAnswer((prevState: string) => {
                  return prevState + number
                })
              }}
            >
              <Icon />
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default NumbersPad
