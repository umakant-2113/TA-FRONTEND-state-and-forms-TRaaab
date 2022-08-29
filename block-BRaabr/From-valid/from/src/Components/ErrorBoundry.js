import React from 'react';
class ErrorValidation extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      errorS: {
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
  };

  validEmail = (email) => {
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
    return pattern.test(email);
  };

  inputHandle = ({ target }) => {
    let { name, value } = target;

    let errorS = this.state.errorS;
    // console.log(target.value)

    switch (name) {
      case 'userName':
        errorS.userName = value
          ? value.length > 3
            ? ' '
            : 'User Name more then 3 letters'
          : 'username is required ';

        break;

      case 'email':
        errorS.email = this.validEmail(value) ? ' ' : 'Email is not valid';
        break;
      case 'password':
        errorS.password =
          value.length > 6 ? ' ' : 'password more then 6 character';
        break;
      case 'confirmPassword':
        errorS.confirmPassword =
          this.state.password == value ? ' ' : ' Required password';
      default:
        break;
    }

    this.setState({
      [name]: value,
      errorS,
    });
  };

  fun1 = (a) => {
    return (
      <input
        className='submit'
        type='submit'
        value='submit'
        disabled={
          a.userName == '' ||
          a.email == '' ||
          a.password == '' ||
          a.confirmPassword == ''
            ? true
            : false
        }
      />
    );
  };

  render() {
    let { userName, email, password, confirmPassword } = this.state.errorS;
    console.log(userName, email, password, confirmPassword);

    return (
      <>
        <section className='section'>
          <h1> Error Handling Form </h1>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor=''>User Name </label>
            <input
              type='text'
              name='userName'
              value={this.state.userName}
              onChange={this.inputHandle}
              placeholder='Enter Name'
              className={userName ? '' : 'error'}
            />
            <span>{userName} </span>
            <label htmlFor=''>Email </label>
            <input
              type='email'
              name='email'
              value={this.state.email}
              onChange={this.inputHandle}
              placeholder='Enter Email'
              className={email ? '' : 'error'}
            />
            <span>{email} </span>
            <label htmlFor=''>Password</label>
            <input
              type='password'
              name='password'
              value={this.state.password}
              onChange={this.inputHandle}
              placeholder='Enter Password'
              className={password ? '' : 'error'}
            />
            <span>{password} </span>
            <label htmlFor=''> Confirm Password</label>
            <input
              type='password'
              name='confirmPassword'
              value={this.state.confirmPassword}
              onChange={this.inputHandle}
              placeholder='Enter Password'
              className={confirmPassword ? '' : 'error'}
            />
            <span>{confirmPassword} </span>
            {this.fun1(this.state.errorS)}
          </form>
        </section>
      </>
    );
  }
}

export default ErrorValidation;
