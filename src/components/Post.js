import React, {Component} from 'react';
import User from './User'

export default class Post extends Component
{
    render() {
        return (
            <div className="post">
                <User
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEBW4EkYEkB6-cyLyyJGMDiEnu1oqvlTLgPyK6Brz5SJrp38ls"
                    alt="prince"
                    name="Harry"
                    min
                />
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    lorem
                </div>
            </div>
        )
    }
}
