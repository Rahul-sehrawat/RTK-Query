import {useGetProductByIdQuery} from '../app/service/dummyData'

const SpecificProduct = () => {
  const {data, isError,isLoading}  = useGetProductByIdQuery(3)   //pass the id here 

  if(isError){
    return <h1>Eroor</h1>
  }

  if(isLoading){
    return <h1>Loading...</h1>
  }


  return (
    <div>
      <h1>{data?.brand}</h1>
    </div>
  )
}
export default SpecificProduct