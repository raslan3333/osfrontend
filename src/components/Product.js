
const Product = () => {
    return (
        <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 lg:gap-5  ">
                {[...Array(20)].map((x, i) =>
                    <div className="rounded aspect-w-5 aspect-h-7 b-shadow bg-white ">
                        <p className="p-3">Product</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Product;
