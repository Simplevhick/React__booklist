import {useState} from 'react';
import BookTable from './BookTable';
import "./Form.css";



const Form = () => {
const [bookInfo, setBookInfo] = useState({
    title: '',
    author: '',
    isbn: ''
});

const [bookDetails, setBookDetails] = useState([]);

const handleChange = (e) => {
  setBookInfo({...bookInfo, [e.target.name]: e.target.value});
} 

const handleSubmit = (e) => {
e.preventDefault();
if(bookInfo.title !== '' && bookInfo.author !== '' && bookInfo.isbn !== ''){
     setBookDetails([...bookDetails, {id: Math.floor(Math.random() * 10), title: bookInfo.title, author: bookInfo.author, isbn: bookInfo.isbn}])
}

setBookInfo({title : '', author: '', isbn: ''});
}

    return (<> 
        <form onSubmit={handleSubmit} className='form-container'>   
            <div>
                <label className='title__label'>Title</label>
                <br />
                <input type="text" name="title" className='title__input' value={bookInfo.title} placeholder="enter a title"  onChange={handleChange}/>
            </div>
            <div className='author__div'>
                <label className='author__label'>Author</label>
                <br />
                <input type="text" name="author" className='author__input' value={bookInfo.author}  placeholder="enter a author" onChange={handleChange}/>
            </div>
            <div className='isbn__div'>
                <label className='title__label'>ISBN</label>
                <br />
                <input type="text" name="isbn" className='isbn__input' value={bookInfo.isbn} placeholder="enter an ISBN" onChange={handleChange}/>
            </div>
            <div className='btn__div'>
                 <button type="submit" className='btn'>Add Book</button>
             </div>
         </form>
         <div>
             <BookTable bookDetails={bookDetails} setBookDetails={setBookDetails} />
         </div>
        </>
    )
    
 }
 export default Form;






































