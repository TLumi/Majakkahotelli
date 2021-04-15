import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';



function Etusivu(props){

    
    return(
        <Paper margintop='30'>
            <Typography align='center' variant='h4'>Tervetuloa majakkahotelli Valon kotisivuille!</Typography>
            <Typography align='center' margintop='20' marginleft='30' marginright='30'> Majakkahotelli Valo on tunnelmallinen Valosaaren majakkaan vuonna 2014 perustettu hotelli. Hotellimme tarjoaa kävijöilleen merellisen elämyksen pienellä Valon saarella. Saarelle on noin 30 minuutin venematka Helsingin kauppatorilta. </Typography>
            <div>
            <GridList cellHeight={800}  cols={1}>
                {props.majakkaData.map((majakka) => (
                <GridListTile key={majakka.img} cols={majakka.cols || 1}>
                    <img src={majakka.img} alt={majakka.title} />
                </GridListTile>
                ))}
            </GridList>
            </div>
        
          
        </Paper> 
   );
}
export default Etusivu;