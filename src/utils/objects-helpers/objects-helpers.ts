export const updateObjectInArray = (items: any[], itemID: number, objPropName: string, newObjProps: any) => {
    return items.map(el => el[objPropName] === itemID
        ? {...el, ...newObjProps}
        : el)
}