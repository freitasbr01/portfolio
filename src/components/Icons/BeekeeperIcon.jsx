function BeekeeperIcon(props) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d)">
        <rect
          x={100}
          y={100}
          width={824}
          height={824}
          rx={179}
          fill="url(#paint0_linear)"
        />
      </g>
      <g filter="url(#filter1_d)" fill="#000" fillOpacity={0.8}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M410.121 383.037c-8.652 7.21-17.303 15.14-24.513 23.792V292.197l24.513-14.419v105.259zm38.931-22.352c7.088-3.221 14.751-5.291 21.96-7.239l.01-.002c.855-.231 1.703-.46 2.543-.689V248.937c-8.652 2.163-16.582 4.326-24.513 7.931v103.817z"
        />
        <path d="M279 100c-7.104 0-14.112.414-21 1.219v462.774c0 58.397 31.001 113.19 82.189 142.749l89.398 51.908C454.82 773.07 483.659 781 511.776 781c28.117 0 56.955-7.21 82.188-22.35l89.399-51.908c51.187-29.559 82.188-83.631 82.188-142.749V460.897c.721-59.118-31.001-113.19-81.467-142.749l-89.399-51.909c-25.233-14.419-54.071-22.349-82.188-22.349v103.096c28.117 0 56.955 7.21 82.188 22.35 51.188 29.559 82.189 83.63 82.189 142.748 0 58.398-31.001 113.19-82.189 142.749-25.233 14.419-54.071 22.35-82.188 22.35-28.118 0-56.956-7.21-82.189-22.35-51.188-29.559-82.189-83.63-82.189-142.749V100H279z" />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x={78}
          y={86}
          width={868}
          height={868}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            radius={2}
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow"
          />
          <feOffset dy={8} />
          <feGaussianBlur stdDeviation={10} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter
          id="filter1_d"
          x={236}
          y={86}
          width={551.563}
          height={725}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            radius={2}
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow"
          />
          <feOffset dy={8} />
          <feGaussianBlur stdDeviation={10} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <linearGradient
          id="paint0_linear"
          x1={512}
          y1={100}
          x2={512}
          y2={924}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FAD83B" />
          <stop offset={1} stopColor="#C8AE35" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default BeekeeperIcon
