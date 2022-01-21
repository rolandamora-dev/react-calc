import './Styles.css';
import CalcKey from './components/CalcKey';
import CalcKeyOperators from './components/CalcKeyOperators';
import { Keys } from './utils';
import CalcKeySpan from './components/CalcKeySpan';
import CalcProvider from './CalcContext';
import CalcDisplay from './components/CalcDisplay';
import CalcOperand from './components/CalcOperand';

function App() {

  return (
    <div className='calculator-grid'>
      <CalcProvider>
        <div className='output'>
          <CalcOperand />
          <CalcDisplay />
        </div>
        <CalcKey valueKey={Keys.AC} />
        <CalcKey valueKey={Keys.MoreOrLess} />
        <CalcKey valueKey={Keys.Percent} />
        <CalcKeyOperators valueKey={Keys.Ops_Divide} />
        <CalcKey valueKey={Keys.Digit_Seven} />
        <CalcKey valueKey={Keys.Digit_Eight} />
        <CalcKey valueKey={Keys.Digit_Nine} />
        <CalcKeyOperators valueKey={Keys.Ops_Multiply} />
        <CalcKey valueKey={Keys.Digit_Four} />
        <CalcKey valueKey={Keys.Digit_Five} />
        <CalcKey valueKey={Keys.Digit_Six} />
        <CalcKeyOperators valueKey={Keys.Ops_Minus} />
        <CalcKey valueKey={Keys.Digit_One} />
        <CalcKey valueKey={Keys.Digit_Two} />
        <CalcKey valueKey={Keys.Digit_Three} />
        <CalcKeyOperators valueKey={Keys.Ops_Plus} />
        <CalcKeySpan valueKey={Keys.Digit_Zero} />
        <CalcKey valueKey={Keys.Dot} />
        <CalcKeyOperators valueKey={Keys.Ops_Equals} />
      </CalcProvider>
    </div>
  );
}

export default App;