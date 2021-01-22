export const INIT = '[INIT]'
export const INIT_APPLICATION = `${INIT} Set initial value for the application`

export const initialiseApplication = () =>({
    type: INIT_APPLICATION,
    payload: {},
})