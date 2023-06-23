
import './App.css';
import ExternalStyle from './ExternalStyle';
import Inlinecss from './Inlinecss';
import InternalCss from './InternalCss';
import Sample from './Sample';


function App() {
  return (
    <div className="App">
      <Sample/>
      <Inlinecss/>
      <InternalCss/>
      <ExternalStyle/>
    </div>
  );
}

export default App;
