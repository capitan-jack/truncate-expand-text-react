var React = require('react');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;

var TruncatedParagraph = React.createClass({
    getInitialState: function(){
      return{inlineExpanded:false};
    },
    handleExpand:function(event){
      event.preventDefault();
      if(this.props.expandUrl){
        browserHistory.push(this.props.expandUrl);
      }else{
        this.setState({inlineExpanded:true});
      }
    },
    render:function(){
      var expandToggle = "";
      var displayText = this.props.text;
      if(!this.state.inlineExpanded && this.props.text.length > this.props.truncLength){
        displayText = <span> {displayText.substring(0,this.props.truncLength).replace(/\w+$/, '')}</span>;
        if(!this.props.simpleTruncate){
          expandToggle = <a href="#" onClick={this.handleExpand} style={this.props.extraStyles}>...see more</a>;
        }
      }
      return(
          <p ref="truncateText" style={this.props.styleMap}>
            {displayText}
            {expandToggle}
          </p>
        );
    },
});

module.exports = TruncatedParagraph;
