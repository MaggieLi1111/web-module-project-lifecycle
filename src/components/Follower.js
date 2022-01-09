import React from "react"

class Follower extends React.Component {
    render() {
        console.log("FollowerProps passing down from App to Follower:",this.props);
        const { follower } = this.props;

        return (
            <div className="follower">
                <img width="200px" src={follower.avatar_url} />
                <a target="_blank" href={follower.html_url}><p>{follower.login}</p></a>

            </div>
        )
    }
}

export default Follower;