import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>

        

            <main>
             <h1>Contact Us</h1>
            <form >
                <div>
                    <label >Name</label>
                    <input type="text" required placeholder='ABC' />
                </div>

                <div>
                    <label >Name</label>
                    <input type="email" required placeholder='ABC@gmail.com' />
                </div>

                <div>
                    <label >Message</label>
                    <input type="text" required placeholder='Tell about your query' />
                </div>

                <button type='submit'>Send</button>
                </form>
            </main>
       
    </div>
  )
}

export default Contact