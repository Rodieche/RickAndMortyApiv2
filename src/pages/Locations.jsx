import { useEffect, useState } from "react"
import { getData } from "../helpers/api-request";

import {  Button, Table, Typography } from "keep-react";

import { ArrowRight, ArrowLeft } from "phosphor-react";

import { Link } from 'react-router-dom';

import { closeLoading, loading } from "../helpers/Loading";

export const Locations = () => {

    const [ locations, setLocations ] = useState([]);
    const [ currPage, setCurrPage ] = useState(1);
    const [ next, setNext ] =useState(null);
    const [ prev, setPrev ] =useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                loading('locations');
                const { info, results } = await getData('location', currPage);
                setLocations(results);
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

    const goLocations = (number) => {
        setCurrPage(c => c + number);
    }

    return (
    <>
        <Typography variant="heading-3" className="text-center m-10 rubik">Rick and Morty Locations</Typography>
        <div className="flex items-center justify-center">
            { prev? (
                <Button onClick={() => goLocations(-1)}>
                    <ArrowLeft className="ml-2 h-3 w-3" />
                    Previous Locations
                </Button>
            ): null }
            { next? (
                <Button onClick={() => goLocations(1)}>
                    Next Locations
                    <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
            ): null }
        </div>
         <Table showCheckbox={false} hoverable={ true } striped={ true }>
            <Table.Caption>
                <div className="my-5 flex items-center justify-between px-6">
                <div className="flex items-center gap-5">
                    <p className="text-body-1 font-semibold text-metal-600">Locations</p>
                </div>
                </div>
            </Table.Caption>
            <Table.Head>
                <Table.HeadCell>Name</Table.HeadCell>
                <Table.HeadCell>Type</Table.HeadCell>
                <Table.HeadCell>Dimension</Table.HeadCell>
                <Table.HeadCell>Residents</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-gray-25 divide-y">
                {
                    locations.map(l => {
                        return(
                            <Table.Row className="bg-white" key={l.id}>
                                <Table.Cell>
                                    <Link to={`/locations/${l.id}`}>
                                        <p className="-mb-0.5 text-body-4 font-medium text-metal-600">{ l.name }</p>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    { l.type }
                                </Table.Cell>
                                <Table.Cell>
                                    <p>{ l.dimension }</p>
                                </Table.Cell>
                                <Table.Cell>{ l.residents.length }</Table.Cell>
                            </Table.Row>
                        )
                    })
                }
            </Table.Body>
        </Table>
    </>
  )
}
