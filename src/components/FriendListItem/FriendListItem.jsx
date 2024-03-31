import css from './FriendListItem.module.css'

export default function FriendListItem({
    friend: {
        avatar,
        name,
        isOnline,
    },
}) {
    const textClass = [];

    if (isOnline) {
        textClass.push(css.isOnLine)
    } else {
        textClass.push(css.isOffLine)
    };

    return (
        <div className={css.wrapper}>
            <img src={avatar} alt="Avatar" width="48" />
            <p className={css.title}>{name}</p>
            <p className={textClass}>
                {isOnline ? "Online" : "Offline"}
            </p>
        </div>
    );
}