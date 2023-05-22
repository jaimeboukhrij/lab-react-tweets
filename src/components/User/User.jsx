import './User.css'

const User = ({ username, handle }) => {

    return (
        <>
            <p className='name'>{username}</p>
            <p className='handle'>{handle}</p>

        </>
    )


}
export default User