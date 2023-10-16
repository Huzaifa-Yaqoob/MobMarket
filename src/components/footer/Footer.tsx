import QuickLinks from "./QuickLinks";
import CustomerServices from "./CustomerServices";
import SocialLinks from "./SocialLinks";
import ContactInformation from "./ContactInformation";
import PaymentMethods from "./PaymentMethods";

export default function Footer(): React.ReactElement {
  return (
    <footer className="my-container bg-secondary text-secondary-foreground text-sm space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <QuickLinks />
        <CustomerServices />
        <SocialLinks />
        <ContactInformation />
      </div>
      <div className="flex flex-col items-center gap-4">
        <PaymentMethods />
        <div className="text-center">
          Copyright © 2023 MobMarket. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
