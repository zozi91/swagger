import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SwaggerUI, {presets} from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';

class Swagger extends Component {

  componentDidMount() {
    SwaggerUI({
      dom_id: '#swaggerContainer',
      url: this.props.url,
      spec: this.props.spec,
      presets: [presets.apis]
    });
  }

  render() {
    return (
      <div id="swaggerContainer" />
    );
  }
}

Swagger.propTypes = {
  url: PropTypes.string,
  spec: PropTypes.object
};

Swagger.defaultProps = {
  url: `https://raw.githubusercontent.com/rubykube/peatio/master/docs/api/swagger.json`
};

export default Swagger;
