import {useGetAllProductsQuery} from "../app/service/dummyData"


const AllProducts = () => {
  const {data,isError,isLoading} =  useGetAllProductsQuery()
  
  // access the product array , otherwise it will give undefined while mapping it
  const products = data?.products;

  if(isError)  {
    return <h1> its an error </h1>;
  }
  if (isLoading) {
     return <h1> Loading .... </h1>;
  }

  if(!products || products.length === 0){
    return <h1> No Product found</h1>
  }


  return (
    <div>
      <h1>List of the products</h1>
      {products.map((p) => (
        <>
           <h4 key={p.id}>{p.title}</h4> 
           <p>{p.description}</p>
        </>
       
      ))}
    </div>
  )


};
export default AllProducts


