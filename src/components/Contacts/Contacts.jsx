import s from './Contacts.module.css';

export default function Contacts({ contacts }) {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id}>
            <span className={s.name}>Name: {name}</span>
            <span className={s.number}>Number: {number}</span>
          </li>
        );
      })}
    </ul>
  );
}
