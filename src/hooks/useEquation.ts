import { useMemo, useState } from "react"

const useEquation = () => {
  const [userAnswer, setUserAnswer] = useState("")
  const [numOfCorrectAnswers, setNumOfCorrectAnswers] = useState(0)

  const partsOfEquation = useMemo(() => {
    const max = numOfCorrectAnswers < 2 ? 9 : 20 //TODO this should be a switch statement eventually to allow for more stages
    const a = Math.ceil(Math.random() * max)
    const b = Math.ceil(Math.random() * max)
    const operator = true ? "+" : "-"

    return {
      a,
      b,
      operator,
    }
  }, [numOfCorrectAnswers])

  const evaluateUserAnswer = () => {
    const { a, b, operator } = partsOfEquation
    let result
    switch (operator) {
      case "+":
        result = a + b
        break
      case "-":
        result = a - b
        break

      default:
        break
    }
    if (parseInt(userAnswer) === result) {
      setNumOfCorrectAnswers((prevState) => prevState + 1)
      setUserAnswer("CORRECT!")
      setTimeout(() => {
        setUserAnswer("")
      }, 2000)
    } else {
      setUserAnswer("")
    }
  }

  return {
    userAnswer,
    setUserAnswer,
    partsOfEquation,
    evaluateUserAnswer,
  }
}

export default useEquation
