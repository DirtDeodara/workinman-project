import { useState, SetStateAction } from "react"
import frogOnLilypad from "../assets/frog-on-lilypad.svg"
import frogJumping from "../assets/frog-jumping.svg"
import myStar from "../assets/my-star.svg"

const Frog = () => {
  const [frogClicked, setFrogClicked] = useState(false)

  return (
    <img
      className={frogClicked ? "frogJumping" : "frogOnLilypad"}
      src={myStar}
      alt="frog on a lilypad"
      onClick={() => setFrogClicked(!frogClicked)}
    />
  )
}

export default Frog
