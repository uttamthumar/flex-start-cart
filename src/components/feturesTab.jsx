import { useState } from "react";
import { BiCheck } from "react-icons/bi"; // Assuming you have imported BiCheck icon

const TabComponent = () => {
  const [buttonArrays, setButtonArrays] = useState([
    { id: 1, text: "Saepe fuga", pageContaint: {} },
    { id: 2, text: "Voluptates", pageContaint: {} },
    { id: 3, text: "Corrupti", pageContaint: {} },
  ]);
  const [activeTab, setActiveTab] = useState(buttonArrays[0]?.text); // State to track active tab

  const handleTabClick = (tabId) => {
    setActiveTab(tabId); // Update active tab when clicked
  };

  return (
    <div className="main_tab">
      <h1>Repudiandae rerum velit modi et officia quasi facilis</h1>

      <ul className="nav nav-tabs" id="myTab" role="tablist">
        {buttonArrays.map((item, index) => (
          <li
            className="nav-item border-none"
            role="presentation"
            key={item.id}
          >
            <button
              className={`fetures__tab nav-link ${
                activeTab === item.text ? "active" : ""
              }`}
              id={`${item.text}-tab`}
              onClick={() => handleTabClick(item.text)}
            >
              {item.text}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content content_tab" id="myTabContent">
        {buttonArrays.map((item, index) => (
          <div
            className={`tab-pane fade border-none ${
              activeTab === item.text ? "show active" : ""
            }`}
            id={`${item.text.toLowerCase()}`}
            role="tabpanel"
            key={item.id}
          >
            <p>
              Consequuntur inventore voluptates consequatur aut vel et. Eos
              doloribus expedita. Sapiente atque consequatur minima nihil quae
              aspernatur quo suscipit voluptatem.
            </p>
            <div className="d-flex align-items-center mb-2">
              <BiCheck />
              <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
            </div>
            <p>
              Laborum omnis voluptates voluptas qui sit aliquam blanditiis.
              Sapiente minima commodi dolorum non eveniet magni quaerat nemo et
            </p>
            <div className="d-flex align-items-center mb-2">
              <BiCheck />
              <h4>Incidunt non veritatis illum ea ut nisi</h4>
            </div>
            <p>
              Non quod totam minus repellendus autem sint velit. Rerum debitis
              facere soluta tenetur. Iure molestiae assumenda sunt qui inventore
              eligendi voluptates nisi at. Dolorem quo tempora. Quia et
              perferendis.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
