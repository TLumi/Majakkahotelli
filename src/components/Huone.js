import React from 'react';
import {useParams} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import GridListTile from '@material-ui/core/GridListTile';
import GridList from '@material-ui/core/GridList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    gridList: {
      width: 700,
      height: 500,
    },
  }));

function Huone(props){
   let {id, nimi, kuvaus, varustus} =useParams();

     const classes = useStyles(); 
return(
      
<Paper>
     
        <Typography align='center' variant='h4'>{nimi}</Typography>
        <Typography align='center' margintop='20'> {kuvaus} </Typography>
        <Typography align='center' margintop='20'> {varustus} </Typography>

        <Button align='center' component ={Link} to = {'/varaa/'+ id+ '/'+ nimi}>Varaa</Button>
        <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {props.kuvaData.map((kuva) => (
                <GridListTile key={kuva.img} cols={kuva.cols || 1}>
                    <img src={kuva.img} alt={kuva.title} />
                </GridListTile>
                ))}
            </GridList>
</div>      
        
</Paper>      
    
);
}
export default Huone;