import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className='text-center'>Contact us</h1>
      <form>
        <label>Name</label><br></br>
        <input type="text"placeholder="enter your name"/><br></br>
        <label>Email address</label><br></br>
       <input type="text" placeholder="name@example.com"/><br></br>
       <label>password</label><br></br>
       <textarea cols="25"rows="5"placeholder="enter your message"/><br></br>
      </form>
    </div>
  )
}

export default Contact