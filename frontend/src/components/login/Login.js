import { connect } from "react-redux";
import { changeHandlerForLogin, loginInSubmission } from "../redux/actions/login-actions";
import { StyledLogin } from "../../styles/StyledLogin";
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai";
import {CgProfile} from "react-icons/cg"
import {BsSquare,BsTriangle} from "react-icons/bs"
import {PiDotOutlineLight} from "react-icons/pi";

const Login = (props) => {
    const submit = (e) => {
        e.preventDefault();
        const creds = {
            user_username : props.username,
            user_password : props.password,
        }
        console.log(creds)
        props.loginInSubmission(creds);
    }
    return (
        <StyledLogin username = {props.username} password = {props.password}>
            <form onSubmit={(e)=> submit(e)}>
                <CgProfile id = "profIcon" />
                <h1>Login to Your Account</h1>
                <div id = "formContainer">
                <div className = "float first">
                <label className="floater1">Username</label>
                <input  type = "text" name = "username" value = {props.username} onChange={(e)=> props.changeHandlerForLogin({name : e.target.name, value : e.target.value})}/>
                </div>
                <div className = "float">
                <label className="floater2">Password</label>
                <input  type = "password" name = "password" value = {props.password} onChange={(e)=> props.changeHandlerForLogin({name : e.target.name, value : e.target.value})}/>
                </div>
                </div>
                <input  type = "submit" value = "Sign In" />
            </form>



            {props.message && <p style = {{color : "red"}}>{props.message}</p> }
            {Array(10).fill(0).map((n,i)=> {
            return <BsSquare key = {i} className={`squares squares${i}`}/>
            })
        }
        {Array(15).fill(0).map((n,i)=> {
            if (i > 10 ) {
                return <BsTriangle key = {i} className={`squares squares${i}`} />
            }
        })}
        {Array(20).fill(0).map((n,i)=> {
            if (i >= 10 ) {
                return <PiDotOutlineLight key = {i} className={`squares squares${i}`} />
            }
        })}
        </StyledLogin>
    )
}

const mapStateToProps = state => {
    return {
        username : state.loginState.username,
        password : state.loginState.password,
        message : state.loginState.message,

    }
}

export default connect(mapStateToProps,{changeHandlerForLogin, loginInSubmission})(Login)