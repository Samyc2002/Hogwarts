import { Grid, useMediaQuery } from '@material-ui/core';

import CustomCard from './components/CustomCard';
import Background from './components/Background';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {

  const isTabletorMobile = useMediaQuery('(max-width: 899px)');

  return (
    <div className="App">
      <Header isTabletorMobile={isTabletorMobile}>
        Children will be displayed here
      </Header>
      <Background isTabletorMobile={isTabletorMobile}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CustomCard/>
        </Grid>
      </Grid>
      </Background>
      <Footer isTabletorMobile={isTabletorMobile}/>
    </div>
  );
}

export default App;
