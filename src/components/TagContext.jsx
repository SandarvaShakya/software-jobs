import { createContext, useState } from "react"

export const TagContext = createContext()

const TagProvider = ({ children }) => {
    const [tags, setTags] = useState([]);

    return (
        <TagContext.Provider value={{ tags, setTags }}>
            { children }
        </TagContext.Provider>
    )
}

export default TagProvider