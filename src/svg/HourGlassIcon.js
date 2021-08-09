
import Icon from "@ant-design/icons";
const HourGlassSvg = () => (
    <svg
      width="1em"
      height="1em"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="hourglass-start"
      className="svg-inline--fa fa-hourglass-start fa-w-12"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      fill="currentColor"
    >
      <path d="M360 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24 0 90.965 51.016 167.734 120.842 192C75.016 280.266 24 357.035 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24 0-90.965-51.016-167.734-120.842-192C308.984 231.734 360 154.965 360 64c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24zm-64 448H88c0-77.458 46.204-144 104-144 57.786 0 104 66.517 104 144z" />
    </svg>
  );
  
  const HourGlassIcon = (props) => (
    <Icon component={HourGlassSvg} {...props} />
  );

  export default HourGlassIcon