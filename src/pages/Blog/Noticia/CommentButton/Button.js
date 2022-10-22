import React, {useState} from "react"

const Button = () => {
    const commentsTree = useRef(null)
    const [isActive, setIsActive] = useState(false)
    const onClick2 = () => setIsActive(!isActive)

    return(
        <button
        className="blogBtnArvoreComentarios"
        onClick={onClick2}>
    comentarios</button>
    )
}
export default Button