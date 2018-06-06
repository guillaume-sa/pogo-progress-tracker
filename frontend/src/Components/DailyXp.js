import React from "react";
import { connect } from "react-redux";
import { dailyXpSelector } from "../selectors/Xp"

const mapStateToProps = (state) => {
  return {
    daily_xp: dailyXpSelector(state)
  };
};

const ConnectedDailyXp = ({ daily_xp }) =>
{
  return (daily_xp > 0) ? (
    <div className="font-weight-bold">
      You are making {daily_xp} XP per day!
    </div>
  ) : (
    null
  )
};

const DailyXp = connect(mapStateToProps)(ConnectedDailyXp);

export default DailyXp;
