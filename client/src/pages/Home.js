import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [questionnaires, setQuestionnaires] = useState([]);
  const [expandedCards, setExpandedCards] = useState({});

  useEffect(() => {
    axios.get("http://localhost:4000/api/questionnaires")
      .then(res => {
        setQuestionnaires(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const toggleCardExpansion = (key) => {
    setExpandedCards(prevState => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  };
  console.log(expandedCards);
  return (
    <div className="home">
      <div className="container">
        {questionnaires.map((questionnaire, key) => (
          <div key={key} className={`q-card ${expandedCards[key] ? 'expanded' : ''}`}>
            <div className="q-title">
              <h2>{questionnaire.title}</h2>
            </div>
            <div className="q-description">
              <div className="limited-description">

                <p>{!expandedCards[key]
                  ? questionnaire.description.slice(0, 100) + '...'
                  : questionnaire.description
                }
                  {questionnaire.description.length > 100 && (
                    <button className="read-more-button" onClick={() => toggleCardExpansion(key)}>
                      {expandedCards[key] ? 'See Less' : 'See More'}
                    </button>
                  )}</p>

              </div>
              <p>Number of questions: {questionnaire.questions.length}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
