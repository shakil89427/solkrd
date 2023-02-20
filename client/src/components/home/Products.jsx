import HashLoader from "react-spinners/HashLoader";
import useGetProducts from "../../hooks/queries/useGetProducts";
import Card from "./Card";

const Products = () => {
  const { data, isInitialLoading, isError } = useGetProducts();

  if (isInitialLoading) {
    return (
      <div className="mt-5 w-fit mx-auto">
        <HashLoader size={30} color="blue" />
      </div>
    );
  }

  if (isError) {
    return null;
  }

  return (
    <div className="mt-10 lg:mt-16 xl:mt-20 container">
      <p className="text-mediumblue font-semibold text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center">
        SolKrd Products
      </p>
      <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {data.map((product) => (
          <Card key={product?.productId} product={product} />
        ))}
      </div>
    </div>
  );
};
export default Products;
