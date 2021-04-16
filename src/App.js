import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter, Route, Switch,} from 'react-router-dom';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import MenuMUI from './components/MenuMUI';
import Etusivu from './components/Etusivu';
import Varauslomake from './components/Varauslomake';
import Yhteystiedot from './components/Yhteystiedot';
import Huoneet from './components/Huoneet';
import Huone from './components/Huone';

const theme = createMuiTheme({
    
      typography:{
      fontFamily: ['Raleway', 'sans-serif']
    },
});

  const huoneet =[
    {id:1,
    nimi:'Horisontti',
    kuvaus: 'Tästä huoneesta voit katsella kauas merelle. Huone sijaitsee majakan keskiosassa ja siitä näkee sekä saaren luontoa että kauas horisonttiin.',
    varustus: 'Huone on varustettu kahdella erillisellä sängyllä. Huoneessa on oma wc sekä suihkuhuone.',
    kuva: 'https://cdn.pixabay.com/photo/2017/06/18/20/50/view-2417156_960_720.jpg',
    kuva2: 'https://cdn.pixabay.com/photo/2016/11/21/16/21/bed-1846251_960_720.jpg',
  },
  {id:2,
    nimi:'Lyhty',
    kuvaus: 'Hotellin korkeimmalla oleva huone, josta on näkymät moneen eri suuntaan. Tässä huoneessa heräät aamuauringon nousuun ja näet tyrskyjen lyövän saaren rantaan. Omasta kylpyhuoneesta ihastelet ilta-auringon kajoa samalla kun kylvet ammeessa.',
    varustus: 'Tässä huoneessa on parisänky, oma kylpyhuone ja pieni jääkaappi. Huoneen varustuksiin kuuluu myös hiustenkuivaaja ja silitysrauta.',
    kuva: 'https://cdn.pixabay.com/photo/2018/06/14/21/17/room-3475665_960_720.jpg',
    kuva2: 'https://cdn.pixabay.com/photo/2016/03/28/09/34/bedroom-1285156_960_720.jpg',
  },
  {id:3,
    nimi:'Ulkoluoto',
    kuvaus: 'Hotellin alimman kerroksen huoneessa voit aistia meren lähelläsi, kuin oleskelisit ulkoluodon aurinkoisilla kallioilla. Tässä huoneessa meri on lähellä ja huoneen omassa kylpyammeessa voit kuulla tyrskyjen lyövän kallioon. Myös pienen saaremme luonto avautuu ikkunasta tarjoten matkaajalle vuodenaikojen vaihtelun hyvin läheltä seuraten.',
    varustus: 'Tässä huoneessa on parisänky ja oma kylpyhuone. Huoneen varustuksiin kuuluu kiikarit',
    kuva: 'https://cdn.pixabay.com/photo/2014/07/20/17/01/hotel-room-key-397946_960_720.jpg',
    kuva2: 'https://cdn.pixabay.com/photo/2018/06/14/21/15/the-interior-of-the-3475656_960_720.jpg',
  },
  ];

  const kuvaData=[
    {id:1,
      img:'https://cdn.pixabay.com/photo/2017/11/21/15/36/sanderling-2968476_960_720.jpg',
      title:'A'},
      {id:2,
        img:'https://cdn.pixabay.com/photo/2014/02/25/22/06/staircase-274614_960_720.jpg',
    title:'B'},
    {id:3,
      img:'https://cdn.pixabay.com/photo/2019/06/04/19/18/lighthouse-4252107_960_720.jpg',
    title:'C'},
    {id:4,
      img:'https://cdn.pixabay.com/photo/2018/06/14/21/17/room-3475665_960_720.jpg',
    title:'D'},
    {id:5,
      img:'https://cdn.pixabay.com/photo/2017/08/13/12/04/stones-2636977_960_720.jpg',
    title:'F'},
    {id:6,
      img:'https://cdn.pixabay.com/photo/2020/04/26/22/09/common-tern-5097345_960_720.jpg',
    title:'G'},
    {id:7,
    img:'https://cdn.pixabay.com/photo/2016/11/21/16/21/bed-1846251_960_720.jpg',
    title:'H'},
    {id:8,
    img: 'https://cdn.pixabay.com/photo/2016/03/28/09/34/bedroom-1285156_960_720.jpg',
    title:'I'},
    {id:9,
    img:'https://cdn.pixabay.com/photo/2018/06/14/21/15/the-interior-of-the-3475656_960_720.jpg',
    title:'J'},
   
  ]

  const majakkaData=[
    {id:1,
    img:'https://cdn.pixabay.com/photo/2019/03/22/16/44/lighthouse-4073638_960_720.jpg',
    title:'G'},
  ]

  const varausData=[
    {id:1,
      nimi:'Lyhty',
      etunimi: 'Tuula',
      sukunimi: 'Testi',
      email: 'tuula.testi@email.com',
      puhelin:'0300567875',
      startDate:'2021-04-21',
      endDate: '2021-04-25',
    }

  ]


  function App() {
    return (
      <BrowserRouter>
      <MuiThemeProvider theme={ theme }>
        <div>
          <CssBaseline/>
            <div>
              <MenuMUI/>  
                <Switch>
                <Route exact path='/' render={(props)=> <Etusivu{...props} majakkaData={majakkaData}/>}/>
                  <Route path='/huoneet' render={(props)=> <Huoneet{...props} huoneet={huoneet}/>}/>
                  <Route path='/yhteystiedot' render={(props)=> <Yhteystiedot{...props} majakkaData={majakkaData}/>}/>
                  <Route path='/lueLisaa/:id/:nimi/:kuvaus/:varustus/' render ={(props)=><Huone{...props} kuvaData={kuvaData}/>}/>
                  <Route path='/varaa/:id/:nimi/' render={(props)=><Varauslomake{...props} varausData={varausData}/>}/>

              </Switch>
            </div>
        </div>
        
      </MuiThemeProvider>  
    </BrowserRouter>

    );
  }
   
  export default App;