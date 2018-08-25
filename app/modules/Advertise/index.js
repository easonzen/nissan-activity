import React, { Component } from 'react';
import './style.scss';
import Arrow from 'components/Arrow';

class Advertise extends Component {
    render() {
        return (
            <div className="swiper-slide advertise">
                {/* <span className="logo" />
                <span className="fifteen-year" />
                <ul className="ads">
                    <li className="ad ad1" />
                    <li className="ad ad2" />
                    <li className="ad ad3" />
                </ul> */}
                <p className="first-p">
                    2003.06.16<br /> 东风日产第1辆整车下线<br /> 2018.8.27<br /> 东风日产1000万整车产量达成<br />{' '}
                    从无到有<br /> 从1到1000万<br />
                    从第一款阳光到轩逸·纯电<br /> 是每个东风日产人同心、共创的成果结晶<br />
                </p>
                <p className="second-p">
                    打开每个东风日产人1000万记忆<br />
                    定制属于你的东风日产文化衫
                </p>
                <Arrow />
            </div>
        );
    }
}

export default Advertise;
