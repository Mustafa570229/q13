
import ShowingData from "../component/ShowingData";

export default async function Page(props) {
  const data = await getData();
  const filteredData = await data?.filter(el => el.newCollection.replace(/\s/g, "-").toLowerCase() ===
    props.params.id.toLowerCase())
  return (
    <>
      <ShowingData data={filteredData} />
    </>
  );
};
export async function getData() {
  const res = await fetch('https://kyooadmin.vercel.app/api/mydata',
  // {
  //   next:{
  //     revalidate :82400
  //   }
  // }
  
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
