import { useContext } from "react"

import { CategoriesContext } from "../../contexts/categories.context"
import ProductCard from "../../components/product-card/product-card.component"

import './shop.styles.scss'
const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext)

    return (
        <>
            {
                Object.keys(categoriesMap).map(title => (
                    <>
                        <h2>{title}</h2>
                        {console.log(title)}
                        <div className="products-container">
                            {categoriesMap[title].map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </>
                )
                )
            }
        </>

    )
}

export default Shop