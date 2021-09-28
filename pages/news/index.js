import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

// this is a news page that would load if we have something like
// www.ourdomainName/news
// which will load the news page

// ###############################

// we use the Link component from Next to link our pages because it loads faster and we can use it instead of the html a tag.

// when the user clicks on the link,, the browser would show the id number as stated bellow and we can use that to connect to the [newsIds] arrays in other to display the correct page to the correct user clicks.

export default function NewsPage() {
  return (
    <Fragment>
      <h1>These are news Items</h1>
      <ul>
        <li>
          <Link href="/news/1"> This is a wonderful news item1</Link>
        </li>
        <li>
          <Link href="/news/2"> This is a wonderful news item2</Link>
        </li>
        <li>
          <Link href="/news/3"> This is a wonderful news item3</Link>
        </li>
        <li>
          <Link href="/news/4"> This is a wonderful news item4</Link>
        </li>
      </ul>
    </Fragment>
  );
}

/*      */
