import React from "react";

const Recommended = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold text-lg">🚀 Featured Projects</h1>
        <ol className="list-decimal">
          <li className="font-semibold">Salesforce Automation Dashboard</li>
          <ul className="list-disc">
            <li>
              Developed a real-time dashboard using Lightning Web Components
              (LWC) to track sales performance, lead conversions, and pipeline
              health.
            </li>
            <li>
              Result: Increased team efficiency by 30% and reduced manual
              reporting time.
            </li>
          </ul>
          <li className="font-semibold">Customer Journey Optimization</li>
          <ul className="list-disc">
            <li>
              Orchestrated personalized customer journeys using Marketing Cloud.
              From email campaigns to social media touchpoints, I’ve got the
              map!
            </li>
            <li>
              Result: Boosted engagement rates by 20% and drove more qualified
              leads.
            </li>
          </ul>
        </ol>
      </div>
    </div>
  );
};

export default Recommended;
