var cmmIdx;
var Comment = React.createClass({	
	viewMore: function(i,j){
        console.log('You clicked: ', i  );
    },
	render: function() {
		var attributeId = "cmmNo_";
		attributeId+= cmmIdx++;
		return (
				<div className="comment" id={attributeId} onClick={this.viewMore.bind(this, attributeId)}>
					<h2 className="commentAuthor"> {this.props.author} </h2>
					{this.props.text}
				</div>
				);
	}
});

var CommentList = React.createClass({
	render: function() {
		cmmIdx = 1;
		var idxNm = "cmmIdx_";
		var commentNodes = this.props.data.map(function (comment, index) {
			return (
					<Comment key={idxNm+index} author={comment.author} text={comment.text}>
					</Comment>
					);
		});
		return (
				<div className="commentList">
					{commentNodes}
				</div>
				);
	}
});