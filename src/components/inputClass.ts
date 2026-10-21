export const inputClass = (hasError?: boolean) =>
  `mt-1 w-full border rounded px-3 py-2 text-sm outline-none focus:border-[#7cb800] ${
    hasError ? "border-red-500" : "border-gray-300"
  }`;
