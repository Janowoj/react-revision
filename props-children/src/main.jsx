import ReactDOM from 'react-dom/client';
import { Link } from './components/Link';
import { HeadingItalic } from './components/HeadingItalic';
import { Logger } from './components/Logger';

const element = (
  <>
    <Logger>
      <HeadingItalic>Hello, I am a humble developer</HeadingItalic>
    </Logger>
    <main>
      <Logger>
        <Link text="Learn more" shouldOpenNewTab={true} />
      </Logger>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolores
        quisquam perspiciatis nesciunt impedit vitae! Quod nobis possimus nemo
        numquam, dolores officia nisi quas corporis obcaecati reiciendis
        officiis ratione ad.
      </p>
      <Link shouldOpenNewTab={false} />
    </main>
  </>
);

ReactDOM.createRoot(document.getElementById('root')).render(element);
