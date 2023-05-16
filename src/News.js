import React, { useState } from "react";
import {useEffect} from "react";

function NewsSection() {
    const[newsData, setNewsData] = useState([]);
    useEffect(() => {
        async function fetchNewsData() {
        try{
          const response = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${process.env.REACT_APP_API_key2}`);
         
          const data = await response.json();
          setNewsData(data);
        }
        catch (error){
            console.log("There was an error: " + error);
        }
        }
        fetchNewsData();
      },);

      return (
        <div>
          {newsData.results && newsData.results.slice(0, 5).map((article, index) => (
            <div key={index}>
              <p>
                Article {index + 1}: <br />
                {article.title} {article.byline} <br />
                {article.abstract} <br />
                Link: {article.url} <br />
              </p>
              <img src={article.media?.[0]?.['media-metadata']?.[2]?.url} alt="Article thumbnail" />
            </div>
          ))}
        </div>
      );
      
      
      }

export default NewsSection;