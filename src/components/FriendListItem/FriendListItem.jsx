import css from './FriendListItem.module.css';

export default function FriendListItem({
    friend: {
        avatar,
        name,
        isOnline,
    },
}) {
    return (
        <div className={css.wrapper}>
            <img src={avatar} alt="Avatar" width="48" />
            <p className={css.title}>{name}</p>
            <p className={isOnline ? css.isOnLine : css.isOffLine}>
                {isOnline ? "Online" : "Offline"}
            </p>
        </div>
    );
}