import { useEffect, useState } from "react";

import { useParams, Link, useNavigate } from 'react-router-dom';

import { getOneData } from "../helpers/api-request";

import { Typography, TextInput, Timeline, Label, Button } from "keep-react";
import { ArrowRight, ArrowLeft } from "phosphor-react";

import { Card } from "../components/Card";
import { closeLoading, loading } from "../helpers/Loading";

export const Character = () => {

    const { character_id } = useParams();
    const navegate = useNavigate()

    const [ character, setCharacter ] = useState([]);
    const [ episodes, setEpisodes ] = useState([]);

    useEffect(() => {
        async function fetchData(){
            try{
                loading('character');
                const result = await getOneData('character', character_id);
                if(!result){
                    closeLoading();
                    return navegate(`/notfound`);
                }
                setCharacter(result);
                const updatedEpisodes = await Promise.all(
                    result.episode.map(async (ep) => {
                        const epi = ep.split('/');
                        const index = parseInt(epi[epi.length - 1]);
                        const episode = await getOneData('episode', index);
                        return episode;
                    })
                );
                setEpisodes(updatedEpisodes);
                closeLoading();
            }catch(error){
                console.log('Error fetching data:', error);
            }
        }
        fetchData();
    },[character_id]);

  return (
    <>
        <Typography variant="heading-1" className="text-center m-10 rubik">{ character.name }</Typography>
        <div className="text-center flex items-center justify-center">
            <Button onClick={ () => navegate(-1) } type="primary" size="sm">
                Go back
                <ArrowLeft className="ml-2 h-3 w-3" />
            </Button>
        </div>
        <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3">
                <Card character={ character } onlyCard={true} key={ character.id } />
                <div className="mr-5">
                    <Label value="Name" />
                    <TextInput color="gray" value={ character.name } disabled={ true } shadow={ true } />

                    <Label value="Gender" />
                    <TextInput color="gray" value={ character.gender } disabled={ true } shadow={ true } />

                    <Label value="Specie" />
                    <TextInput color="gray" value={ character.species } disabled={ true } shadow={ true } />
                </div>

                <div className="mr-5">
                    <Label value="Origin" />
                    <TextInput color="gray" value={ character.origin?.name } disabled={ true } shadow={ true } />

                    <Label value="Location" />
                    <TextInput color="gray" value={ character.location?.name } disabled={ true } shadow={ true } />

                    <Label value="Status" />
                    <TextInput color="gray" value={ character.status } disabled={ true } shadow={ true } />
                </div>

            </div>
        </div>
        <Typography variant="heading-5 text-center mt-5 mb-5">Episodes</Typography>
        <div className="flex items-center justify-center">
            <Timeline>
                { episodes.map(e => {
                    return (
                        <Timeline.Item key={e.id}>
                            <Timeline.Point />
                            <Timeline.Content>
                            <Timeline.Time>{ e.air_date }</Timeline.Time>
                            <Timeline.Title>{ e.episode }</Timeline.Title>
                            <Timeline.Body>
                                { e.name }
                            </Timeline.Body>
                            <Link to={`/episodes/${e.id}`}>
                                <Button type="primary" size="sm">
                                    Details
                                    <ArrowRight className="ml-2 h-3 w-3" />
                                </Button>
                            </Link>
                            </Timeline.Content>
                        </Timeline.Item>
                    )
                }) }
            </Timeline>
        </div>
    </>
  )
}
