import Card from "../components/shared/Card"
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this Project</h1>
            <p>This is a React app to leave a Feedback fo a the fil cops don't play around!</p>
            <p>Version:1.0.0</p>

            <p>
                <Link to="/">Back To Home</Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage