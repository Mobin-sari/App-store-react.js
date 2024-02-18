import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helper/helper";

function Sidebar({ setQuery }) {
  const categorHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };

  return (
    <>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categorHandler}>
        <li>All</li>
        <li>Electronics</li>
        <li>Jewelery</li>
        <li>Men's Clothing</li>
        <li>Women's Clothing</li>
      </ul>
    </>
  );
}

export default Sidebar;
