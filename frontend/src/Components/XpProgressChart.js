import React from "react";
import { connect } from "react-redux";
import { TimeSeries } from "pondjs";
import { Charts,
  ChartContainer,
  ChartRow,
  YAxis,
  LineChart,
  Resizable} from "react-timeseries-charts";

const mapStateToProps = state => {
  return { user_xp_entries: state.user_xp_entries };
};

const ConnectedXpProgressChart = ({user_xp_entries}) =>
{
  if (user_xp_entries != null && user_xp_entries.length > 1){
    let points =  user_xp_entries.map((e) => [new Date(e.datetime), e.value]);
    const data = {
      name: "xp_progress",
      columns: ["time", "value"],
      points: points
    }
    let series = new TimeSeries(data);

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <Resizable>
                      <ChartContainer timeRange={series.range()}>
                          <ChartRow height="200">
                              <YAxis
                                  id="xp"
                                  label="XP"
                                  min={series.min()}
                                  max={series.max()}
                              />
                              <Charts>
                                  <LineChart axis="xp" series={series} />
                              </Charts>
                          </ChartRow>
                      </ChartContainer>
                  </Resizable>
                </div>
            </div>
        </div>
    );
  } else {
    return (null);
  }
}

const XpProgressChart = connect(mapStateToProps)(ConnectedXpProgressChart);

export default XpProgressChart;
