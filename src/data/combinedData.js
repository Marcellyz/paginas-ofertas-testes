
import data from './data';           // Dados básicos
import extraData from './extraData'; // Informações complementares
import fichaTecnica from './fichaTecnica'; // Ficha técnica dos produtos

// Integrando os dados
const combinedData = data.map(book => ({
  ...book, // Dados básicos
  ...extraData.find(extra => extra.id === book.id), // Dados complementares
  fichaTecnica: fichaTecnica.find(ficha => ficha.id === book.id) // Ficha técnica
}));

// Exportando o conjunto integrado
export default combinedData;
