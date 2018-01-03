const PropTypes = require('prop-types');
const React = require('react');
const bodymovin = require('bodymovin/build/player/bodymovin.min');

class ReactBodymovin extends React.Component {
  componentDidMount () {
    this.options = Object.assign({}, this.props.options);
    this.options.wrapper = this.wrapper;
    this.options.renderer = 'svg';
    this.animation = bodymovin.loadAnimation(this.options);
  }

  componentDidUpdate() {
    this.props.play ? this.play() : this.stop();
  }

  componentWillUpdate(nextProps) {
    if (this.options.animationData !== nextProps.options.animationData) {
      this.destroy();
      this.options.animationData = nextProps.options.animationData;
      this.animation = bodymovin.loadAnimation(this.options);
    }
  }

  componentWillUnmount () {
    this.animation.destroy()
  }

  play() {
    this.animation.play();
  }

  stop() {
    this.animation.stop();
  }

  render () {
    return <div className='react-bodymovin-container' ref={(element) => { this.wrapper = element }} />
  }
}

ReactBodymovin.defaultProps = {
  play: false,
};

ReactBodymovin.propTypes = {
  play: PropTypes.bool,
};

module.exports = ReactBodymovin
