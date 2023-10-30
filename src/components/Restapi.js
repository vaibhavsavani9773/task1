import React, { Component } from 'react';

class Restapi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    // Replace 'your-api-endpoint' with the actual API endpoint you want to fetch data from
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((error) => {
        this.setState({ error, isLoading: false });
      });
  }

  render() {
    const { data, isLoading, error } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        <h2>Data from REST API</h2>
        <ul>
          {data.map((item) => (
            <li key={item.userid}>{item.title}</li>
            // Replace 'id' and 'name' with the actual data fields you want to display
          ))}
        </ul>
      </div>
    );
  }
}

export default Restapi;
