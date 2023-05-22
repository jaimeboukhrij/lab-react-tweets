import ProfileImage from '../ProfileImage/ProfileImage'
import User from '../User/User'
import Timestamp from '../Timestamp/Timestamp'
import Message from '../Message/Message'

import './Tweet.css'

const Tweet = ({ tweet }) => {
    const { user, image, message, timestamp } = tweet

    return (

        <div className="tweet">
            <p className='profile'> <ProfileImage image={user.image} /></p>

            <div className="body">
                <div className="top">
                    <span className="user">
                        <span className="name"><User username={user.name} /></span>
                    </span>
                    <span className="handle"><User handle={user.handle} /></span>
                    <span className="timestamp"> <Timestamp timestamp={timestamp} /></span>

                </div>

                <p className="message">
                    <Message message={message} />
                </p>

                <div className="actions">
                    {/* Font Awesome icons */}
                    <i className="far fa-comment"></i>
                    <i className="fas fa-retweet"></i>
                    <i className="far fa-heart"></i>
                    <i className="fas fa-share"></i>
                </div>
            </div>

            <i className="fas fa-ellipsis-h"></i>
        </div>
    );
}











export default Tweet