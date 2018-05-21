import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { user_xp_entries: state.user_xp_entries};
};

const ConnectedDailyXp = ({ user_xp_entries }) =>
{
  let progress = 0;
  if (user_xp_entries.length > 1){
    var first_entry = user_xp_entries[0];
    var last_entry = user_xp_entries[user_xp_entries.length - 1];

    var xp = last_entry.value - first_entry.value;
    var time_diff = Math.abs(new Date(last_entry.datetime) - new Date(first_entry.datetime));
    var days_diff = Math.ceil(time_diff / (1000 * 3600 * 24));
    progress = Math.round(xp / days_diff);
  }
  return (
    <div className="font-weight-bold">
      You are making {progress} XP per day !
    </div>
  )
};

const DailyXp = connect(mapStateToProps)(ConnectedDailyXp);

export default DailyXp;
