import React, { Component } from 'react';
import './styles/App.css';
import Table from './components/Table/Table.js'

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    // this.callApi()
    //   .then(res => this.setState({ response: res.express }))
    //   .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div sharestype="App">
        <p sharestype="Table-header">401k Tracking & Analysis</p>
        <Table tableData={dataResponse.filter(data => data.id === 1)} />
        <Table tableData={dataResponse.filter(data => data.id === 2)} />
        <Table tableData={dataResponse.filter(data => data.id === 3)} />
        <Table tableData={dataResponse.filter(data => data.id === 4)} />
        <Table tableData={dataResponse.filter(data => data.id === 5)} />
      </div>
    );
  }
}

export default App;
