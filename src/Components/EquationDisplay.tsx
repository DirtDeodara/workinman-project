import "./equationDisplay.css"
import { ReactComponent as One } from "../assets/new-one.svg"
import { ReactComponent as Two } from "../assets/2.svg"
import { ReactComponent as Three } from "../assets/3.svg"
import { ReactComponent as Four } from "../assets/4.svg"
import { ReactComponent as Five } from "../assets/5.svg"
import { ReactComponent as Six } from "../assets/6.svg"
import { ReactComponent as Seven } from "../assets/7.svg"
import { ReactComponent as Eight } from "../assets/8.svg"
import { ReactComponent as Nine } from "../assets/9.svg"
import { ReactComponent as Zero } from "../assets/0.svg"
import { ReactComponent as Plus } from "../assets/plus.svg"
import { ReactComponent as Minus } from "../assets/minus.svg"
import { ReactComponent as Equal } from "../assets/equal.svg"
import { useAppContext } from "../stores/AppProvider"

const EquationDisplay = () => {
  const { userAnswer, partsOfEquation } = useAppContext()
  const { a, b, operator } = partsOfEquation
  const generateIcons = (value: string) => {
    switch (value) {
        case "1":
          return <One />
        case "2":
          return <Two />
        case "3":
          return <Three />
        case "4":
          return <Four />
        case "5":
          return <Five />
        case "6":
          return <Six />
        case "7":
          return <Seven />
        case "8":
          return <Eight />
        case "9":
          return <Nine />
        case "0":
          return <Zero />
        case "+":
          return <Plus />
        case "-":
          return <Minus />
        default:
          return null
      }
  }
  const aToDisplay = a
    .toString()
    .split("")
    .map((number) => generateIcons(number))

  const bToDisplay = b
    .toString()
    .split("")
    .map((number) => generateIcons(number))

const answerToDisplay = userAnswer.split("").map((number) => generateIcons(number))

  return (
    <div className="equationContainer">
      <div className="element">{aToDisplay}</div>
      <div className="element">{generateIcons(operator)}</div>
      <div className="element">{bToDisplay}</div>
      <div className="element"><Equal /></div>
      <div className="element">{answerToDisplay}</div>
    </div>
  )
}

export default EquationDisplay
