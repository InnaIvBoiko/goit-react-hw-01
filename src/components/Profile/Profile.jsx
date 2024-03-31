import css from './Profile.module.css';

export default function Profile({
    userData: {
        username,
        tag,
        location,
        avatar,
        stats: {
            followers, 
            views,
            likes,    
        },
    }
}) {
    return (
        <div className={css.container}>
            <div>
                <img
                    className={css.avatar}
                    src={avatar}
                    alt="User avatar"
                />
                <p className={css.title}>{username}</p>
                <p className={css.text}>@{tag}</p>
                <p className={css.text}>{location}</p>
            </div>

            <ul className={css.list}>
                <li className={css.stat}>
                    <span>Followers</span>
                    <span className={css.bold}>{followers}</span>
                </li>
                <li className={css.stat}>
                    <span>Views</span>
                    <span className={css.bold}>{views}</span>
                </li>
                <li className={css.stat}>
                    <span>Likes</span>
                    <span className={css.bold}>{likes}</span>
                </li>
            </ul>
        </div>
    );
}