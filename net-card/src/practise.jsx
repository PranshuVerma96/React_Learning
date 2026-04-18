// Inteview Questions
export const Practices = ()=>{
  const studnets= [];
  return(
    <>
      {/* <p>{studnets.length && "no students found"}</p> */}
      {/* <p>{studnets.length === 0 && "no students found"}</p> */}

 {/* <p>{!studnets.length && "no students found"}</p> */}

  <p>{ Boolean(!studnets.length) && "no students found"}</p>
     
      <p>Number of studnets : {studnets.length}</p>

    </>
  );
};