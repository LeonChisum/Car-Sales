export const addFeature = (id) => {
    console.log(id)
    return {
        type: "ADD_FEATURE",
        payload: id
    }
}

export const removeFeature = (id) => {
    return {
        type: "REMOVE_FEATURE",
        payload: id
    }
}