import { Card, CardContent, Typography } from '@mui/material';
import cafes from '../assets/cafes.json';

const CardContainer = () => {
    return (
        <div className="card-container">
        {cafes.map((cafe, index) => (
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
          />
        ))}
      </div>
    );
   };
   



   const CardHeader = ({ cafeName, city, countryCode, maps }) => {
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
   <img src="./onthatvoyage/assets/maps.png" alt="Maps" />
   
 </a>
</div>

          </div>
      );
   };
   
   



function CafeCard ({ powerOutlets, internetSpeed, quietness, brightness, seating, cafeName, city, countryCode, maps }){
    return (
        <div className='card' style={{ color: 'white' }}>
            <Card className="cafe-card">
            <CardHeader cafeName={cafeName} city={city} countryCode={countryCode} maps={maps} />
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