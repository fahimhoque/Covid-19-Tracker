import React from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import "./InfoBox.css";

function InfoBox({title, cases, total}) {
    return (
        <Card>
            <CardContent className="infoBox">
                <Typography color="textSecondary">
                    {title}
                </Typography>

                <p>Today:</p><h2 className="infoBox__cases">{cases}</h2>

                <Typography className="infoBox__total" color="textSecondary">
                    Total: {total} 
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
