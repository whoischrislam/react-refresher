import './App.css'
import ProfilePicture from './components/ProfilePicture'

export default function App() {
  return (
    <div id="card">
      <ProfilePicture />
      <div id="profile-info">
        <h1>NuanceOne</h1>
        <h2>Currently playing</h2>
        <div className="tag-group">
          <p className="tags">Fallout 76</p>
          <p className="tags">Helldivers 2</p>
          <p className="tags">Diablo 4</p>
        </div>
        <h2>Playstyle</h2>
        <div className="tag-group">
          <p className="tags">Casual</p>
          <p className="tags">Variety</p>
          <p className="tags">Speedrunner</p>
        </div>
        <h2>Platforms</h2>
        <div className="tag-group">
          <p className="tags">PC</p>
          <p className="tags">Steam Deck</p>
          <p className="tags">Nintendo Switch</p>
        </div>
        <h2>Gamers I want to play with</h2>
        <p>I like gamers who play cooperatively and chill.</p>
        <button>Request a PlaySesh</button>
      </div>
    </div>
  )
}