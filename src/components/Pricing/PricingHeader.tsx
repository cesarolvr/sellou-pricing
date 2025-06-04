import { PricingPeriod } from '@/types/pricing';
import { motion } from 'framer-motion';
import classNames from 'classnames';

interface PricingHeaderProps {
  title: string;
  description: string;
  period: PricingPeriod;
  onPeriodChange: (period: PricingPeriod) => void;
}

export function PricingHeader({
  title,
  description,
  period,
  onPeriodChange,
}: PricingHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-lg text-gray-500 mx-auto"
      >
        {description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 flex items-center justify-center"
      >
        <motion.span
          animate={{ color: period === "monthly" ? "#111827" : "#6B7280" }}
          className="text-sm font-medium"
        >
          Monthly
        </motion.span>
        <motion.button
          type="button"
          className={classNames(
            "relative mx-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[var(--foreground-tertiary)] focus:ring-offset-2",
            {
              "bg-[var(--foreground-tertiary)]": period === "yearly",
              "bg-gray-200": period === "monthly",
            }
          )}
          role="switch"
          aria-checked={period === "yearly"}
          onClick={() => onPeriodChange(period === "monthly" ? "yearly" : "monthly")}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            animate={{
              x: period === "yearly" ? 20 : 0,
              backgroundColor: "white"
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0"
          />
        </motion.button>
        <motion.span
          animate={{ color: period === "yearly" ? "#111827" : "#6B7280" }}
          className="text-sm font-medium"
        >
          Yearly
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="ml-2 inline-flex items-center rounded-full bg-[var(--foreground)] px-2.5 py-0.5 text-xs font-medium text-white"
          >
            Save 20%
          </motion.span>
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
