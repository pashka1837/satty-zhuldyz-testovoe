import { IconParamsT } from "../../types/iconParamsT";

export default function Responsive_icon({
  iconMOB,
  iconDT,
  className,
  alt,
}: IconParamsT) {
  return (
    <picture className={className}>
      <source
        media="(min-width: 768px)"
        srcSet={`${iconDT} 768w,`}
        sizes="768px"
      />
      <source srcSet={`${iconMOB} 300w,`} sizes="300px" />
      <img src={iconMOB} alt={alt} />
    </picture>
  );
}
