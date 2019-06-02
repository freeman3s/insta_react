import React, {Component} from 'react';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';

export default class Users extends Component
{
    InstaService = new InstaService();

    state = {
        users: [],
        error: false
    }

    componentDidMount() {
        this.updateUsers();
    }

    updateUsers() {
        this.InstaService.getAllUsers()
            .then(this.onUsersLoaded)
            .catch(this.onError)
    }

    onUsersLoaded = (users) => {
        this.setState({
            users
        })
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    renderItems(arr, type) {
        if (type === 'main') {
            var newArr = arr.splice(0, 1);
        } else {
            var newArr = arr.splice(1, arr.length);
        }
        

        return newArr.map((item, index) => {
            const {name, src, alt, id} = item;

            return (
                <a href="!#" className={'user '+type} id={id}>
                    <img src={src} alt={alt}></img>
                    <div>{name}</div>
                </a>
            )
        })
    }

    render() {
        const {error, users} = this.state;
        if (error) {
            return <ErrorMessage/>
        }
        
        const mainItem = this.renderItems(users.slice(0), 'main');
        const smallItems = this.renderItems(users.slice(0), 'min');
        
        return (
            <div className="right">
                {mainItem}
                <div className="users__block">
                    {smallItems}
                </div>
            </div>
        )
    }
}
