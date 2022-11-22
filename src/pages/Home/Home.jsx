import "./Home.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Arrow from "../../components/arrow/Arrow";
const Home = (props) => {
  let arrImp = [
    {name: "Julia Joachimowicz", role: "Implementation Coordinator", image: "https://ca.slack-edge.com/T3674A3GR-U01G1QXSDAN-508642b13f2e-512"},
    {name: "Emma Mallon", role: "Implementation Coordinator", image: "https://ca.slack-edge.com/T3674A3GR-U034F955XA4-f8189fb42b83-512"},
    {name: "Jen Grajkowski", role: "Implementation Manager", image: "https://ca.slack-edge.com/T3674A3GR-U02QQ40B01G-e755a7b713c1-512"},
    {name: "Jennifer Guo", role: "Implementation Manager", image: "https://ca.slack-edge.com/T3674A3GR-UQLJ3G88G-14908240a5ad-512"},
    {name: "Luis Díaz", role: "Implementation Coordinator", image: "https://ca.slack-edge.com/T3674A3GR-U049DV4TPUK-9b72b9a4747c-512"},
    {name: "Julianna Hindemith", role: "Implementation Manager", image: "https://ca.slack-edge.com/T3674A3GR-U01MSC1CKFY-7056563d268b-512"},
    {name: "Eduardo Arrangóiz", role: "Implementation Coordinator", image: "https://ca.slack-edge.com/T3674A3GR-U048CJ80J03-040fe145e0be-512"},
  ]

  let arrDCQ = [
    {name: "Abner Rojas", role: "Web Developer III", image: "https://ca.slack-edge.com/T3674A3GR-U02HH85R2Q6-ga500facabd7-512"},
    {name: "Augusto Pavía Rosas", role: "Quality Assurance Analyst", image: "https://ca.slack-edge.com/T3674A3GR-U048DHAAYM8-8b995173d356-512"},
    {name: "Cesar Villegas", role: "Web Developer I ", image: "https://ca.slack-edge.com/T3674A3GR-U0472MVSEQ0-03679e8a6746-512"},
    {name: "Michael Li", role: "Web Developer I", image: "https://ca.slack-edge.com/T3674A3GR-U02PL9EPG77-010946b89561-512"},
    {name: "Jéssica Motta", role: "Web Developer I", image: "https://ca.slack-edge.com/T3674A3GR-U044074ACBZ-f951b79ac1f5-512"},
    {name: "Kathryn Robertson", role: "Data Entry Specialist", image: "https://ca.slack-edge.com/T3674A3GR-U02HS6BNJBW-c2aecadceb4b-512"},
    {name: "Marcos Herrera", role: "Web Developer II", image: "https://ca.slack-edge.com/T3674A3GR-U045BE6TXUM-75abca970f37-512"},
    {name: "Shaun Seeram", role: "Web Developer I", image: "https://ca.slack-edge.com/T3674A3GR-U02RT1W7E12-2f07fa2d3d7e-512"},
    {name: "Enrique Lozano", role: "Data Entry Specialist", image: "profile-placeholder.png"},
    {name: "Filip Swierczynski", role: "Web Developer II", image: "profile-placeholder.png"},
    {name: "Joao Dantas", role: "Web Developer II", image: "https://ca.slack-edge.com/T3674A3GR-U042JKZTDD0-eeff94212cbe-512"},
    {name: "Robert Ling", role: "Quality Assurance Analyst", image: "https://ca.slack-edge.com/T3674A3GR-UV57514PJ-81989926a80a-512"},
  ]
  const [guests, setGuests] = useState({ name: "", role: "", image: "profile-placeholder.png"})
  const [guestsArr, setGuestsArr] = useState([])

  // const [checked, setChecked] = useState([])
const checked = props.checked;
const setChecked = props.setChecked;
const checked2 = props.checked2;
const setChecked2 = props.setChecked2;
useEffect(() => {
  setChecked([])
}, [setChecked])
useEffect(() => {
  setChecked2([])
}, [setChecked2])


  const handleCheck = (event) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, {name: event.target.value, role: event.target.role, checked: event.target.checked, image: event.target.name }];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };
  const handleCheck2 = (event) => {
    let updatedList = [...checked2];
    if (event.target.checked) {
      updatedList = [...checked2, {name: event.target.value, role: event.target.role, checked: event.target.checked, image: event.target.name }];
    } else {
      updatedList.splice(checked2.indexOf(event.target.value), 1);
    }
    setChecked2(updatedList);
  };
  const handleInputText = (event) => {
      setGuests({
        ...guests,
        [event.target.name] : event.target.value
  })
  }
  const [appear, setAppear] = useState(false)

  const handleAppear = ()=>{
    setAppear(!appear)
  }
  const handleCancel = ()=>{
    setAppear(false)
  }
  const handleAddGuest = ()=> {
    setGuestsArr([...guestsArr, guests])
    console.log("1")
    setGuests({ name: "", role: "", image: "../../assets/profile-placeholder.png"})
    setAppear(false)

  }
  return (
    <>
      <Link to="/"><Arrow className="back-svg" width="50px"  height="50px" fill="#ffff" /></Link>
      <div id="members">
        <h1>Who will be joining us today?</h1>
        <div className="second-head">Implementation Managers, Specialists & Coordinators <span className="tinySub">Select all who apply:</span></div>
        <div className="container-members">
          {arrImp.map((el, index) => 
          <span key={index} className="inputs-members">
            <label><input type="checkbox"  value={el.name} role={el.role} name={el.image} onChange={(event)=> handleCheck(event)}/> {el.name}</label>
          </span>
          )}
        </div>
        <div className="second-head">Devs, Content & QA <span className="tinySub">Select all who apply:</span></div>
        <div className="container-members">
          {arrDCQ.map((el, index) =>
          <span key={index} className="inputs-members">
            <label><input type="checkbox"  value={el.name} role={el.role} name={el.image} onChange={(event)=> handleCheck2(event)}/> {el.name}</label>
          </span>
          )}
        </div>
        <div className="second-head">Additional Guests</div>
        { guestsArr.map((el, index) => 
          <span key={index} className="inputs-members">
            <label><input type="checkbox"  value={el.name} role={el.role} name={el.image} onChange={(event)=> handleCheck2(event)}/> {el.name}</label>
          </span>) 
        }
        {
          !appear ? 
          <>
          <div className="newGuest" onClick={handleAppear}>Add new guest</div>
          <Link to="/standup"><button className="extra-space">Start Meeting</button></Link>
          </> : (
            <>
              <label className="tinySub">Full Name</label>
              <input onChange={handleInputText} name="name" value={guests.name} type="text"></input>
              <label className="tinySub">Role</label>
              <input onChange={handleInputText} name="role" value={guests.role} type="text"></input>
              <span>
                <button className="extra-space" onClick={handleAddGuest}>Add Guest</button>
                <button className="btn-cancel extra-space" onClick={handleCancel}>Cancel</button>
              </span>
            </>
          ) 
        }
      </div>
    </>
  )
}

export default Home