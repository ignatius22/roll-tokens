import React, { useEffect } from 'react';
import { connect } from 'react-redux';


import { BrowserRouter as Router, Route } from 'react-router-dom';
import {requestTokens } from './redux/action';

import CardList from './components/TokenCardList';


import './App.css';
import Detailed from './components/DetailToken';

const mapStateToProps = (state) => ({
  tokens: state.requestTokens.tokens,
  isPending: state.requestTokens.isPending,
});

const mapDispatchToProps = (dispatch) => ({
  onRequestTokens: () => dispatch(requestTokens()),
});

const App = ({
  tokens,
  isPending,
  onRequestTokens,
}) => {
  useEffect(() => {
    onRequestTokens();
  }, []);

  

  return (
    <Router>
      <div className="tc">
        <h1 className="f1 head">Roll's Token</h1>
        <Route exact path="/">
          <div>
            {isPending ? <h1>Loading</h1> : <CardList tokens={tokens} />}
          </div>
        </Route>
       
          <Route  path="/:detailId" component={Detailed} />
     
      </div>
    </Router>
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
