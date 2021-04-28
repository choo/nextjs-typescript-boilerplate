import Link from 'next/link'
import { FunctionalComponent } from 'preact';

const TopPage: FunctionalComponent = () => {
  return (
    <>
      <h2>Top</h2>
      <h4>inputs</h4>
      <p>
        <Link href='/button'>
          <a>Button with grid</a>
        </Link>
      </p>
      <p>
        <Link href='/menu'>
          <a>Menus</a>
        </Link>
      </p>
      <p>
        <Link href='/textfield'>
          <a>TextFields</a>
        </Link>
      </p>
      <p>
        <Link href='/suggest'>
          <a>KeywordSuggest</a>
        </Link>
      </p>
      <p>
        <Link href='/resultlist'>
          <a>ResultList</a>
        </Link>
      </p>
    </>
  );
};


export default TopPage;
