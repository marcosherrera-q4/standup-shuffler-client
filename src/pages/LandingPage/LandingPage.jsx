import { Link } from "react-router-dom"
import "./LandingPage.scss"

const LandingPage = () => {
  return (
    <div id="landing">
        <h1>Diamond Hands Squad</h1>
        <p className="subheader">Daily Standup Meeting</p>
          <Link to="/home"><button>Start</button></Link>
    </div>
  )
}

export default LandingPage