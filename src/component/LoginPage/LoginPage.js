import React , {Component} from 'react';
import './LoginPage.css';
import {login} from '../../services/Userfunction';

class LoginPage extends Component {
  constructor()
  {
    super();
    this.state = {
      emailId  : '',
      password : '',
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

  }

  onChange(e) {
    this.setState({[e.target.name] : e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()
    const user = {
      emailId  : this.state.emailId,
      password : this.state.password
    }
    
    login(user).then(res => {
      console.log("userDetails", res)
      console.log(user)
      if(res)
      {
        this.props.history.push(`/home`)
      }
    })

  }
  render(){
    return(
     <div className="Login">
     <form  onSubmit = {this.onSubmit}>
         
        <p>Enter EmailId:</p>
        <input type='email' name='emailId' onChange={this.onChange} />

        <p>Enter Password:</p>
        <input type='password' name='password' onChange={this.onChange} />

        <input type="submit" value="submit" name="submit"  />

     </form>
     </div>
    );
  }
}

export default LoginPage;
