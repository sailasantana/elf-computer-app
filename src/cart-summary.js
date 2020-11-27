import React, {Component} from 'react';
import Order from './order';

class Cart extends Component {
    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
          const featureHash = feature + '-' + idx;
          const selectedOption = this.props.selected[feature];

          return (
            <Order
                featureHash={featureHash}
                feature={feature}
                selectedOption={selectedOption.name}
                cost={selectedOption.cost}
                key={selectedOption.name}/>
          );

        });

        return (
            <section className="main__summary">
                
                <h2>Your cart</h2>
                {summary}                                
            </section>
        );
    }
}

export default Cart;