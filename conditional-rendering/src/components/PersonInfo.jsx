export function PersonInfo({ person }) {
  //   const telSection =
  //     person.tel === undefined ? (
  //       <div>Tel: brak</div>
  //     ) : (
  //       <div>
  //         Tel: <a href={`tel: ${person.tel}`}>{person.tel}</a>
  //       </div>
  //     );

  return (
    <address>
      <div>
        <span>
          Name: {person.name} {person.lastname}
        </span>
      </div>
      <div>
        Email: <a href={`mailto: ${person.mail}`}>{person.mail}</a>
      </div>
      {person.tel && (
        <div>
          Tel: <a href={`tel: ${person.tel}`}>{person.tel}</a>
        </div>
      )}
    </address>
  );
}

// ctrl + F -> replace all
