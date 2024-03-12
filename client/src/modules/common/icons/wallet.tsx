import React from "react"
import { IconProps } from "types/icon"

const Wallet: React.FC<IconProps> = ({
  size = "16",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      {...attributes}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.8212 17.92V18.2827C20.8253 19.6948 21.9691 20.8386 23.3812 20.8427H25.5999V22.496C25.6004 24.0102 24.3728 25.2378 22.8586 25.2373H9.83457C7.94028 25.231 6.4062 23.697 6.3999 21.8027V9.50399C6.39944 7.98981 7.62705 6.7622 9.14124 6.76266H19.6372C19.9907 6.76266 20.2772 7.04921 20.2772 7.40266C20.2772 7.75612 19.9907 8.04266 19.6372 8.04266H9.14124C8.33417 8.04266 7.67991 8.69693 7.67991 9.50399C7.67991 10.3111 8.33417 10.9653 9.14124 10.9653H23.6799C24.1892 10.965 24.6778 11.1672 25.0379 11.5273C25.398 11.8875 25.6002 12.376 25.5999 12.8853V15.36H23.3812C21.9675 15.3604 20.8216 16.5063 20.8212 17.92ZM9.88793 10.144C9.53447 10.144 9.24793 9.85751 9.24793 9.50405C9.24793 9.15058 9.53447 8.86404 9.88793 8.86404L19.6373 8.86405C19.9903 8.86507 20.2762 9.15101 20.2773 9.50405C20.2762 9.85707 19.9903 10.143 19.6373 10.144H9.88793Z"
        fill={color}
      />
    </svg>
  )
}

export default Wallet