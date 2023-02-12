import React from "react";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement);

export default class Skills extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         data: {
            labels: this.props.labels,
            datasets: [
               {
                  data: this.props.data,
                  backgroundColor: ["#FEC022", "#595555"],
                  borderColor: ["#FEC022", "595555"],
                  borderWidth: 0,
               },
            ],
         },
      };
   }

   render() {
      return (
         <div className="pie">
            <Doughnut data={this.state.data} />
            <span className="pourcentage">
               {this.state.data.datasets[0].data[0]} %
            </span>
         </div>
      );
   }
}
