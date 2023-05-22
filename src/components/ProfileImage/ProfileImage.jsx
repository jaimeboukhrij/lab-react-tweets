import './ProfileImage.css'

const ProfileImage = ({ image }) => {

    return (
        <>
            <img src={image} alt="" className='profile' />
        </>
    )


}

export default ProfileImage