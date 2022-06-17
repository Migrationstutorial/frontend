import { NavLink, Route, Routes } from "react-router-dom";
import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { BsTranslate } from "react-icons/bs";

import './Einbuergerungstest.scss';
import { Login } from "./Login";
import QuestionDE from "../data/einbuergerungstestJSON/einbuergerungstestDeutschland";

export const Einbuergerungstest = () => {
    // Import from AppContext the success state variable in order to show if someone is logged in
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
    const { text, translate, translatedText, setText, setTranslatedLanguage } = useContext(AppContext);

    const [query, setQuery] = useState("");

    return (
        <>
            {isLoggedIn ? (
                <div className="searchBar">
                    <h1 className="title">Einbürgerungstestfragen</h1>
                    <input
                        className="searchInput"
                        type="text"
                        placeholder="nach einer bestimmten Frage oder Thema suchen..."
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <div className="allJsonData">
                    {QuestionDE.filter((testQuestion) => {
                        if (query == "") {
                            return testQuestion;
                        } else if (
                            testQuestion.question
                                .toLowerCase()
                                .includes(query.toLowerCase())
                        ) {
                            return testQuestion;
                        } else if (testQuestion.number.includes(query)) {
                            return testQuestion;
                        }
                    }).map((testQuestion) => {
                        return (
                            <div className="jsonData" key={testQuestion.number}>
                                {testQuestion.number}: {""} 
                                <BsTranslate style={{marginLeft:"10px"}} onClick={() => translate([testQuestion.question, testQuestion.correctAnswer]) } />
                                <br /><br />
                                {testQuestion.question}  
                                <span style={{marginLeft:"10px", color:"brown"}}>{testQuestion.question === text.substring( 0, text.indexOf(">")) && translatedText[0]}</span>
                                
                                <div className="answer">
                                {testQuestion.correctAnswer}
                                <span style={{marginLeft:"10px", color:"brown"}}>{testQuestion.correctAnswer === text.substring( text.indexOf(">")+1, text.length) && translatedText[1]}</span>
                                </div>
                           </div>
                        );
                    })}
                    </div>
                </div>
           ) : (
                <Login />
             )}
        </>
    );
};


