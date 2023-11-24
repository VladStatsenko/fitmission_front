import { useNavigate, Link } from "react-router-dom"
import { useEffect } from "react"

function PageNotFound() {

    const navigate = useNavigate()
    useEffect(() => {
        navigate('/error')
    })

    return ('')
}

export default PageNotFound