import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function Buttonpage(){
    const navigate = useNavigate();

    const DoughnutClick=()=> {
        navigate("/doughnut");
    }
    const LinechartClick=()=>{
        navigate("/linechart");
    }
    return(
        <div>
            <Button onClick={DoughnutClick} variant="contained">Doughnut Chart</Button>
            <Button onClick={LinechartClick} variant="contained">RealtimeLine Chart</Button>
        </div>
    );
}
export default Buttonpage;