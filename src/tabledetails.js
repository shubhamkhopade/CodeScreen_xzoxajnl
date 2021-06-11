import React from "react";
import "./App.css";
import {Table,TableCell,TableHead,TableRow} from '@material-ui/core'
export default function TableDetails(props){
    return<>
        <Table style={{width:'100%',border:'2px solid #ccc'}} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell className="ETableCellText"><strong>Loan Amount</strong></TableCell>
                    <TableCell className="ETableCellVal"><strong>&#8377;{props.pAmount}</strong></TableCell>                    
                </TableRow>
                <TableRow>
                    <TableCell className="ETableCellText"><strong>Interest</strong></TableCell>
                    <TableCell className="ETableCellVal"><strong>{props.interest}%</strong></TableCell>                    
                </TableRow>
                <TableRow>
                    <TableCell className="ETableCellText"><strong>Tenure (Months)</strong></TableCell>
                    <TableCell className="ETableCellVal"><strong>{props.duration}</strong></TableCell>                    
                </TableRow>
                <TableRow>
                    <TableCell className="ETableCellText"><strong>EMI (Monthly)</strong></TableCell>
                    <TableCell className="ETableCellVal"><strong>&#8377;{props.emi}</strong></TableCell>                    
                </TableRow>
                <TableRow>
                    <TableCell className="ETableCellText"><strong>Total Interest</strong></TableCell>
                    <TableCell className="ETableCellVal"><strong>&#8377;{props.TotalAmountOfInterest}</strong></TableCell>                    
                </TableRow>
                <TableRow>
                    <TableCell className="ETableCellText"><strong>Total Payement</strong><br/>(Loan Amount + Interest</TableCell>
                    <TableCell className="ETableCellVal"><strong>&#8377;{props.totalAmt ? props.totalAmt:0}</strong></TableCell>                    
                </TableRow>
            </TableHead>
            </Table>

    </>
}