import { AiFillLinkedin,AiFillGithub, AiOutlineSlack } from "react-icons/ai";

export const Home = () => {
    return (
        <div className="container" style={{backgroundImage: 'url(2.svg)'  }}>
            <span className="size-normal">¡Hola! Me llamo,</span>
            <span className="size-big">César Santillana</span>
            <span className="size-normal gold">FullStack Developer</span>

            <div>
                <AiFillLinkedin className="icons" size={50}/>
                <AiFillGithub className="icons" size={50}/>
                <AiOutlineSlack className="icons" size={50}/>
            </div>
        </div>
    )
}