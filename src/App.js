import React, {useState} from "react";
import './App.css';
import {withStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from'@material-ui/core/Typography';
import {Table,TableCell,TableRow} from "@material-ui/core";
import {Pie, Bar} from "react-chartjs-2";
import TableDetails from "./tabledetails";
import SlideMarks from "./slidemarks";
import GroupedBar from "./groupedbar";
import EmiDesign from "./emidesign";
import AdsenseWidget from "./adsensewidget";


const PrettoSlider =withStyles({
  root: {color:'maroon',height:10},
  thumb: {height:25,width:25,backgroundColor:'white',border:'3px solid black',marginTop:-5,marginLeft:-5,marginRight:-5},
  track: {height:10,borderRadius:4},
  rail: {height:10,borderRadius:4},
})(Slider);

function App() {
  const [pAmount,setpAmount]=useState(2755000);
  const[interest,setinterest]=useState(7);
  const[duration,setduration]=useState(147);
  const maxValue=6000000;
  const intMax=20;
  const maxDuration=360;

  const intr=interest/1200;
  const emi=duration ? Math.round(pAmount *intr/(1-(Math.pow(1/(1 +intr),duration)))):0;
  const totalAmt=duration *emi;
  var TotalAmountOfCredit=Math.round((emi/intr)*(1-Math.pow((1+intr),(-duration))));
  const TotalAmountOfInterest=Math.round(totalAmt-TotalAmountOfCredit);

  const datachart = {
    labels: '10',
    datasets: [
      {
        label: 'Interest',
        data: [TotalAmountOfInterest],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Duration',
        data: [duration],
        backgroundColor: 'rgb(155, 99, 132)',
      },
      
      {
        label: 'Principal',
        data: [pAmount],
        backgroundColor: 'rgb(75, 192, 192)',
      },
    ],
  };
  return <>
  <EmiDesign/>
    <div className="App">
    
      <div className="CalApp">
        <h2 className="CalHeading">Home Loan Calculator</h2>
        <div>
          <Typography gutterBottom><strong>Loan Amount</strong></Typography>
          <PrettoSlider value={pAmount}  marks={SlideMarks.marksAmt}onChange={(event,vAmt)=>{setpAmount(vAmt)}} defaultValue={pAmount} max={maxValue}>
          </PrettoSlider>
        </div>
        <div>
          <Typography gutterBottom><strong>Interest Rate %</strong></Typography>
          <PrettoSlider value={interest} marks={SlideMarks.marksInt} onChange={(event,vInt)=>{setinterest(vInt)}} defaultValue={interest} max={intMax}>
          </PrettoSlider>
        </div>
        <div>
          <Typography gutterBottom><strong>Tenure (Months)</strong></Typography>
          <PrettoSlider value={duration} marks={SlideMarks.markstenure} onChange={(event,vDur)=>{setduration(vDur)}} defaultValue={duration} max={maxDuration}>
          </PrettoSlider>
        </div>
        <div>
          <Table>
            <TableRow>
              <TableCell>
                <TableDetails pAmount={pAmount}  totalAmt={totalAmt} interest={interest} duration={duration} emi={emi} TotalAmountOfInterest={TotalAmountOfInterest}/>
              </TableCell>
              <TableCell>
                <Pie
                data={{
                  labels:['Total Interest', 'Total Amount'],
                  datasets: [{
                    data:[TotalAmountOfInterest,pAmount],
                    backgroundColor:['light green','orange']
                  }]
                }}width={200}
                height={100}
                />
              </TableCell>
              
            </TableRow>
          </Table>
          <div className="col-lg-9">
            <div class="row">
              {
                <GroupedBar ChartData={datachart}></GroupedBar>
                }
            </div>
           
          </div>
          

        </div>
        

       
    


      </div>
      </div>
  </>
}

export default App;
