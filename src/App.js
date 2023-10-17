import './App.css';
import profileImage from "./img/me.jpeg"
import { InfoPoint, Recordd, information, studyRecords, jobRecords, hobbies, Person, importantPeople } from './Data';

function InfoPrompt(props){
  return(
    <div>
      <p><b>{props.value.index}: </b> {props.value.value}</p>
    </div>
  )
}

function ListOfInformation(props){
  let els = props.elements;
  let list = els.map((el) =>
    <InfoPrompt value={el}/>
  );
  return(
    <li class="info-list">
      <ul>{list}</ul>
    </li>
  )
}

function HobbyList(props){
  let hobbies = props.elements;
  let list = hobbies.map((element) => 
    <span className="record-prompt">{element}</span>
  );
  return(
    <div>
      <h2>Hobbies:</h2>
      <div className="hobbies">
      <div>{list}</div>
    </div>
    </div>
  )
}

function MainInformationContainer(){
  return(
    <div className="information-container">
      <ProfileImage image={profileImage}/>
      <ListOfInformation elements={information}/>
    </div>
  )
}

function Header(){
  return(
    <div>
      <h1> Personal CV </h1>
      <h3>Made by Kateryna Biriukova for Semantic WEB and Linked Data Course</h3>
    </div>
  )
}

function ProfileImage(props){
  return(
    <div>
      <img width="300px" height="400px" src={props.image} alt="Profile Image"/>
    </div>
  )
}

function RecordPropmt(props){
  return(
    <div className="record-prompt">
      <h3>{props.value.name}</h3>
      <h3>{props.value.start} - {props.value.end}</h3>
      <p>{props.value.description}</p>
      <p><a href={props.value.link} target="_blank"><i>Click on the link!</i></a></p>
    </div>
  )
}

function ListOfRecords(props){
  let els = props.elements;
  let list = els.map((el) =>
    <RecordPropmt value={el}/>
  );
  return(
    <div>
      <h2>{props.heading}</h2>
      <li class="records">
      <ul>{list}</ul>
    </li>
    </div>
  )
}

function RelativePrompt(props){
  let alertinfo = function(){
    alert("More Information about My Family is Available in ontology file!");
  }
  return(
    <div className="record-prompt">
      <h3>{props.value.fullname}</h3>
      <h4><i>{props.value.status}</i></h4>
      <p><button onClick={alertinfo}><i>More Info!</i></button></p>
    </div>
  )
}

function ListOfRelatives(props){
  let els = props.elements;
  let list = els.map((el) =>
    <RelativePrompt value={el}/>
  );
  return(
    <div>
      <h2>Closest Family Members:</h2>
      <div class="hobbies">
      {list}
      </div>
    </div>
  )
}

function Footer(){
  return(
    <div className="footer">
      <h2>That was my General CV! More Information You can see in my ontology file!</h2>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <MainInformationContainer/>
      <ListOfRecords elements={studyRecords} heading="Study Records:"/>
      <ListOfRecords elements={jobRecords} heading="Job and Internship Records: "/>
      <ListOfRelatives elements={importantPeople}/>
      <HobbyList elements={hobbies}/>
      <Footer/>
    </div>
  );
}

export default App;
