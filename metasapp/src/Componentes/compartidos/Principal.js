function Principal({Children}) {
    return (
      <>
      <sindenav>
        <a href="/lista">Lista</a>
        <a href="/crear">Crear</a>
      </sindenav>
      <main>
        {Children}
      </main>
        
      </>
    );
  }
  
  export default Principal;