import './oldix.scss'

const Oldix = ({ openMenu }) => (
  <div className={openMenu ? "projet" : "projet__close"}>
    <iframe src="http://oldix.surge.sh" className="projet__iframe"/>
  </div>
)

export default Oldix;
