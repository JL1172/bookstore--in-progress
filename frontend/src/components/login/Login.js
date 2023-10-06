import { connect } from "react-redux";
import { changeHandlerForLogin, loginInSubmission } from "../redux/actions/login-actions";


const Login = (props) => {
    const submit = (e) => {
        e.preventDefault();
        const creds = {
            user_username : props.username,
            user_password : props.password,
        }
        props.loginInSubmission(creds);
    }
    return (
        <div>
            <form onSubmit={(e)=> submit(e)}>
                <input type = "text" name = "username" value = {props.username} onChange={(e)=> props.changeHandlerForLogin({name : e.target.name, value : e.target.value})}/>
                <input type = "text" name = "password" value = {props.password} onChange={(e)=> props.changeHandlerForLogin({name : e.target.name, value : e.target.value})}/>
                <input type = "submit" />
            </form>
            {props.message && <p style = {{color : "red"}}>{props.message}</p> }
        </div>
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