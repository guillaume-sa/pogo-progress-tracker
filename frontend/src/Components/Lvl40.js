import React from "react";
import { connect } from "react-redux";
import { ProgressBar } from 'react-bootstrap';
import { MAX_XP, getCurrentXP } from "../utils/XpUtils";

const mapStateToProps = state => {
  return { user_xp_entries: state.user_xp_entries};
};

const ConnectedLvl40 = ({ user_xp_entries }) =>
{
  let user_xp = getCurrentXP(user_xp_entries);
  let progress = Number(((user_xp / MAX_XP) * 100).toFixed(2));

  return (
    <div className="m-2">
      <ProgressBar now={progress} label={`${progress}%`} />
    </div>
  )
};

const Lvl40 = connect(mapStateToProps)(ConnectedLvl40);

export default Lvl40;
