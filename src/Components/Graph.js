import React from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {View, Text, Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {moderateScale} from 'react-native-size-matters';

export default function Graph() {
  const theme = useSelector(state => state.reducer.theme);
  const backColor = theme === 'dark' ? '#232323' : '#fff';
  const textColor = theme === 'dark' ? '#fff' : '#3F3E3E';

  return (
    <View
      style={{
        marginBottom: 100,
        // backgroundColor: 'red',
      }}>
      <LineChart
        data={{
          labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [0, 0.5, 1, 3, 3, 5, 6, 7, 8, 9, 10],
            },
          ],
        }}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel=""
        // yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        withHorizontalLines={true}
        withVerticalLines={false}
        withDots={false}
        chartConfig={{
          backgroundColor: backColor,
          backgroundGradientFrom: backColor,
          backgroundGradientTo: backColor,
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => textColor,
          labelColor: (opacity = 1) => textColor,
          horizontalLineColor: 'white', // Change the color of horizontal lines to white
          strokeWidth: 1.5, // Increase the width of the lines
        }}
        bezier
        style={{
          marginVertical: 15,
          borderRadius: 16,
          marginLeft: -34,
        }}
      />
    </View>
  );
}
