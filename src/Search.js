import React from 'react'
import { useGlobalContext } from './Context'
const Search = () => {
    const { item, title, priority, detail, time, allItem, setTitle, setdetail, setPriority } = useGlobalContext();
    const AddItem = () => {
        if (title === "")
            alert("please enter Title");
        else if (title.length > 15)
            alert("please set title 1 to 15 character ");
        else {
            const Allitem = {
                id: new Date().getTime().toString(),
                title: title,
                priority: priority,
                detail: detail,
                time: time
            }
            allItem([...item, Allitem])
        }
        setTitle("");
        setdetail("");
        setPriority(0)
    }
    const setByPriority = () => {
        let modifyArray = [];
        let arr = [];
        item.map((elem) => {
            arr.push(parseInt(elem.priority));
        })
        arr.sort((a, b) => {
            return a - b;
        })
        for (var i = 0; i < arr.length; i++)
            for (var j = 0; j < item.length; j++)
                if (item[j].priority == arr[i]) {
                    modifyArray.push(item[j]);
                    break;
                }
        allItem(modifyArray);
    }
    document.title="NotesApp"
    return (
        <div className='container'>
            <div className='row text-center input'>
                <h1 style={{ fontFamily: "'Gloria Hallelujah', cursive" }} >NotesApp</h1>
            </div>
            <hr></hr>
            <div className='row m-2 text-center'>
                <div className='col'>
                    {/* <label htmlFor='Title' style={style}>Title</label><br></br> */}
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} style={{ backgroundColor: "wheat", border: "none", fontSize: "20px" }} placeholder='Title' />
                </div>
                <div className='col'>
                    {/* <label htmlFor='details' style={style}>Details</label><br></br> */}
                    <textarea value={detail} type="text" onChange={(e) => setdetail(e.target.value)} style={{ backgroundColor: "wheat", border: "none" }} cols="19" rows="1" placeholder='Enter text...' />
                </div>
                <div className='col'>
                    <label htmlFor='Title'>PRIORITY</label><br></br>
                    <input value={priority} className="w-12" type="number" onChange={(e) => setPriority(e.target.value)} style={{ backgroundColor: "wheat", border: "none", fontSize: "10px" }} placeholder='priority' />
                </div>
                <div className='col'>
                    <button className='btn btn-outline-info' onClick={AddItem}>Add+</button>
                </div>
                <div className='col'>
                    <button className='btn btn-outline-info' onClick={setByPriority}>SetPriority</button>
                </div>
                <div className='col'>
                    <h2 style={{ color: "green" }}>{time}</h2>
                </div>
            </div>
            <hr></hr>
        </div>

    )
}

export default Search