//Main region
const getInitialState=() =>{
    return{};
}
const startGame=()=>{
    let state = getInitialState();
    const updateState=props=>{
        state={...state, ...props}
    }
    windows.addEventListener('resize', () => {
        console.log('resize');
    })
}
//End region
startGame();