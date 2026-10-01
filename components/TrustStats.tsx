"use client";

import { useEffect, useRef, useState } from "react";
import { businessStats } from "@/lib/site";

type NumericStat = {
  value: number;
  display: string;
};

function formatIntermediateValue(value: number, finalDisplay: string) {
  const suffix = finalDisplay.endsWith("%") ? "%" : "";
  return `${new Intl.NumberFormat("en-IN").format(Math.round(value))}${suffix}`;
}

function AnimatedStat({ stat }: { stat: NumericStat }) {
  const [currentValue, setCurrentValue] = useState(0);
  const hasStartedRef = useRef(false);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const element = document.querySelector<HTMLElement>("[data-trust-stats]");

    if (!element || hasStartedRef.current) {
      return;
    }

    const startAnimation = () => {
      if (hasStartedRef.current) {
        return;
      }

      hasStartedRef.current = true;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setCurrentValue(stat.value);
        return;
      }

      const startTime = performance.now();
      const duration = 1800;

      const animate = (timestamp: number) => {
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setCurrentValue(stat.value * easedProgress);

        if (progress < 1) {
          frameRef.current = window.requestAnimationFrame(animate);
        } else {
          setCurrentValue(stat.value);
        }
      };

      frameRef.current = window.requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [stat]);

  const isComplete = currentValue >= stat.value;
  const visibleValue = isComplete ? stat.display : formatIntermediateValue(currentValue, stat.display);

  return (
    <>
      <span aria-hidden="true">{visibleValue}</span>
      <span className="sr-only">{stat.display}</span>
    </>
  );
}

export function TrustStats() {
  return (
    <section data-trust-stats className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-8 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold uppercase tracking-[0.14em] text-slate-600">
            Helping Vehicle Owners With Challan Assistance
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm sm:p-5">
            <div className="text-2xl font-bold text-slate-900 sm:text-3xl"><AnimatedStat stat={businessStats.casesAssisted} /></div>
            <p className="mt-2 text-sm text-slate-600">Challan Requests Assisted</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm sm:p-5">
            <div className="text-2xl font-bold text-slate-900 sm:text-3xl"><AnimatedStat stat={businessStats.settlements} /></div>
            <p className="mt-2 text-sm text-slate-600">Settlement/Resolution Cases</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm sm:p-5">
            <div className="text-2xl font-bold text-slate-900 sm:text-3xl">{businessStats.response}</div>
            <p className="mt-2 text-sm text-slate-600">Response</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm sm:p-5">
            <div className="text-2xl font-bold text-slate-900 sm:text-3xl">Professional</div>
            <p className="mt-2 text-sm text-slate-600">Assistance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
