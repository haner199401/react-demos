/**
 * Created by haner on 16/6/13.
 *
 */
import './style/index.scss';
import React from 'react';

export default class Loader extends React.Component {


    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {

        return (<div className="">
                <div className="loading loading-bonday">
                    <div className="loading-bounce1"></div>
                    <div className="loading-bounce2"></div>
                    <div className="loading-bounce3"></div>
                </div>
        </div>);
    }
}