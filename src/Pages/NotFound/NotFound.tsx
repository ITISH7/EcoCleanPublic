import { Link } from "react-router-dom"

const NotFound:React.FC=()=>{
    return(
        <div>
            <h1>Error~404: Page Not Found</h1>
            <Link to="/">Return to Home page</Link>
        </div>
    )
}
export default NotFound