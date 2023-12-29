import { useEffect, useState } from "react"
import { getData } from "../helpers/api-request";

export const Locations = () => {

    const [ locations, setLocations ] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const { info, results } = await getData('location');
                setLocations(results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    },[]);

    return (
    <>
      <pre>{ JSON.stringify(locations) }</pre>  
    </>
  )
}
