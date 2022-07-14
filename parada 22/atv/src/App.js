import './App.css';
import Header from './header'
import Somas from './soma'
import Subtracao from './subtracao'
import Multiplicacao from './multiplicacao'
import Divisao from './divisao'

//function BemVindo(props){

//  return <h1>Oi, {props.name}</h1>

//}



//const nome = <BemVindo name="lkfdfh" />



//const BemVindo = (props) => <h3>Bem vindo</h3>



const Turma = (props) => 
{

  return(

    <div>

      <Aluno nome={props.nome} nota={props.nota} idade={props.idade} />

    </div>

  );

}



const Aluno = (props) => 
{

  return(

    <div>

      <h2>O(a) aluno(a) {props.nome} tirou {props.nota}</h2>

      <h4>A idade de {props.nome} é {props.idade} anos.</h4>

    </div>

  );

}



function App() 
{

  return (

    <div className="App">

      <div className="turma">
        <Turma nome="Thalita" nota="8" idade="26" />
        <Turma nome="Pedro" nota="10" idade="17" />
      </div>

      <div className="soma">
        <Soma a={5} b={3} />  
      </div>

      <div className="login">
        <Login name="Pedro" usuario="pedromoraes0106" email="pedrocamoraes05@gmail.com" idade="17"/>
      </div>

      <div>
        <Header/>
      </div>

      <div className='calculadora'>
        <Somas a="3" b="3"/>
        <Subtracao a="3" b="3"/>
        <Multiplicacao a="3" b="3"/>
        <Divisao a="3" b="3"/>
      </div>

    </div>
  );

}

function Soma(props)
{
  return(
    <div>
      <h3>{props.a + props.b}</h3>
    </div>
  );
}


const Usuario = (props) =>
{

  return(

    <div>
      <h3>Nome = {props.name}</h3>
      <h3>Usuário = {props.usuario}</h3>
      <h3>Email = {props.email}</h3>
      <h3>Idade = {props.idade}</h3>
    </div>

  );

}

const Login = (props) =>
{
  return(

    <Usuario name= {props.name} usuario={props.usuario} email={props.email} idade={props.idade}/>
    
  );
}




export default App;