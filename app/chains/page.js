import styles from "@/app/ChainsList.module.css"
import Link from "next/link";
export const metadata = {
  title: 'Chains and Series',
  description: 'The series begins by addressing fundamental questions that often arise in the minds of Muslims and non-Muslims alike.Questions such as Why am I a Muslim? and Is Islam the religion of truth?',
  keywords: ["islam, muslims, koran ,muslim prayer,hadith,nikah,evolution in islam"],
  icons: {
    icon: '/iconIslam.svg',
  }
}

export default async function chains() {
  const data = await getData()
  const filtredData = await data.filter((el, index, self) => {
    return index === self.findIndex((t) => t.newCollection === el.newCollection);
  });

  return (
    <>
      <div className={styles.headChains} >
        This collection comprises an Islamic scientific series exploring the essence of Islam,
        its role as a guiding faith, and its capacity to reform and uplift society.
        It highlights Islam as the sole religion capable of rectifying societal anomalies and moral decay,
        while also emancipating women from the horrors of sexual slavery
        and exploitation masquerading as women's liberation.
      </div>
    

      <div className={styles.chainsList}>
        {filtredData.map((el) => (
          <li key={el._id}><Link href={el.newCollection.replace(/\s/g, "-")}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              style={{ color: "#82CD47", width: "25px", marginRight: "10px" }}
              viewBox="0 0 24 24" strokeWidth={1.5}
              stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>
            {el.newCollection}</Link></li>
        ))}
      </div>
      <div className={styles.headChains}>
        Welcome to our website! Explore our diverse range of content and resources,
        and enjoy a seamless browsing experience. Looking for information about Islam?
        We've got you covered! Discover everything about Islam and its principles,
        including the 5 pillars of Islam.  Are you interested in current events?
        Stay up-to-date with the Islamic calendar 2023 and the Islamic date today.
        Learn more about renowned personalities like Islam Makhachev and his achievements.
        Explore Islam ansiklopedisi and learn more about the profound teachings of Islam.
        If you seek information about Islam nedir what is Islamor Islamın şartları conditions of Islam,
        we have comprehensive articles to help you.  Our website offers a vast collection of content,
        including Islamic videos, Islamic gazals,
        and thrilling battles like Islam Makhachev vs Charles Oliveira and Islam Makhachev
        vs Alexander Volkanovski.
        We also cater to general queries such as "What does Isla mean?" and "Who is Isla Goodall?".
      </div>
    </>);
}

export async function getData() {
  const res = await fetch('https://kyooadmin.vercel.app/api/mydata',

    { next: { revalidate: 10 } }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
