
import './App.css';
import './style.css';
import Img from "./informatique.jpg"
function App() {
  return (

    <div className="App">

      <div style={{ border: 'solid 1px black', maxWidth: '100vw' }}>

        <h1 className="title red">Shaouki sallemi </h1>
        

<br />
<img src={Img} alt="dev"/>
<br />
<img src="/dev.jpg" alt="myimage" />

<video width='320' height='240' >
<source src="TOYOTA - Nouvelle YARIS[Mpgun.com].mp4" type="video/mp4"  />
</video> 


</div>


     






    </div>
  );
}

export default App;
