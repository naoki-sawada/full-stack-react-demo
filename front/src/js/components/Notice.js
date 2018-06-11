import Animate from 'grommet/components/Animate';
import Notification from 'grommet/components/Notification';
import { connect } from 'react-redux';

@connect(state => ({
  notice: state.notice,
}), {
})
export default class Notice extends React.Component {
  render() {
    let renderComponets = null;
    if (this.props.notice.status) {
      renderComponets = (
        <Animate enter={{"animation": "slide-down", "duration": 1000, "delay": 0}} keep={true}>
          <Notification message={this.props.notice.message} status={this.props.notice.status} />
        </Animate>
      );
    } else {
      renderComponets = <div />;
    }

    return renderComponets;
  }
}
