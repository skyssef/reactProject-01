import './Charts.css';
import ReactApexChart from "react-apexcharts";
export default function Charts(props){
    let   data={
          
        series:props.valueList,
        options: {
          chart: {
            width: 380,
            type: 'polarArea'
          },
          labels: props.catList,
          fill: {
            opacity: 1
          },
          stroke: {
            width: 1,
            colors: undefined
          },
          yaxis: {
            show: false
          },
          legend: {
            position: 'bottom'
          },
          plotOptions: {
            polarArea: {
              rings: {
                strokeWidth: 0
              },
              spokes: {
                strokeWidth: 0
              },
            }
          },
          theme: {
            monochrome: {
              enabled: true,
              shadeTo: 'light',
              shadeIntensity: 0.6
            }
          }
        },
      
      
      };
      let series=[
        props.balence,
        props.earnning,
        props.losses
      ]
      let options = {
        chart: {
          height: 280,
          type: "area"
        },
        dataLabels: {
          enabled: false
        },
        
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100]
          }
        },
        xaxis: {
          type: "datetime"
        }
      };
      return(
        <div className="charts">
            <ReactApexChart options={data.options} series={data.series} type="polarArea" height={350} width={350} />
            <ReactApexChart options={options} series={series} type="area" height={350} width={350} />
        </div>
      )
}