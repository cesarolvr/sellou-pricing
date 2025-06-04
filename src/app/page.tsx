"use client";

import { useState, useEffect } from "react";
import { PricingHeader } from "@/components/Pricing/PricingHeader";
import classNames from "classnames";
import { PricingTier } from "@/components/Pricing/PricingTier";
import { pricingPlans } from "@/data/pricing";
import { PricingPeriod } from "@/types/pricing";

export default function Home() {
  const [period, setPeriod] = useState<PricingPeriod>("monthly");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`w-full h-full transition-all duration-300 ease bg-[var(--foreground)]`}
    >
      <div
        className={classNames(`w-full h-full flex flex-col items-center justify-between overflow-scroll mx-auto bg-[#fff] transition-all duration-300 ease-in-out  p-7 md:p-10`, {
          "rounded-4xl" : isLoaded,
          "rounded-none" : !isLoaded,
          "scale-x-93 scale-y-96 md:scale-x-98 md:scale-y-96" : isLoaded,
        })}
      >
        <PricingHeader
          title="Sell before you pay"
          description="Try everything for free. Upgrade when it's working for you."
          period={period}
          onPeriodChange={setPeriod}
        />

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl transition-all duration-300 lg:mx-auto xl:max-w-[1200px] xl:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <PricingTier key={plan.name} {...plan} period={period} order={index} />
          ))}
        </div>

        <div className="text-center">
          <p className="text-base text-gray-500">
            Need a custom plan?{" "}
            <a
              href="#"
              className="font-medium text-[var(--foreground)] hover:text-[var(--primary)]"
            >
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
