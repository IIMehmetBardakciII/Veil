import Image from "next/image";

type PropsType={
    img:string;
    title:string;
    subTitle:string;
}
const EthosItem = ({img,title,subTitle}:PropsType) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <Image width={164} height={164} src={img} alt={img}  />
      <span className="span-mont ">{title}</span>
      <span className="smal-mont text-accent2">{subTitle}</span>
    </div>
  )
}

export default EthosItem