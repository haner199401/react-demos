/**
 * Created by haner on 16/6/21.
 */
import './style/home.scss';

import React from 'react';
import HomeList from './HomeList.jsx';
import HomeListData from '../../mock-data/homelist_data';
import Immutable from 'immutable';
import request from 'superagent';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:Immutable.List([])
        };
    }

    componentDidUpdate(p){
        console.log(p);
    }

    componentDidMount() {
        request.get('https://api.xxjz.org/post?type=article').end(function(t,res){
            this.setState({
                data:Immutable.List(res.body)
            });
        }.bind(this));
    }

    render() {
        return (
            <div className="home">
                <h3>HomeList</h3>
                <HomeList data={this.state.data}/>
            </div>
        );
    }

}

