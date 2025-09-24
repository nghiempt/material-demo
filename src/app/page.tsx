"use client";

import DemoClient from "@/modules/demo";
import React, { Suspense } from "react";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Suspense fallback={<div></div>}>
        <DemoClient />
      </Suspense>
    </div>
  );
}
