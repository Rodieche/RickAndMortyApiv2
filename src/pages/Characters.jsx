import { useEffect, useState } from "react"
import { getData } from "../helpers/api-request";
import { Card } from "../components/Card";

export const Characters = () => {

    const [ characters, setCharacters ] = useState([]);

    useEffect(() => {
        async function fetchData(){
            try{
                const { results } = await getData('character');
                setCharacters(results);
            }catch(error){
                console.log('Error fetching data:', error);
            }
        }
        fetchData();
    },[]);

    return (
    <>
        <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-4" style={{ marginTop: '100px' }}>
                {characters.map(character => {
                    return <Card character={character}  key={ character.id } />
                })}
            </div>
        </div>

    </>
  )
}
