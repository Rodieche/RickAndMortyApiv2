import { useEffect, useState } from "react"
import { getData } from "../helpers/api-request";
import { Card } from "../components/Card";
import { Typography, Pagination } from "keep-react";
import Swal from 'sweetalert2';
import { getQuery } from "../helpers/getQuery";

export const Characters = () => {

    const [ characters, setCharacters ] = useState([]);
    const [ curr, setCurr ] = useState(1);
    const [ totalPages, setTotalPages ] = useState(0);

    useEffect(() => {
        async function fetchData(){
            try{
                Swal.fire({
                    title: 'Loading',
                    text: 'Loading characters, please wait...',
                    icon: 'info',
                    allowOutsideClick: false,
                    allowEnterKey: false,
                    allowEscapeKey: false
                });
                Swal.showLoading();
                const { info, results } = await getData('character', curr);
                console.log(info)
                setTotalPages(info.pages);
                if(info.prev){
                    setCurr(getQuery(info.prev) + 1)
                }else{
                    setCurr(getQuery(info.next) - 1)
                }
                setCharacters(results);
                Swal.close();
            }catch(error){
                console.log('Error fetching data:', error);
            }
        }
        fetchData();
    },[curr]);

    const pageChange = (e) => {
        setCurr(e);
    }

    return (
    <>
        <Typography variant="heading-3" className="text-center m-10 rubik">Rick and Morty Characters</Typography>
        <div className="text-center">
            <Pagination
                currentPage={curr}
                onPageChange={pageChange}
                totalPages={totalPages}
                iconWithText={true}
                prevNextShape="circle"
                activeCurrentPageShape="circle"
            />
        </div>
        <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2">
                {characters.map(character => {
                    return <Card character={character}  key={ character.id } />
                })}
            </div>
        </div>
    </>
  )
}
