import { useState } from "react";
import Disclosure from "./components/Disclosure";
import Tabs from "./components/Tabs";
import Modal from "./components/Modal";
function PlaygroundApp() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main>
      <h1>Accessible Components Playground</h1>

      <Disclosure title="What is accessibility?">
        <p>
          Accessibility means designing and building interfaces that people with
          different abilities can use effectively.
        </p>
      </Disclosure>

      <Tabs
        tabs={[
          {
            id: "profile",
            label: "Profile",
            content: <p>This is the profile tab.</p>,
          },
          {
            id: "settings",
            label: "Settings",
            content: <p>This is the settings tab.</p>,
          },
          {
            id: "billing",
            label: "Billing",
            content: <p>This is the billing tab.</p>,
          },
        ]}
      />
      <section>
        <h2>Modal Dialog</h2>

        <button type="button" onClick={() => setIsModalOpen(true)}>
          Open Modal
        </button>

        <Modal
          isOpen={isModalOpen}
          title="Example Modal"
          onClose={() => setIsModalOpen(false)}
        >
          <p>This is an accessible modal dialog.</p>
        </Modal>
      </section>
    </main>
  );
}

export default PlaygroundApp;
