import useGetProducts from "../../hooks/queries/useGetProducts";
import Card from "./Card";
import Loading from "../../components/Loading";

const Products = () => {
  const { data, isLoading, isError } = useGetProducts();

  if (isLoading) {
    return (
      <div className="mt-10 lg:mt-16 xl:mt-20 w-fit mx-auto">
        <Loading />
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
