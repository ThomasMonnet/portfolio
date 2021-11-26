import './home.scss'

const Home = ({ openMenu, colorUser }) => {

  const defaultColor ='#5a2122';
  const borderStyle = {
    border: '0px solid' + defaultColor
  }
  return (
  <div className={openMenu ? "Home" : "Home__close"}>
    <iframe src ="http://oldix.surge.sh" className="video__yt border" style={borderStyle}></iframe>

    <h1 className="Home__title color" style={{ color: defaultColor}}> Bienvenue sur le portfolio de Thomas MONNET</h1>
  </div>

)};

// == Export
export default Home;
