import "../components/css/BookDetails.css";
import PropTypes from "prop-types";

const BookDetails = ({details}) => {
  return (
    <div className="technical-details">
      <h2 className="title">Ficha técnica</h2>
      <ul className="details-list">
        <li>
          <strong>Título original:</strong>{details.title}
        </li>
        <li>
          <strong>Páginas:</strong> {details.paginas}
        </li>
        <li>
          <strong>Formato:</strong> {details.formato}
        </li>
        <li>
          <strong>Peso:</strong> {details.peso}
        </li>
        <li>
          <strong>Acabamento:</strong>Livro{details.acabamento}
        </li>
        <li>
          <strong>Lançamento:</strong>{details.lancamento}
        </li>
        <li>
          <strong>ISBN:</strong>{details.isbn}
        </li>
        <li>
          <strong>Selo:</strong>{details.selo}
        </li>
        <li>
          <strong>Editora:</strong>{details.editora}
        </li>
      </ul>
    </div>
  );
};
// Validação das props usando prop-types
BookDetails.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string.isRequired,
    paginas: PropTypes.number.isRequired,
    formato: PropTypes.string.isRequired,
    peso: PropTypes.string.isRequired,
    acabamento: PropTypes.string.isRequired,
    lancamento: PropTypes.string.isRequired,
    isbn: PropTypes.string.isRequired,
    selo: PropTypes.string.isRequired,
    editora: PropTypes.string.isRequired,
  }).isRequired,
};
export default BookDetails;
