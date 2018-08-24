import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Portal from 'components/Portal';
import { Fade } from 'components/Transition';
import { CreatePic } from 'react-awesome-snippets';
import classlist from 'utils/classlist';
import './style.scss';

class SharePic extends Component {
    static propTypes = {
        in: PropTypes.bool.isRequired,
        config: PropTypes.array.isRequired,
        save: PropTypes.bool,
        close: PropTypes.func.isRequired
    };

    static defaultProps = {
        background: '#fff',
        width: 750,
        height: 1334
    };

    state = {
        loaded: false
    };

    onload = (...args) => {
        this.setState({
            loaded: true
        });

        if (this.props.onload) {
            this.props.onload(...args);
        }
    };

    render() {
        const { in: inProp, save, ...props } = this.props;
        const { loaded } = this.state;

        return (
            <Fade in={inProp}>
                <Portal>
                    <div
                        className={classlist('create-share-pic', {
                            'share-screenshot': !save
                        })}>
                        <CreatePic {...props} onload={this.onload}>
                            <div className="loading">生成中...</div>
                        </CreatePic>
                        {loaded && save && <div className="tip">长按保存图片</div>}
                        {/* {save && (
                            <span className="close" onClick={this.props.close}>
                                X
                            </span>
                        )} */}
                    </div>
                </Portal>
            </Fade>
        );
    }
}

export default SharePic;
