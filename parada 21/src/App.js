import './App.css';

function App() {
  return (

    <div className="App">

      <div className='main'>
        <div className='d-flex w-50 h-100 p-3 mx-auto flex-column container text-center'>
          <div className='row d-flex justify-content-center align-items-center p-3' id='buscaTempo'>
            
              <h1>Previsão do Tempo</h1>

              <i className='bi bi-brightness-alt-high-fill' id='sol'></i>

              <form>
                <input type='text' className='form-control' />
                <button type='submit' className='btn btn-primary mt-3'>Buscar</button>
              </form>

          </div>


          <div className='row 2-50 mx-auto justify-content-center aligns-items-center mt-5' id='infoTempo'>

            <div className='col-12'>
              <h3 id='cidade'>São Carlos</h3>
            </div>

            <div className='col-6'>
              <h2>24 ºC</h2>
            </div>

            <div className='col-6'>
              <i className='bi bi-cloud-haze-fill' id='tempo'></i>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
