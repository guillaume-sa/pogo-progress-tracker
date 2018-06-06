import React from "react";
import { connect } from "react-redux";
import { dailyXpSelector } from "../selectors/Xp"
import { getCurrentXP, getDaysTo40 } from "../utils/XpUtils"

const mapStateToProps = (state) => {
  return {
    daily_xp: dailyXpSelector(state),
    user_xp_entries: state.user_xp_entries
  };
};

const ConnectedDaysTo40 = ({ daily_xp, user_xp_entries }) =>
{
  let user_xp = getCurrentXP(user_xp_entries);
  let days_to_40 = getDaysTo40(user_xp, daily_xp);

  return (days_to_40 > 0) ? (
    <div className="font-weight-bold">
      You will reach level 40 in {days_to_40} days!
    </div>
  ) : (
    null
  )
};

const DaysTo40 = connect(mapStateToProps)(ConnectedDaysTo40);

export default DaysTo40;
