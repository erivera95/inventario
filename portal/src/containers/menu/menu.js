import React from "react";
import "./sytels.css";
import { MegaMenu } from "primereact/megamenu";
import { InputText } from "primereact/inputtext";
import { TabView, TabPanel } from "primereact/tabview";
const MenuContainer = () => {
  const items = [
    {
      label: "Videos",
      items: [
        [
          {
            label: "Video 1",
            items: [{ label: "Video 1.1" }, { label: "Video 1.2" }],
          },
          {
            label: "Video 2",
            items: [{ label: "Video 2.1" }, { label: "Video 2.2" }],
          },
        ],
        [
          {
            label: "Video 3",
            items: [{ label: "Video 3.1" }, { label: "Video 3.2" }],
          },
          {
            label: "Video 4",
            items: [{ label: "Video 4.1" }, { label: "Video 4.2" }],
          },
        ],
      ],
    },
    {
      label: "Users",
      icon: "pi pi-fw pi-users",
      items: [
        [
          {
            label: "User 1",
            items: [{ label: "User 1.1" }, { label: "User 1.2" }],
          },
          {
            label: "User 2",
            items: [{ label: "User 2.1" }, { label: "User 2.2" }],
          },
        ],
        [
          {
            label: "User 3",
            items: [{ label: "User 3.1" }, { label: "User 3.2" }],
          },
          {
            label: "User 4",
            items: [{ label: "User 4.1" }, { label: "User 4.2" }],
          },
        ],
        [
          {
            label: "User 5",
            items: [{ label: "User 5.1" }, { label: "User 5.2" }],
          },
          {
            label: "User 6",
            items: [{ label: "User 6.1" }, { label: "User 6.2" }],
          },
        ],
      ],
    },
    {
      label: "Events",
      icon: "pi pi-fw pi-calendar",
      items: [
        [
          {
            label: "Event 1",
            items: [{ label: "Event 1.1" }, { label: "Event 1.2" }],
          },
          {
            label: "Event 2",
            items: [{ label: "Event 2.1" }, { label: "Event 2.2" }],
          },
        ],
        [
          {
            label: "Event 3",
            items: [{ label: "Event 3.1" }, { label: "Event 3.2" }],
          },
          {
            label: "Event 4",
            items: [{ label: "Event 4.1" }, { label: "Event 4.2" }],
          },
        ],
      ],
    },
    {
      label: "Settings",
      icon: "pi pi-fw pi-cog",
      items: [
        [
          {
            label: "Setting 1",
            items: [{ label: "Setting 1.1" }, { label: "Setting 1.2" }],
          },
          {
            label: "Setting 2",
            items: [{ label: "Setting 2.1" }, { label: "Setting 2.2" }],
          },
          {
            label: "Setting 3",
            items: [{ label: "Setting 3.1" }, { label: "Setting 3.2" }],
          },
        ],
        [
          {
            label: "Technology 4",
            items: [{ label: "Setting 4.1" }, { label: "Setting 4.2" }],
          },
        ],
      ],
    },
  ];
  const end = (
    <div>
      <InputText placeholder="Search" type="text" />
    </div>
  );

  return (
    <>
      <div class="overlay">
        <TabView>
          <TabPanel header="Header I">
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </TabPanel>
          <TabPanel header="Header II">
            <p className="m-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
              velit, sed quia non numquam eius modi.
            </p>
          </TabPanel>
          <TabPanel header="Header III">
            <p className="m-0">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
          </TabPanel>
        </TabView>
      </div>

      <div className="header">
        <MegaMenu
          model={items}
          orientation="horizontal"
          end={end}
          breakpoint="100vh"
          style={{
            backgroundColor: "#c77126",
            borderRadius: "0px",
            borderColor: "#c77126",
          }}
        />
      </div>
      <div className="contentStyle"></div>
    </>
  );
};
export default MenuContainer;
