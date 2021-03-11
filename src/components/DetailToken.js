import React, { useEffect } from 'react';
import { Link} from 'react-router-dom';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { requestTokens } from '../redux/action';

const mapStateToProps = (state) => ({
  tokens: state.requestTokens.tokens,
});

const mapDispatchToProps = (dispatch) => ({
  onRequestTokens: () => dispatch(requestTokens()),
});

const Detailed = ({ tokens, onRequestTokens}) => {
  useEffect(() => {
    onRequestTokens();
  }, [onRequestTokens]);

const { detailId } = useParams();
 

  const logo = `${tokens[detailId].logo}`;
  const totalSupply = `${tokens[detailId].totalSupply}`;
  const currentSupply = `${tokens[detailId].currentSupply}`;
  const creatorInfomationName = `${tokens[detailId].creator.name}`;
  const creatorInfomationUsername = `${tokens[detailId].creator.username}`;
  



  return (
    <>
      <div>
        <Link
          to="/"
          className="mb5 f6 link dim br1 ph3 pv2  dib near-black bg-gold shadow-3"
        >
          Go back to Roll's Token
        </Link>
      </div>
      <div className="dt mw7 center pv4 pv5-m pv6-ns shadow-3 pa3 bg-navy mb5">
        <div className="dtc v-top">
          <img src={logo} alt="token" className="mw5 db bg-navy br3" />
        </div>

        <table className="shadow-3">
          <thead>
            <tr>
              <th>name</th>
              <th>username</th>
              <th>total supply</th>
              <th>current supply</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{creatorInfomationName}</td>
              <td>{creatorInfomationUsername}</td>
              <td>{totalSupply}</td>
              <td>{currentSupply}</td>
            </tr>

            <tr></tr>
          </tbody>
        </table>
      </div>
    </>
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(Detailed);
