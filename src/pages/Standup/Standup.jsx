import {useState} from 'react'
import { Link } from 'react-router-dom';
import shuffle from '../../helpers/shuffle';
import Moment from 'react-moment';
import "./StandUp.scss"
import Arrow from '../../components/arrow/Arrow';
import Mic from '../../components/mic/Mic'

const Standup = (props) => {
  const checked = shuffle(props.checked);
  const setChecked = props.setChecked;
  const date = new Date();

  const [participated, setParticipated] = useState([]);
  const [appearHead, setAppearHead] = useState(false)


  const handleReset = ()=>{
    setChecked([]);
  }
  const handleNextSpeaker = ()=>{
    setAppearHead(true);
    let removed = checked.shift();
    setParticipated([...participated, removed])

  }
  return (
    <div id="container--standup">
    <Link to="/home"><Arrow className="back-svg" width="50px"  height="50px" fill="#ffff" onClick={handleReset}/></Link>
    <h1 className='less-margin'>Standup Meeting</h1>
    <Moment className='second-head' format="MMMM Do, YYYY">{date}</Moment>

        { checked.length ?
          <>
          <h2 className='subheader-standup'>Currently speaking
          <Mic className='mic-overlay' />
          </h2>
            <img className='member-image' src={checked[0].image} alt={checked[0].name} />
            <div className='member-name'>{checked[0].name}
            </div>
            <div>{checked[0].role}</div>
            <button onClick={handleNextSpeaker}>Next</button>
          </> : 
          <div className='no-items-container'>
            <h2>Finished ✅</h2>
            <Link to="/home"><div onClick={handleReset}>Back to Home Page</div></Link>
            </div>
        }
        <div>
        {
          appearHead ? <span className='title-participated'>Participated Squad Members:</span> : null
        }
        <span className='list-container'>
          {
            participated && participated.map((el, index)=> 
            <span key={index}>{el.name}</span>
            )
          }
        </span>
        </div>
    </div>
  )
}

export default Standup