import { useEffect, useState } from "react";

import { getOneData } from "../helpers/api-request";

import { Typography } from "keep-react";
import { Button, Timeline } from "keep-react";
import { ArrowRight } from "phosphor-react";

import { Card } from "../components/Card";

export const Character = () => {

    const [ character, setCharacter ] = useState([]);
    const [ episodes, setEpisodes ] = useState([]);

    useEffect(() => {
        async function fetchData(){
            try{
                const result = await getOneData('character', 1);
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
            }catch(error){
                console.log('Error fetching data:', error);
            }
        }
        fetchData();
        console.log(episodes);
    },[]);

  return (
    <>
        <Typography variant="heading-1" className="text-center m-10">{ character.name }</Typography>
        <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2">
                <Card character={ character }  key={ character.id } />
            </div>
        </div>
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
                        <Button type="primary" size="sm">
                            Details
                            <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                        </Timeline.Content>
                    </Timeline.Item>
                )
            }) }
        </Timeline>
        </div>
    </>
  )
}
