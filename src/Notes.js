import React from 'react'
import { useGlobalContext } from './Context'
import { Link } from 'react-router-dom';
const Notes = () => {
    const { item, title, priority, detail, time, allItem, setTitle, setdetail, setPriority } = useGlobalContext();
    const deleteId = (id) => {
        const updateItem = item.filter((elem) => {
            return elem.id !== id;
        })
        allItem(updateItem);
    }
    return (
        <>
            <div className='container'>
                <div className='row row-cols-3'>
                    {
                        item.map((elem) => {
                            const { id, title, priority, detail } = elem;
                            let newdata = detail.slice(0, 15);
                            return (
                                <div className='col card text-center' key={elem.id}>
                                    <h1><span>Title: </span>{title}</h1>
                                    <h2><span>Detail: </span>{newdata.length == 15 ? `${newdata}...` : `${newdata}`}</h2>
                                    <h3><span>Priority: </span>{priority}</h3>
                                    <h4><span>CreateTime: </span>{elem.time}</h4>
                                    <div className='flex align-center p-2 m-2'>
                                        <Link to={`/NoteId/${elem.id}`}>
                                            <button className='btn btn-outline-success'>Read</button>
                                        </Link>
                                        <button className='btn btn-danger' onClick={(e) => deleteId(elem.id)}>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='btn btn-outline-danger flex align-item-center' onClick={() => allItem([])}>DeleteAll</div>
        </>
    )
}

export default Notes