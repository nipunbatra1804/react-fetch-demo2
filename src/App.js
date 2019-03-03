import React, { Component } from "react";
import unsplash from "./service/unsplash"
import Card from "./components/Card/Card";

class App extends Component {
  state = {
    resultList: []
  };

  async componentDidMount() {
    const searchTerm="trees"
    try{
      const response = await fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}`,{
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`
        }
      })
      const json = await response.json()
      this.setState({resultList: json.results})
    }
    catch(err){
      console.log(err)
    }

  }

  render() {
    const { resultList } = this.state;
    return (
      <div className="container">
        {resultList.map((result, index) => (
          <Card key={index} imageUrl={result.urls.small} title={result.description} />
        ))}
      </div>
    );
  }
}

export default App;
