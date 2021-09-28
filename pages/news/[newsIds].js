// import Head from 'next/head';
// import Image from 'next/image';

import { useRouter } from 'next/router';

// this is a news page that would load if we have somethong like
// www.ourdomainName/news/singlenewspage ::: which means that it is a nested page of the news component
// this will add a dynamic path to any name that replaces the singlenewspage using the [] syntax.
// which will load the news page

export default function SingleNewsPage() {
  // This is a next.js router that allows us to perform a dynamic routing between the pages
  // and it gives us access to the information on the urls as it changes.
  // in this case we can use the feedback to match a data that is coming from our
  // server or database or backend API in other to display the correct news to the client
  // by matching( router.query.newsIds) to the id or any similer unique information that we would get from the database.
  const router = useRouter();

  const newsId = router.query.newsIds;
  return (
    <div>
      <h1>Hello Africa</h1>
      <h1>This is the single news page</h1>
    </div>
  );
}
