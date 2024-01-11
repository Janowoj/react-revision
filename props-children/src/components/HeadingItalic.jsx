export function HeadingItalic(props) {
  return (
    <div>
      <h1>
        <i>{props.children}</i>
      </h1>
    </div>
  );
}
