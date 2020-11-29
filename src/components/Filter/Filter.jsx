import s from './Filter.module.css';

export default function Filter({ value, onChange }) {
  return (
    <label>
      Filter
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
