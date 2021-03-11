import React from 'react';
import Card from './TokenCard';

const TokenCardList = ({ tokens }) => (
  <div className="cov">
    {tokens.map(
      (token, i) => (
        <Card
          name={token.name}
          key={i}
          logo={token.logo}
          id={i}
          symbol={token.symbol}
        />
      )
    )}
  </div>
);



export default TokenCardList;
