// import { useEffect,useState } from "react"

// ===================Render====================
// // first condition

// const App=()=>{

//     const[cnt,setCnt]=useState(0);
//     useEffect(()=>{
//         setTimeout(()=>{
//             setCnt(cnt+1);
//         }, 5000);
//     })
// return(
//     <>
//     <h1> Application Form : {cnt} </h1>
//     </>
// )
// }

// export default App;

// ===================================================================

// Second condition

// import { useEffect,useState } from "react"


// const App=()=>{

//     const[cnt,setCnt]=useState(0);
//     useEffect(()=>{
       
//             setCnt(cnt+1);
    
//     }, []);
// return(
//     <>
//     <h1> Application Form : {cnt} </h1>
//     </>
// )
// }

// export default App;

//========================================================

import { useEffect,useState } from "react"
// third condition

const App=()=>{

    const[cnt,setCnt]=useState(0);
    const[multi, setMulti]=useState(1);

    useEffect(()=>{

        setMulti(cnt*2);

    },[cnt])
    


    return(
    <>
    <button onClick={()=>{setCnt(cnt+1)}}> Click here!!!</button>
    <h1> My count : {cnt} </h1>
    <h1> Application Form : {multi} </h1>
    </>
    )
   }

    export default App;