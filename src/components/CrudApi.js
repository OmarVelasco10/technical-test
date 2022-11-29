import React, {useEffect, useState} from 'react';
import { helpHttp } from '../helpers/helpHttp';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';


const CrudApi = () => {
    const [db,setDb] = useState([]);
    const [dataToEdit, setDataToEdit] = useState(null);

    let api = helpHttp();
    let url = "http://localhost:5000/library";

    useEffect(() => {
        api.get(url).then((res) => {
            console.log(res);
            if(!res.err) {
                setDb(res);
            } else {
                setDb(null);
            }
        })
    }, []);

    const createData = (data) => {
        data.id = Date.now();
        setDb([...db,data]);
    };

    const updateData = (data) => {};

    const deleteData = (data) => {};


  return (
    <div>
        <h2>Crud API</h2>
        <div className='grid-1-2'>
            <CrudForm
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
            />

            <CrudTable
                data={db}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
            />
        </div>
    </div>
  )
};

export default CrudApi;
