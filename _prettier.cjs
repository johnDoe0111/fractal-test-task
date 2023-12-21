module.exports = {
  arrowParens: "avoid",
  bracketSameLine: true,
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: "all",
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
  importOrder: [
    "^layouts/(.*)$",
    "^components/(.*)$",
    "^assets/(.*)$",
    "^atoms/(.*)$",
    "^utils/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
};