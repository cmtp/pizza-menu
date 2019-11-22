import React, { PureComponent } from "react";
import { Table } from "semantic-ui-react";
import PizzaDetailTableHeader from "./PizzaDetailTableHeader";
import PizzaDetailTableItem from './PizzaDetailTableItem';

class PizzaDetailTable extends PureComponent {
  render() {
    const { toppings, deleteToppingFromPizza } = this.props;
    return (
      <>
        <Table>
          <PizzaDetailTableHeader />
          <Table.Body>
            {toppings.map(topping => (
              <PizzaDetailTableItem
                topping={topping}
                key={topping._id}
                deleteToppingFromPizza={deleteToppingFromPizza}
              />
            ))}
          </Table.Body>
        </Table>
      </>
    );
  }
}

export default PizzaDetailTable;
