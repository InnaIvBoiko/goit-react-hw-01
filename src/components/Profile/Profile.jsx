export const Profile = () => {
    return (
        <div className="profile-wrap">
            <div>
                <img
                    className="profile-img"
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                    alt="User avatar"
                />
                <p className="profile-title">Petra Marica</p>
                <p>@pmarica</p>
                <p>Salvador, Brasil</p>
            </div>

            <ul className="profile-list">
                <li className="profile-list-item">
                    <span>Followers</span>
                    <span>1000</span>
                </li>
                <li className="profile-list-item">
                    <span>Views</span>
                    <span>2000</span>
                </li>
                <li className="profile-list-item">
                    <span>Likes</span>
                    <span>3000</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;