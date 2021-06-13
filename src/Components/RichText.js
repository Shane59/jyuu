import {Link, RichText, Date} from 'prismic-reactjs';

export default function RichText(props) {
  console.log(props);
  
  return (
    <>
      {RichText.render(props, '')}
    </>
  );
}