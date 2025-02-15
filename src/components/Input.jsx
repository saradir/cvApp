export default function Input({ label, type = '', value = '' }) {
    
    return (
      <label>
        {label}:
        {' '}
        <input type={type} value={value}

        />
      </label>
    );
  }
  