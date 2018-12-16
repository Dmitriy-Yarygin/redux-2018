import React, { PureComponent } from "react";
import { arrayOf, shape, string } from "prop-types";
import ListItem from "../containers/ListItem";

class List extends PureComponent {
  static propTypes = {
    items: arrayOf(
      shape({
        id: string,
        title: string,
        url: string,
        tags: string
      })
    )
  };
  static defaultProps = {
    items: []
  };

  render() {
    const { items, count } = this.props;

    const list = items.map(item => <ListItem key={item.id} {...item} />);

    return (
      <div>
        <span className="counter">Count filtered: {items.length} / total: {count}</span>
        <ul className="List"> {list} </ul>
      </div>
    );
  }
}

export default List;
