import "../components/css/CustomerReviews.css";
import book1 from "../assets/livros_review/book1.jpg";
import book2 from "../assets/livros_review/book2.jpg";
import book3 from "../assets/livros_review/book3.jpg";

const CustomerReviews = () => {
  const images = [book1, book2, book3];
  const progressData = [
    { percentage: 100, label: "100%" },
    { percentage: 80, label: "90%" },
    { percentage: 70, label: "70%" },
    { percentage: 60, label: "60%" },
    { percentage: 50, label: "50%" },
  ];

  const reviewsData = [
    {
      name: "Amanda Luna",
      date: "22/08/2024",
      comment:
        "Ótimo livro, amei! O livro veio em ótimas condições. Amei a leitura e recomendo a todos!",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Alexandra Silva",
      date: "22/08/2024",
      comment:
        "Leitura interessante. O livro veio em ótimas condições. Amei a leitura e recomendo a todos!",
      rating: "⭐⭐⭐⭐☆",
    },
  ];

  return (
    <div className="customer-reviews">
      <h2 className="title">Avaliações dos clientes</h2>

      <div className="reviews-container">
        {/* Sessão de avaliações globais */}
        <div className="global-reviews">
          <div className="rating-summary">
            <span className="stars">⭐⭐⭐⭐☆</span>
            <span className="rating-text">4 de 5 estrelas</span>
          </div>
          <p className="total-reviews">3.011 avaliações globais</p>
          <div className="progress-bars">
            {progressData.map((bar, index) => (
              <div key={index} className="progress-bar">
                {/* Utilizando o percentage dinamicamente */}
                <div
                  className="filled"
                  style={{ width: `${bar.percentage}%` }}
                ></div>
                <span>{bar.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sessão de mídia e comentários */}
        <div className="media-reviews">
          <h3 className="media-title">Mídia das avaliações</h3>
          <div className="media-carousel">
            <button className="arrow left">❮</button>
            <div className="images">
              {images.map((src, index) => (
                <img key={index} src={src} alt={`Livro ${index + 1}`} />
              ))}
            </div>
            <button className="arrow right">❯</button>
          </div>

          {/* Comentários abaixo do carrossel */}
          <div className="comments-section">
            {reviewsData.map((review, index) => (
              <div key={index} className="comment-card">
                <div className="rating">{review.rating}</div>
                <p className="review-author">
                  <strong>{review.name}</strong> <span>{review.date}</span>
                </p>
                <h4>{review.comment}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Botão para ver mais comentários */}
      <button className="see-more">Ver todos os comentários</button>
    </div>
  );
};

export default CustomerReviews;
