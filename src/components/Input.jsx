export default function Input({ label, type = '', defaultValue = '', readOnly }) {
    
    return (
      <label>
        {label}:
        {' '}
        <input type={type} defaultValue={defaultValue} readOnly={readOnly}

        />
      </label>
    );
  }
  