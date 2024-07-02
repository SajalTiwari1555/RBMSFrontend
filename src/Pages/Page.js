

export default function Page() {

  return (
      <>
      
      <div>
        <h1>Contact Us</h1>
        <form >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            
            required
          /><br /><br />
  
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            
            required
          /><br /><br />
  
          <label htmlFor="message">Message:</label><br />
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            
            required
          ></textarea><br /><br />
  
          <button type="submit">Submit</button>
        </form>
      </div>
      </>
    );
  }
  