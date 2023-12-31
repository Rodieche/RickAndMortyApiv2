import { useEffect, useState } from "react";

import { useParams } from 'react-router-dom';

import { getOneData } from "../helpers/api-request";

import Swal from 'sweetalert2';

export const Location = () => {

    const { location_id } = useParams();

    const [ location, setLocation ] = useState([]);

    useEffect(() => {
        async function fetchData(){
            try{
                Swal.fire({
                    title: 'Loading',
                    text: 'Loading location, please wait...',
                    icon: 'info',
                    allowOutsideClick: false,
                    allowEnterKey: false,
                    allowEscapeKey: false
                });
                Swal.showLoading();
                const result = await getOneData('location', location_id);
                setLocation(result);
                Swal.close();
            }catch(error){
                console.log('Error fetching data:', error);
            }
        }
        fetchData();
    },[location_id]);

  return (
    <>
        {/* <Typography variant="heading-1" className="text-center m-10">{ character.name }</Typography>
        <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2">
                <Card character={ character } onlyCard={true} key={ character.id } />
            </div>
        </div> */}
        <pre>{ JSON.stringify( location ) }</pre>
    </>
  )
}
