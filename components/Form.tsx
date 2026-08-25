"use client";

interface Props {
  href: string;
  bgColor?: string;
}

function Form(props: Props) {
  return (
    <div>
      <iframe src={props.href} width="100%" height="500">
        読み込んでいます…
      </iframe>
    </div>
  );
}

export default Form;
