import { useEffect, useState } from "react"
import { getData } from "../helpers/api-request";

export const Episodes = () => {

    const [ episodes, setEpisodes ] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const { info, results } = await getData('episode');
                setEpisodes(results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    },[]);

    return (
    <>
      <>{ JSON.stringify(episodes) }</>  
    </>
  )
}
