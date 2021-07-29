import React from 'react'
function DropDownIcon(props) {
  return (
    <svg
      onClick={props.onClick}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.98357 4.5H9.01404C9.43123 4.5 9.63982 5.00391 9.34451 5.29922L6.33045 8.31562C6.14763 8.49844 5.84998 8.49844 5.66717 8.31562L2.6531 5.29922C2.35779 5.00391 2.56638 4.5 2.98357 4.5Z"
        fill="#9FA2B4"
      />
    </svg>
  )
}

export { DropDownIcon }
