import './quize.css';
import React from 'react';
import question from "./Question";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Quize() {

  const navigate = useNavigate();
  const [qindex, setqindex] = useState(0);
  const [Score, setScore] = useState(0);
  const [result, setresult] = useState(false);

  const current_question = question[qindex];

  const replay = () => {
    setqindex(0);
    setScore(0);
    setresult(false);
  }

  const next_question = qindex + 1;

  const choice = (i) => {

    if (next_question < question.length) {
      if (current_question.ans === i) {
        setScore(Score + 1);
      }
    }

    if (next_question < question.length) {
      setqindex(next_question);
    }
    else {
      setresult(true);
    }
  }
  return (
    <div className="quize-box">
      <h4>Your Score : {Score}</h4>
      {result ? (<><button className='re-btn' onClick={replay}>Play Again</button> <button className='re-btn' onClick={() => navigate('/output')}>View Answer</button></>) : (<>
        <div className='Q-cnt'>
          <p className='Q-question'>{current_question.qa}</p>
          <ul className='Q-ul'>
            {
              current_question.opt.map(option => {
                return <li className='Q-li' onClick={() => choice(option)}>{option}</li>
              })
            }
          </ul>
        </div>
      </>)}
    </div>
  );
}

export default Quize;
