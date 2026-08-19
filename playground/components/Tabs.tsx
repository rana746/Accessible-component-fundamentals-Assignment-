import { useId, useRef, useState } from "react";

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? "");
  const tabsId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  return (
    <div>
      <div role="tablist" aria-label="Example tabs">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            type="button"
            role="tab"
            id={`${tabsId}-tab-${tab.id}`}
            aria-selected={activeTab === tab.id}
            onKeyDown={(event) => {
              if (tabs.length === 0) return;

              const currentIndex = tabs.findIndex(
                (tab) => tab.id === activeTab,
              );

              if (event.key === "ArrowRight") {
                event.preventDefault();

                const nextIndex = (currentIndex + 1) % tabs.length;
                const nextTab = tabs[nextIndex];

                setActiveTab(nextTab.id);
                tabRefs.current[nextIndex]?.focus();
              }

              if (event.key === "ArrowLeft") {
                event.preventDefault();

                const previousIndex =
                  (currentIndex - 1 + tabs.length) % tabs.length;
                const previousTab = tabs[previousIndex];

                setActiveTab(previousTab.id);
                tabRefs.current[previousIndex]?.focus();
              }

              if (event.key === "Home") {
                event.preventDefault();

                const firstTab = tabs[0];

                setActiveTab(firstTab.id);
                tabRefs.current[0]?.focus();
              }

              if (event.key === "End") {
                event.preventDefault();

                const lastIndex = tabs.length - 1;
                const lastTab = tabs[lastIndex];

                setActiveTab(lastTab.id);
                tabRefs.current[lastIndex]?.focus();
              }
            }}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${tabsId}-panel-${tab.id}`}
          aria-labelledby={`${tabsId}-tab-${tab.id}`}
          hidden={activeTab !== tab.id}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}

export default Tabs;
