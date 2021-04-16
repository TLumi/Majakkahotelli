import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import {useParams} from 'react-router-dom';
import { format } from 'date-fns'
import { DateRangePickerCalendar, START_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import fiLocale from 'date-fns/locale/fi';
import Box from '@material-ui/core/Box';

function Varauslomake(props) {
    let {id, nimi} = useParams();
    
    const [startDate, setStartDate] = useState()

    const [endDate, setEndDate] = useState()

    const [focus, setFocus] = useState(START_DATE)
    
    const handleFocusChange = newFocus => {
      setFocus(newFocus || START_DATE)
    }
    const [varaus, setValues] =useState({
        id:id,
        nimi:nimi,
        etunimi: (''),
        sukunimi:(''),
        email: (''),
        puhelin:(''),
        startDate:(''),
        endDate: (''),
    
      
    });
    
    const[ilmoitus, setIlmoitus]=useState('');
    
    const muuta =(e) => {
        setValues({
            ...varaus,
            [e.target.name]: e.target.value //lomakkeella muuttuva name: pitää olla identtinen tilamuuttujan kanssa
        });
        setIlmoitus('');
    };
    const tarkistaSaatavuus=(e) =>{
        setStartDate({
            ...startDate,
            [e.target.name]:e.target.value
        });
    }
        
        const lisaaVaraus=(e) => {
            
            e.preventDefault();// estetään normaali toiminta eli tietojen siirtyminen palvelimelle

            if (varaus.etunimi.length<1 || varaus.sukunimi.length<2 || varaus.email.length<5 || varaus.puhelin.length<5)
             { setIlmoitus('Täytä kaikki kentät.')
             
            }else{               
                setIlmoitus('Varaus lähetetty onnistuneesti!');
                setValues({
                    id:id,
                    nimi:nimi,
                    etunimi: (''),
                    sukunimi:(''),
                    email: (''),
                    puhelin: (''),    
                });
                
        }}

    return(
             <Paper style= {{marginTop:30, marginLeft:20, marginRight:20}} >
            <Card  >
            <form style={ {marginTop:20, marginLeft:20, marginBottom:20}}>
                <Typography> Olet varaamassa huonetta {nimi}</Typography>
                <Typography> Valitse ensin vierailusi ajankohta ja täytä sitten varauslomakkeen muut tiedot</Typography>
               <Box>
               <div style= {{ width:400}}>
                    <Typography>Tulopäivä: {startDate ? format(startDate, 'dd mmm yyyy', { locale: fiLocale }) : 'none'}.</Typography>
                    <Typography>Lähtöpäivä: {endDate ? format(endDate, 'dd mmm yyyy', { locale: fiLocale }) : 'none'}.</Typography>
                    <DateRangePickerCalendar
                        startDate={startDate}
                        endDate={endDate}
                        focus={focus}
                        onStartDateChange={setStartDate}
                        onEndDateChange={setEndDate}
                        onFocusChange={handleFocusChange}
                        locale={fiLocale} />
                </div>
                </Box>
                <TextField fullWidth required label="Etunimi" name='etunimi' 
                value= {varaus.etunimi} onChange ={muuta} />
                 <TextField fullWidth required label="Sukunimi" name='sukunimi' 
                value= {varaus.sukunimi} onChange ={muuta} />     
                <TextField fullWidth required label="Sähköposti" name='email' 
                value= {varaus.email} onChange ={muuta} />     
                <TextField fullWidth required label="Puhelin" name='puhelin' 
                value= {varaus.puhelin} onChange ={muuta} />     
                <input style={{marginTop:20}} type='submit' value='Tallenna ' onClick={(e)=> lisaaVaraus(e)} /> 
                <p> {ilmoitus} </p> 
                          
          </form>
            </Card>
        </Paper>
        
    );
}

export default Varauslomake;