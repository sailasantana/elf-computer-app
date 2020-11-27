import React, {Component} from 'react';
import FeatureOption from './feature-options';
import Features from './feature';
import slugify from 'slugify';


class Options extends Component {

    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
              
                return (
                    <FeatureOption
                        selected={this.props.selected}
                        itemHash={itemHash}
                        feature={feature}
                        item={item}
                        key={item.name}
                        updateFeature={this.props.updateFeature}/>
                );
            });
      
            return (
                <Features
                    key={idx} 
                    feature={feature}
                    options={options}
                    featureHash={featureHash}/>
            );
        });

        return (
        <form className="main__form">       
        {features} </form>
        );
    }
}

export default Options;