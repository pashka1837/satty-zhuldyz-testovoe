import { IconParamsT } from "../../types/iconParamsT";
import { forwardRef } from "react";

const Responsive_icon = forwardRef(function Responsive_icon(props, ref) {
  const { iconMOB, iconDT, className, alt } = props as IconParamsT;
  return (
    <picture ref={ref} className={className}>
      <source
        media="(min-width: 768px)"
        srcSet={`${iconDT} 768w,`}
        sizes="768px"
      />
      <source srcSet={`${iconMOB} 300w,`} sizes="300px" />
      <img src={iconMOB} alt={alt} />
    </picture>
  );
});

export default Responsive_icon;
