const initState = {
    loader: false,
}

const profileReducer = (state = initState, action) => {

    switch(action.type) {

        case 'SHOW_LOADER' :
            console.log('loader show')
            return {
                ...state,
                loader: true
            }

        case 'HIDE_LOADER' :
            console.log('loader hide')
            return {
                ...state,
                loader: false
            }
        default :
        return state;    
    }
}

export default profileReducer