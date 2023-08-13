export const sanitizeText = (str: string) => {
    return str.toString().replace(/[^a-zA-Z0-9_]/g, '_').toLowerCase();
}

export const generateTransitionName = (modelType:string = 'meetup', str: string) => {
    return `view-transition-name: ${sanitizeText(modelType)}-${sanitizeText(str)};`
}
