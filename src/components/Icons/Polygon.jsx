function Polygon(props) {
  return (
    <svg
      viewBox="0 0 900 600"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0-152.8l132.4 76.4V76.4L0 152.8l-132.4-76.4V-76.4z"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        transform="translate(812 580)"
      />
      <path
        d="M0-141l122.1 70.5v141L0 141l-122.1-70.5v-141z"
        stroke="currentColor"
        fill="none"
        strokeWidth={3}
        transform="translate(823 242)"
      />
      <path
        d="M0-116l100.5 58V58L0 116l-100.5-58V-58z"
        stroke="currentColor"
        fill="none"
        strokeWidth={3}
        transform="translate(466 327)"
      />
    </svg>
  )
}

export default Polygon



// function Polygon(props) {
//   return (
//     <svg
//       viewBox="0 0 900 600"
//       width="100%"
//       height="100%"
//       xmlns="http://www.w3.org/2000/svg"
//       {...props}
//     >
//       <path
//         d="M0-144.1L124.8-72V72L0 144.1-124.8 72V-72z"
//         fill="none"
//         // stroke="#e59400"
//         stroke="currentColor"
//         strokeWidth={2}
//         transform="translate(693 454)"
//       />
//       <path
//         d="M0-138l119.5 69V69L0 138l-119.5-69V-69z"
//         fill="none"
//         // stroke="#e59400"
//         stroke="currentColor"
//         strokeWidth={2}
//         transform="translate(764 32)"
//       />
//       <path
//         d="M0-121l104.8 60.5v121L0 121l-104.8-60.5v-121z"
//         // stroke="#e59400"
//         stroke="currentColor"
//         fill="none"
//         strokeWidth={2}
//         transform="translate(285 295)"
//       />
//     </svg>
//   )
// }

// export default Polygon