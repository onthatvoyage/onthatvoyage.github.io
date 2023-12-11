import { Card, CardContent, Typography } from '@mui/material';
import cafes from '../assets/cafes.json';
import map from '../assets/map.png';
import insta from '../assets/instagram.png';

const CardContainer = ({selectedOption}) => {
  console.log(selectedOption);
  let filteredCafes = [];
  if (selectedOption) {
    filteredCafes = cafes.filter((cafe) => cafe.city === selectedOption.value);
  }
  console.log(selectedOption);
  return (
    <div className="card-container">
    {filteredCafes.map((cafe, index) => (
      <CafeCard 
        key={index}
        powerOutlets={cafe.powerOutlets} 
        internetSpeed={cafe.internetSpeed} 
        quietness={cafe.quietness} 
        brightness={cafe.brightness} 
        seating={cafe.seating} 
        cafeName={cafe.cafeName}
        city={cafe.city}
        countryCode={cafe.countryCode}
        maps={cafe.maps}
        instagram={cafe.instagram}
      />
    ))}
  </div>
);
};
   
   const CardHeader = ({ cafeName, city, countryCode, maps, instagram }) => {
      return (
          <div className="card-header">
              <h2>{cafeName}</h2>
              <div className='address'>
              <p>
            {city}
            </p>
            <p>
            {countryCode}
            </p>
              </div> 
              <div className="card-social">
 <a href={maps} className="social-item maps">
 <img src={map} alt="Maps" />
</a>
<a href={instagram} className='social-item-insta'>
  <img src={insta} alt="Instagram" />
</a>
</div>

          </div>
      );
   };
   
   



function CafeCard ({ powerOutlets, internetSpeed, quietness, brightness, seating, cafeName, city, countryCode, maps, instagram }){
    return (
        <div className='card' style={{ color: 'white' }}>
            <Card className="cafe-card">
            <CardHeader cafeName={cafeName} city={city} countryCode={countryCode} maps={maps} instagram={instagram} />
          <CardContent>
          <Typography variant="body1" component="p">
            <span className="label">Power Outlets :</span>
            <span className="value">{powerOutlets}</span>
          </Typography>
          <Typography variant="body1" component="p">
            <span className="label">Internet Speed :</span>
            <span className="value">{internetSpeed}</span>
          </Typography>
          <Typography variant="body1" component="p">
            <span className="label">Quietness :</span>
            <span className="value">{quietness}</span>
          </Typography>
          <Typography variant="body1" component="p">
            <span className="label">Brightness: </span>
            <span className="value">{brightness}</span>
          </Typography>
          <Typography variant="body1" component="p">
            <span className="label">Seating :</span>
            <span className="value">{seating}</span>
          </Typography>
        </CardContent>
      </Card>
            </div>
    
    );
   };


export default CardContainer;