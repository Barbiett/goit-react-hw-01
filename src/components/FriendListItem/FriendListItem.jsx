import css from "./FriendListItem.module.css";
import clsx from "clsx";
export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  const containerColor = clsx(
    css.container,
    isOnline ? css.online : css.offline
  );
  return (
    <div className={containerColor}>
      <img src={avatar} alt="Avatar" className={css.image} />
      <p className={css.name}>{name}</p>
      <p style={{ fontSize: 50, color: isOnline ? "green" : "red" }}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
