import './index.css'
import React from "react"
import ReactDOM from 'react-dom'
import App from './App'
import { useParams } from 'react-router'

const BlogParams = () => {
    const {id} = useParams()

}
ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')  
    );

//}

//export default BlogParams;