
import ShowingData from "../component/ShowingData";

export async function generateMetadata(props) {
  const data = await getData();
  const filteredData = await data?.filter(el => el.newCollection.replace(/\s/g, "-").toLowerCase() ===
    props.params.id.toLowerCase())
  return {
    title: filteredData[0]?.newTitle,
    description: filteredData[0]?.newContent,
    keywords: ["islam, muslims, koran ,muslim prayer,hadith,nikah,evolution in islam"],
    icons: {
      icon: '/iconIslam.svg',
    }
  }
}

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
    { next: { revalidate: 10 } }

  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
