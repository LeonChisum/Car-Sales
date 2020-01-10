import React ,{useEffect} from 'react';

import { addFeature } from '../actions/actions';
import { connect } from 'react-redux';

const AdditionalFeature = props => {

  

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button"
              onClick={() => props.addFeature(props.feature.id)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapDispatchToProps = {
  addFeature
}

export default connect(null, mapDispatchToProps)(AdditionalFeature);
