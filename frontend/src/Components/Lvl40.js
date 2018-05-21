import React from "react";
import { connect } from "react-redux";
import { ProgressBar } from 'react-bootstrap';

const mapStateToProps = state => {
  return { user_xp_entries: state.user_xp_entries};
};

const ConnectedLvl40 = ({ user_xp_entries }) =>
{
  let progress = 0;
  if (user_xp_entries.length > 0){
      let user_xp = user_xp_entries[user_xp_entries.length - 1].value;
      progress = Number(((user_xp / 20000000) * 100).toFixed(2));
  }

  return (
    <div className="m-2">
      <ProgressBar now={progress} label={`${progress}%`} />
    </div>
  )
};

const Lvl40 = connect(mapStateToProps)(ConnectedLvl40);

export default Lvl40;
