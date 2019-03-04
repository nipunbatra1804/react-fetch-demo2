import React, { Component } from "react";
import Card from "./components/Card/Card";

class App extends Component {
  state = {
    resultList: []
  };

  async componentDidMount() {
    const searchTerm = "flowers";
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${searchTerm}`,
        {
          headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`
          }
        }
      );
      const data = await response.json();
      console.log(data);
      this.setState({ resultList: data.results });
    } catch (error) {}
  }

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
