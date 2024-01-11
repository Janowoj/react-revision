const address = 'https://humbledev.com';

export function Link({ shouldOpenNewTab, text = address }) {
  const target = shouldOpenNewTab ? '_blank' : '';
  const rel = shouldOpenNewTab ? 'moopener noreferrer' : '';
  // if (text === undefined) {
  //   text = address;
  // }

  return (
    <a href={address} target={target} rel={rel}>
      {text}
    </a>
  );
}
