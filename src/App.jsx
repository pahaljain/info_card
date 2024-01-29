import './App.css'

function App() {

  return (
    <div className='app'>  
      <h1 className='heading'>Hello React App</h1>

      <div className='container'>
        <div>
          <div className="box">
            <div className="boxHeading">
              <h2>Pahal Jain</h2>
            </div>
              <p>pahal@jain.com</p>
              <p>1234567890</p>
              <button className='btn'>Click to View Details</button>
          </div>
          <div className="box">
            <div className="boxHeading">
              <h2>ABC</h2>
            </div>
              <p>abc@xyz.com</p>
              <p>0123456789</p>
              <button className='btn'>Click to View Details</button>
          </div>
          <div className="box">
            <div className="boxHeading">
              <h2>Pahal Jain</h2>
            </div>
              <p>pahal@jain.com</p>
              <p>1234567890</p>
              <button className='btn'>Click to View Details</button>
          </div>
          
        </div>

        <div className="bigBox">
          <div className="boxHeading">
            <h2>Pahal Jain</h2>
          </div>
            <p>Name : John Smith</p>
            <p>Email : jsmith@test.com</p>
            <p>Phone : 123456789</p>
            <p>City : bangalore</p>
            <p>State : karnataka</p>
            <p>Country : India</p>
            <p>Organization : Company 1</p>
            <p>Job Profile : Software Developer</p>
            <p>Additional Info : Has Bought a lot of products before and a high Value Customer</p>
        </div>
      </div>
    </div>
  )
}

export default App