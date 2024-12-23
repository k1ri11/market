import styles from './index.module.scss';
import ProductItem from "../ProductItem";
import mockProducts from "../MockData/ProductItem";

const renderProductList = () => (
    <div className={styles.flex_col9}>
        <div className={styles.flex_row19}>
            {mockProducts.map((product) => (
                <ProductItem
                    key={product.id}
                    className={styles.color9}
                    basePrice={product.basePrice}
                    image={product.image}
                    name={product.name}
                    reviewCount={product.reviewCount}
                    sellPrice={product.sellPrice}
                />
            ))}
        </div>
        <hr className={styles.line} size={1}/>
    </div>
);

export default renderProductList;
