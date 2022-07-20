import style from './card.module.scss';
const Card = ({label}: {label: string}) => {
    return (
        <div className={style.card}>
            <h2>{label}</h2>
        </div>
    );
}

export default Card;