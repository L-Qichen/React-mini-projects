import { useState } from 'react'

const Login = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name == "" || user.email == "" || user.password == "") {
      alert("Please insert All three fields.");
    } else {
      console.log(user);
      setUser({
        name: "",
        email: "",
        password: "",
      });
    }
  }

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className='component-container'>
      <h1>Registration Form</h1>
      <form className='registration-form' onSubmit={handleSubmit}>

        <label htmlFor='name'>Name: </label>
        <input type='text'
          id='name'
          className='name'
          name='name'
          value={user.name}
          onChange={handleInputChange} />

        <label htmlFor='email'>Email: </label>
        <input type='email'
          id='email'
          className='email'
          name='email'
          value={user.email}
          onChange={handleInputChange} />

        <label htmlFor='password'>Password: </label>
        <input type='password'
          id='password'
          className='password'
          name='password'
          value={user.password}
          onChange={handleInputChange} />

        <button type='submit' className='btn'>Submit</button>
      </form>
    </div>
  );
};

export default Login