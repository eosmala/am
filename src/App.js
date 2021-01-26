import './App.css';
import { useState } from 'react';

function App() {
  const [weight, setWeight] = useState(80);
  const [amount, setAmount] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);

  function calculate(e) {
    e.preventDefault();
    let litres = amount * 0.33;
    let grams = litres * 8 * 4.5;
    let burn = weight / 10;
    let gramsLeft = grams - (burn * time);

    let drunk = 0;
    if (gender === 'male') {
      drunk = gramsLeft / (weight * 0.7)
    } else {
      drunk = gramsLeft / (weight * 0.6)
    }
    setResult(drunk);
  }

  return (
    <div className="container align-items-center text-center m-2">
      <h3>Calculating alcohol blood level</h3>
      <form onSubmit={calculate} className="">
        <div className="input-group">
          <label className="input-group-text">Your weight (kg):</label>
          <input className="form-control text-end" name="weight" type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>

          <label className="input-group-text">0.33 Bottles:</label>
          <input className="form-control text-end" name="amount" type="number"  value={amount} onChange={e => setAmount(e.target.value)}></input>
     
          <label className="input-group-text">Time (h):</label>
          <input className="form-control text-end" name="time" type="number" value={time} onChange={e => setTime(e.target.value)}></input>
        </div>
        <div className="btn-group my-3">
          <input className="btn-check" type="radio" name="gender" value="male" id="male" defaultChecked onChange={e => setGender(e.target.value)} />
          <label className="btn btn-outline-dark" for="male">Male</label>
          <input className="btn-check" type="radio" name="gender" value="female" id="female" autocomplete="off" onChange={e => setGender(e.target.value)} />
          <label className="btn btn-outline-dark" for="female">Female</label>

        </div>
        <div className="my-2">
        <button className="btn btn-secondary">Calculate</button>
        </div>
      </form>
      <div className="">
        <h4>You are this drunk: <span className="badge bg-dark"> {result.toFixed(1)}</span></h4>
        
      </div>
    </div>
  );
}
export default App;
