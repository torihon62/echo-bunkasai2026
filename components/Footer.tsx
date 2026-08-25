/* eslint-disable @next/next/no-img-element */
interface Props {
  imageSource: string;
}

export default function Footer(props: Props) {
  return (
    <footer className="bg-white">
      <img src={props.imageSource} className="w-full" alt="" />
    </footer>
  );
}
