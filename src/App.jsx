import './App.css'
import gptlogo from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'
import sendBtn from './assets/send.svg'
import userIcon from './assets/user-icon.png'
import gptImgLogo from './assets/chatgptLogo.svg'




function App() {

  return (
    <div className="App">

      {/* Sidebar */}
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptlogo} alt="Logo" className='logo'/>
            <span className="brand">ChatGPT</span>
          </div>
          <button className='midBtn'><img src={addBtn} alt="New Chat" className="addBtn" />New Chat</button>
          <div className="upperSideBottom">
            <button className="query"><img src={msgIcon} alt="Query" />What is Programming?</button>
            <button className="query"><img src={msgIcon} alt="Query" />How to use an API?</button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems"><img src={home} alt="Home" className="listItemsImg" />Home</div>
          <div className="listItems"><img src={saved} alt="Saved" className="listItemsImg" />Saved</div>
          <div className="listItems"><img src={rocket} alt="Upgrade" className="listItemsImg" />Upgrade to Pro</div>
        </div>
      </div>

      {/* Main  */}
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className='chatImg' src={userIcon} alt="" />
            <p className="txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse eum nemo inventore itaque. Minus ab officia maxime atque quas vitae!</p>
          </div>
          <div className="chat bot">
            <img className='chatImg' src={gptImgLogo} alt="" />
            <p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi quo ullam aperiam vero et inventore aut blanditiis assumenda, in odit suscipit iste autem nulla eum atque placeat pariatur corporis omnis laboriosam a. Dolores libero ratione ipsam aliquam ad iste quibusdam, nulla porro blanditiis fugit impedit perspiciatis. Optio asperiores perferendis officia rem accusamus ratione quae! Inventore reprehenderit voluptatem eaque sed, vel esse impedit voluptatum minus dolor rerum earum in dolores culpa nam necessitatibus repellendus quod aspernatur quisquam sint aut sit ex distinctio possimus! Dolorum, excepturi distinctio. Atque necessitatibus, id nobis exercitationem eveniet ex hic accusamus, voluptas deserunt aspernatur, consequatur quo!</p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Send a message'/>
            <button className='send'><img src={sendBtn} alt="Send"/></button>
          </div>
          <p>ChatGPT may produce incorrect information about people, places, or facts. ChatGPT December 28 Version</p>
        </div>
      </div>
    </div>
  )
}

export default App
