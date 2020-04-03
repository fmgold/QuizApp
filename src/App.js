import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home'
import Quizinstructions from './components/quiz/Quizinstructions'
import Play from  './components/quiz/Play'
import QuizSummary from  './components/quiz/QuizSummary'



function App() {
  return (
    <Router>
        <Route path='/' exact component={Home}/>
        <Route path='/play/instructions' exact component={Quizinstructions}/>
        <Route path='/play/quiz' exact component={Play}/>
        <Route path='/play/quizsummary' exact component={QuizSummary}/>
    </Router>
  );
}

export default App;
