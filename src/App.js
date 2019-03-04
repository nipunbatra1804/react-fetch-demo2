import React, { Component } from "react";
import Card from "./components/Card/Card";
import axios from "axios";
import unsplash from "./services/unsplash";
class App extends Component {
  state = {
    resultList: []
  };

  async componentDidMount() {
    const searchTerm = "flowers";
    try {
      const response = await unsplash.get(`search/photos?query=${searchTerm}`);
      //const data = await response.json();
      const data = response.data;
      console.log(data);
      this.setState({ resultList: data.results });
    } catch (error) {}
  }
  /*
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${searchTerm}`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`
      }
    }
  );
  */
  render() {
    const { resultList } = this.state;
    return (
      <div className="container">
        {resultList.map(result => (
          <Card
            key={result.id}
            imageUrl={result.urls.small}
            title={result.description}
          />
        ))}
      </div>
    );
  }
}

export default App;
