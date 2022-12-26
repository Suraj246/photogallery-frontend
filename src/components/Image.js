import React from 'react'

const Image = ({ uploadedFile, deleteItem, setDeleteItem, modal }) => {

    return (
        <>
            <div className='image-container'>
                {uploadedFile.length === 0 &&

                    <img src="\uploads\2887078.jpg" alt="" className='up-back' />
                }
                {uploadedFile.map((elem, idx) => {
                    const dot = '.'
                    const title = []
                    for (let i = 0; i < elem.title.length; i++) {
                        if (elem.title[i] === dot) {
                            title.push(elem.title.slice(0, i))
                        }

                    }
                    return (
                        <div key={idx} className="image-upload">
                            <img src={`https://photogallery-backend.onrender.com/uploads/${elem.profile}`} alt="" />
                            <div className="img-info">
                                <span>{title}</span>
                                <span>{elem.type}</span>
                            </div>

                            {modal ?
                                null :
                                <input type="checkbox" id="deletePhoto" className='larger' onChange={(e) => {
                                    if (e.target.checked === true) {
                                        setDeleteItem([...deleteItem, elem._id])
                                    }
                                    else {
                                        setDeleteItem(deleteItem.filter(s => s !== elem._id))
                                    }
                                }
                                } />
                            }
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Image
