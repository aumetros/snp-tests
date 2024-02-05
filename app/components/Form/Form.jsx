export default function Form({ children, name, onSubmit }) {
	return (
		<form
			name={name}
			onSubmit={onSubmit}
		>
      {children}
    </form>
	);
}
