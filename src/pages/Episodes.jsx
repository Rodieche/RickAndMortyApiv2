import { useEffect, useState } from "react"
import { getData } from "../helpers/api-request";

import {  Button, Table, Typography } from "keep-react";

import { ArrowRight, ArrowLeft } from "phosphor-react";

import { Link } from 'react-router-dom';

import { closeLoading, loading } from "../helpers/Loading";

export const Episodes = () => {

    const [ episodes, setEpisodes ] = useState([]);
    const [ currPage, setCurrPage ] = useState(1);
    const [ next, setNext ] = useState(null);
    const [ prev, setPrev ] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                loading ('episodes');
                const { info, results } = await getData('episode', currPage);
                setEpisodes(results);
                setNext(info.next);
                setPrev(info.prev);
                console.log(results, info);
                closeLoading();
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    
        fetchData();
    }, [currPage]);

    const goEpisodces = (number) => {
        setCurrPage(c => c + number);
    }

    return (
    <>
      <Typography variant="heading-3" className="text-center m-10 rubik">Rick and Morty Episodes</Typography>
        <div className="flex items-center justify-center">
            { prev? (
                <Button onClick={() => goEpisodces(-1)}>
                    <ArrowLeft className="ml-2 h-3 w-3" />
                    Previous Episodes
                </Button>
            ): null }
            { next? (
                <Button onClick={() => goEpisodces(1)}>
                    Next Episodes
                    <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
            ): null }
        </div>
        <Table showCheckbox={ false } hoverable={ true } striped={ true }>
            <Table.Caption>
                <div className="my-5 flex items-center justify-between px-6">
                <div className="flex items-center gap-5">
                    <p className="text-body-1 font-semibold text-metal-600">Episodes</p>
                </div>
                </div>
            </Table.Caption>
            <Table.Head>
                <Table.HeadCell>Id</Table.HeadCell>
                <Table.HeadCell>Name</Table.HeadCell>
                <Table.HeadCell>Episode</Table.HeadCell>
                <Table.HeadCell>Characters</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-gray-25 divide-y">
                {
                    episodes.map(l => {
                        return(
                            <Table.Row className="bg-white" key={l.id}>
                                <Table.Cell>
                                    { l.id }
                                </Table.Cell>
                                <Table.Cell>
                                    <Link to={`/episodes/${l.id}`}>
                                        <p className="-mb-0.5 text-body-4 font-medium text-metal-600">{ l.name }</p>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <p>{ l.episode }</p>
                                </Table.Cell>
                                <Table.Cell>{ l.characters?.length }</Table.Cell>
                            </Table.Row>
                        )
                    })
                }
            </Table.Body>
        </Table>
    </>
  )
}
