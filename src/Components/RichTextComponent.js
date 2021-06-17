import {Link, RichText, Date} from 'prismic-reactjs';

export default function RichTextComponent(props) {
  return (
    <>
      {RichText.render(props.text, '')}
    </>
  );
}