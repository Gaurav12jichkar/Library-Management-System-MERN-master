import React from 'react'
import './PhotoGallery.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function PhotoGallery() {
    return (
        <div className='photogallery-container'>
            <h1 className='photogallery-title'>Photo Gallery</h1>
            <div className="photogallery-images">
                <img src="https://media.istockphoto.com/id/181279439/photo/our-lady-of-africa-basilica-hill-above-bologhine-area.jpg?s=1024x1024&w=is&k=20&c=_w_6BRS1qdeQso57WpKjrLxmPL3869jX_r16YI3KgCA=" alt=''/>
                <img src="https://media.istockphoto.com/id/2148263755/photo/young-female-reader-in-library.jpg?s=1024x1024&w=is&k=20&c=4i5kE7TdHjIJlJaEEmbW49pbsMBz6sJ0WHye_9t8e3k=" alt=''/>
                <img src="https://media.istockphoto.com/id/1162554764/photo/woman-librarian-among-books.jpg?s=1024x1024&w=is&k=20&c=qoVcXgyyxWcfGfVAqwWgf_vkBO8MgdJFgGT65PwYEiE=" alt=''/>
                <img src="https://media.istockphoto.com/id/664623154/photo/mature-student-in-the-library.jpg?s=1024x1024&w=is&k=20&c=dwxYF9MNJZpjVKzSXZ77kkdYLBUyduneV1as5x8S6bs=" alt=''/>
                
                
            </div>
            <button>VIEW MORE<ArrowForwardIosIcon style={{fontSize:20}}/></button>
        </div>
    )
}

export default PhotoGallery