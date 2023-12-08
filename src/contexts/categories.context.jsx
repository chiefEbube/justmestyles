import { createContext, useState, useEffect } from "react";
import { getCategoriesAnddocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap: {},
})

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({})

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAnddocuments()
            console.log(categoryMap)
            setCategoriesMap(categoriesMap)
        }
        getCategoriesMap()
    }, [categoriesMap])

    const value = { categoriesMap }
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}