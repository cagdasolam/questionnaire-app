import { useEffect, useState } from "react";
import axios from "axios";

import QuesrtionnaireCard from "../components/QuestionnaireCard";

const Home = () => {
  const [questionnaires, setQuestionnaires] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/questionnaires")
      .then(res => {
        setQuestionnaires(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);


  return (
    <div className="home">
      <div className="container">
        {questionnaires.map((questionnaire, key) => (
          <QuesrtionnaireCard questionnaire={questionnaire} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Home;
