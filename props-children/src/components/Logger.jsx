export function Logger(props) {
  const date = new Date();
  console.log(
    `Komponent został utworzony ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
  );
  return <>{props.children}</>;
}
