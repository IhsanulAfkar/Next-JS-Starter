import { Route } from "@/types"
import routes from "./routes"

const route: Route = (name, params = {}) => {

    if (!routes[name]) {
        throw new Error(
            `Route ${name} not found. Make sure you have added it to the routes.ts file.`
        )
    }

    const url = routes[name]

    if (!params) {
        return url.path
    }
    const checkVariables = (str: string): string[] => {
        const regex = /\{[^\}]+\}/g
        const matches: string[] = []
        let match

        while ((match = regex.exec(str)) !== null) {
            matches.push(match[0])
        }
        return matches
    }
    const path = Object.keys(params).reduce((path, key) => {
        return path.replace(`{${key}}`, params[key])
    }, url.path)
    const variables = checkVariables(path)
    if (variables.length > 0) {
        throw new Error(
            `Missing params for ${variables.join(',')}.`
        )
    }
    return path
}

export default route