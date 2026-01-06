

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function NavigationButton({direction}) {
  return (
    <button>
        {direction === "right" ? <FaAngleRight /> : <FaAngleLeft />}
    </button>
    
  )
}
