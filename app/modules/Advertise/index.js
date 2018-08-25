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
                <p className="p1 first text">2003.06.16</p>
                <p className="p2 text">东风日产第1辆整车下线</p>
                <p className="p3 text">2018.8.27</p>
                <p className="p4 text">东风日产1000万整车产量达成</p>
                <p className="p5 text">从无到有</p>
                <p className="p6 text">从1到1000万</p>
                <p className="p7 text">从第一款阳光到轩逸·纯电</p>
                <p className="p8 text">是每个东风日产人同心、共创的成果结晶</p>
                <p className="p9 small1 text">打开每个东风日产人1000万记忆</p>
                <p className="p10 small2 text">定制属于你的东风日产文化衫</p>
                <Arrow />
            </div>
        );
    }
}

export default Advertise;
