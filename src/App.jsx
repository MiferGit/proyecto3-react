import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import CardInfo from "./assets/components/CardInfo";
import ResidentsList from "./assets/components/ResidentsList";
import Search from "./assets/components/Search";
import "./App.css";
function App() {
  const [location, setLocation] = useFetch();
  const [locationId, setLocationId] = useState(1);


  useEffect(() => {
    setLocation(`https://rickandmortyapi.com/api/location/${locationId}`);
  }, [locationId]);

 
  return (
    <>
      <div className="container">
        <div className="container__home">
          <div className="container__img"></div>
          <div className="container__info">
            <Search setLocationId={setLocationId} />
            <CardInfo location={location} />
          </div>
        </div>
        <ResidentsList residents={location?.residents || []} />
          

      </div>
    </>
  );
}

export default App;
