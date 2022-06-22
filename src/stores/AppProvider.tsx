import { useContext, createContext, Dispatch, SetStateAction } from "react"
import useEquation from "../hooks/useEquation"

type Props = { children?: JSX.Element }

type AppState = {
  userAnswer: string
  setUserAnswer: Dispatch<SetStateAction<string>>
  partsOfEquation: { a: number; b: number; operator: string }
  evaluateUserAnswer: () => void
  numOfCorrectAnswers: number
  isCorrect: boolean
  hasSubmitted: boolean
}

const initalContext = {
  userAnswer: "",
  setUserAnswer: () => {},
  partsOfEquation: {
    a: Math.ceil(Math.random() * 9),
    b: Math.ceil(Math.random() * 9),
    operator: "+",
  },
  evaluateUserAnswer: () => {},
  numOfCorrectAnswers: 0,
  isCorrect: false,
  hasSubmitted: false,
}

const AppContext = createContext<AppState>(initalContext)

const AppProvider = ({ children }: Props) => {
  const equationContext = useEquation()

  return (
    <AppContext.Provider value={{ ...equationContext }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  const context = useContext(AppContext)

  if (context === undefined)
    throw new Error("Cant access context outside of the provider")

  return context
}

export { AppProvider, useAppContext }
