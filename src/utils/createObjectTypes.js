export default (sectionName, actionName) => ({
    START: `${sectionName}| ${actionName} start`,
    SUCCESS: `${sectionName}| ${actionName} success`,
    ERROR: `${sectionName}| ${actionName} error`,
})