import { Button } from "@/components/Button";
import { PricingFeature, PricingPeriod } from "@/types/pricing";
import CountUp from "react-countup";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import classNames from "classnames";
import { useRef } from "react";

interface PricingTierProps {
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
  cta: string;
  period: PricingPeriod;
  order: number;
}

export function PricingTier({
  name,
  price,
  description,
  features,
  isPopular = false,
  cta,
  period,
  order,
}: PricingTierProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [0, 1], [20, -20]);
  const rotateY = useTransform(mouseXSpring, [0, 1], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width;
    const yPct = mouseY / height;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  const currentPrice = period === "monthly" ? price.monthly : price.yearly;
  const savings =
    period === "yearly"
      ? Math.round(
          ((price.monthly * 12 - price.yearly) / (price.monthly * 12)) * 100
        )
      : 0;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        y: { duration: 0.3, delay: order * 0.1, ease: "easeOut" },
        opacity: { duration: 0.3, delay: order * 0.1, ease: "easeOut" },
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        scale: isPopular ? 1.05 : 1.02,
        borderColor: isPopular
          ? "var(--foreground-primary)"
          : "var(--foreground-secondary)",
        transition: { duration: 0.3, delay: 0 },
      }}
      className={classNames(
        "relative flex flex-col p-8 bg-white mb-6 rounded-4xl shadow-lg hover:cursor-pointer border-1 border-solid border-[#ddd]",
        {
          "border-2 border-solid border-[var(--foreground-primary)]": isPopular,
          "border-1 border-solid": !isPopular,
        }
      )}
    >
      <motion.div
        style={{
          transform: "translateZ(25px)",
          transformStyle: "preserve-3d",
        }}
      >
        {isPopular && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2"
          >
            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-[var(--foreground-secondary)] text-[var(--foreground-dark)]">
              Most Popular
            </span>
          </motion.div>
        )}

        <div className="flex-1">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl font-semibold text-gray-900"
          >
            {name}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-500"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6"
          >
            <div className="flex items-baseline">
              <span className="text-4xl font-bold tracking-tight text-gray-900">
                $
                {
                  <CountUp
                    end={currentPrice}
                    duration={1.5}
                    preserveValue={true}
                  />
                }
              </span>
              <span className="ml-1 text-xl font-semibold text-gray-300">
                /{period === "monthly" ? "mo" : "yr"}
              </span>
            </div>
            {period === "yearly" && savings > 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-2 text-sm text-[var(--foreground-tertiary)]"
              >
                Save {savings}% annually
              </motion.p>
            )}
          </motion.div>

          <ul className="mt-8 space-y-4">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="flex items-start"
              >
                <span
                  className={classNames(
                    "flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center",
                    {
                      "bg-green-100 text-green-600": feature.included,
                      "bg-gray-100 text-gray-400": !feature.included,
                    }
                  )}
                >
                  {feature.included ? (
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </span>
                <span
                  className={classNames("ml-3 text-base", {
                    "text-gray-900": feature.included,
                    "text-gray-500": !feature.included,
                  })}
                >
                  {feature.name}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <Button variant={isPopular ? "primary" : "outline"}>{cta}</Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
