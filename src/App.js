import { Grid, useMediaQuery } from '@material-ui/core';

import CustomCard from './components/CustomCard';
import Background from './components/Background';
import Header from './components/Header';
import Footer from './components/Footer';
import data from './SampleData.json';
import './App.css';

function App() {

  const isTabletorMobile = useMediaQuery('(max-width: 899px)');

  return (
    <div className="App">
      <Header isTabletorMobile={isTabletorMobile}>
        Children will be displayed here
      </Header>
      <Background isTabletorMobile={isTabletorMobile}>
      <Grid container spacing={10}>
        {data.map((value, id) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
            <CustomCard image={value.thumbnail} heading={value.name} body={value.description} cost={value.cost} startDate={value.startDate} tutors={value.tutors} reviews={value.reviews}/>
          </Grid>
        ))}
      </Grid>
      </Background>
      <Footer isTabletorMobile={isTabletorMobile}/>
    </div>
  );
}

export default App;
