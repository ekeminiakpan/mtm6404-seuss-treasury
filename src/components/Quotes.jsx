import { useState, useEffect } from "react";

function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://seussology.info/api/quotes", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch((error) => console.error("Error fetching quotes:", error));
  }, []);

  return (
    <section className="quotes-section">
      <h2>Random Quotes</h2>
      <div className="quotes">
        {quotes.map((quote) => (
          <div key={quote.id} className="quote">
            <h3>"{quote.text}"</h3>
            <p className="book-title">- {quote.book.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Quotes;
