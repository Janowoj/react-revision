export function ButtonStrong({ children, onClick }) {
  return (
    <button onClick={onClick}>
      <strong>{children}</strong>
    </button>
  );
}

// This is DUMMY component, which doesn't contain any business logic.
