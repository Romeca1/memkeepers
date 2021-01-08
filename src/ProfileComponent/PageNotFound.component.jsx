import React, {Component} from 'react';
import img404 from "../assets/images/resources/404.jpg";

const pStyle = {
    backgroundImage: `url(${img404})`

  };
export default class PageNotFound extends Component{
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this); 
  }

  goBack(){
    this.props.history.goBack();
}

render(){

    return(
      <div>
        <div className="theme-layout">
          <div className="container-fluid pdng0">
            <div className="row">
              <div className="col-lg-12">
                <div className="error-page">

                  <div className="bg-image"  style={pStyle} />
                  <div className="error-meta">
                    <h1>whoops!</h1>
                    <span>we couldn't find that page </span>
                    <button onClick={this.goBack}>Go Back </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
}