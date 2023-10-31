import "./BookTable.css"

const BookTable = ({bookDetails, setBookDetails}) => {
    const handleDelete = (id) => {
const newBookDetails = bookDetails.filter(book => book.id !== id );
setBookDetails(newBookDetails)

    }

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>ISBN</th>

                </tr>
                </thead>
                <tbody>
{bookDetails.map((bookDetail, index) => {

    return (
        <tr key={bookDetail.id}>
            <td>{bookDetail.title}</td>
            <td>{bookDetail.author}</td>
            <td>{bookDetail.isbn}</td>
            <td><button onClick={() => handleDelete(bookDetail.id)}>Delete</button></td>
        </tr>
    )
})}
                </tbody>
            </table>
        </div>
    )
    
    }
    
    export default BookTable;



