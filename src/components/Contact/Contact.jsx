import React from 'react'

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  }
  return (
    <>
      <div className='container'>
        <h3>Contact Me</h3>
        <form action="https://formspree.io/f/xdkwywel" method='POST'>
          <div className='labelInput'>
            {/* <label htmlFor="name">Full Name</label> */}
            <input type="text" name='name' placeholder="Full Name" />
          </div>
          <div className='labelInput'>
            {/* <label htmlFor="email">Email</label> */}
            <input type="text" name='email' placeholder="Email" />
          </div>
          <div className='labelInput'>
            {/* <label htmlFor="message">Message</label> */}
            <textarea type="text" name='message' placeholder=" write your message here" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}
