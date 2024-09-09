import { Dispatch, SetStateAction } from "react"

type GetFileFromUrl = (param1: string, param2: Dispatch<SetStateAction<File[]>>) => void
export const getFileFromUrl: GetFileFromUrl = async (url, setfiles) => {
    const image = await fetch(url)
    if (image.ok) {
        const fileName = url.substring(
            url.lastIndexOf("/") + 1
        );
        const imageData = await image.blob()
        const file = new File(
            [imageData],
            fileName,
            { type: 'image/png' }
        )
        setfiles(prev => [...prev, file])
    }
}

type GetExtensionFromUrl = (param: string) => string
export const getExtensionFromUrl: GetExtensionFromUrl = (url) => {
    const path = url.split('/')
    const filename = path[path.length - 1]
    const parts = filename.split('.')

    if (parts.length > 1) {
        return parts[parts.length - 1].toLowerCase()
    } else {
        return ''
    }
}
