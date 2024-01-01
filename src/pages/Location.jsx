import { useEffect, useState } from "react";

import { useParams, Link, useNavigate } from 'react-router-dom';

import { getOneData } from "../helpers/api-request";

import { ArrowLeft } from "phosphor-react";

import { closeLoading, loading } from "../helpers/Loading";

import { Avatar, Button, Typography } from "keep-react";

export const Location = () => {

    const { location_id } = useParams();

    const [ location, setLocation ] = useState([]);

    const [ characters, setCharacters ] = useState([]);

    const navegate = useNavigate();

    useEffect(() => {
        async function fetchData(){
            try{
                loading('location')
                const result = await getOneData('location', location_id);
                setLocation(result);
                console.log(result);
                const updatedCharacters = await Promise.all(
                    result.residents.map(async (res) => {
                        const epi = res.split('/');
                        const index = parseInt(epi[epi.length - 1]);
                        const episode = await getOneData('character', index);
                        return episode;
                    })
                );
                setCharacters(updatedCharacters);
                closeLoading();
            }catch(error){
                console.log('Error fetching data:', error);
            }
        }
        fetchData();
    },[location_id]);

  return (
    <>
        <Typography variant="heading-1" className="text-center m-10 rubik">{ location.name } (<span>Dimension: { location.dimension }</span>)</Typography>
        <Typography variant="heading-3" className="text-center rubik">{ location.type }</Typography>
        <div className="text-center flex items-center justify-center mt-5">
            <Button onClick={ () => navegate(-1) } type="primary" size="sm">
                Go back
                <ArrowLeft className="ml-2 h-3 w-3" />
            </Button>
        </div>
        <div className="text-center flex items-center justify-center mt-5">
            <Avatar.Group>
                {
                    characters.map(character => {
                        return(
                            <Link to={`/characters/${ character.id }`}  key={character.id}>
                                <Avatar
                                    shape="circle"
                                    size="md"
                                    stacked={true}
                                    img={ character.image }
                                />
                            </Link>
                        )
                    })
                }
            </Avatar.Group>
        </div>
    </>
  )
}
