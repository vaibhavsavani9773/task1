import React from 'react';

class ListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        // Add your list items here
      ]
    };
  }

  render() {
    // Use the map() function to create a list of items
    const listItems = this.state.items.map((item, index) => (
      <li key={index}>{item}</li>
    ));

    return (
      <div>
        <h1>List of Items</h1>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}

export default ListComponent;
