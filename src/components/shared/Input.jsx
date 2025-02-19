export default function Input({ label, name, type = '', value = '', disabled, onChange }) {
    
    return (
      <label>
        {label}:
        {' '}
        <input name={name} type={type} value={value} disabled={disabled} onChange={onChange}

        />
      </label>
    );
  }
  