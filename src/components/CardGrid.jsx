export default function CardGrid({ children, cols = 2 }) {
  return <div className={`grid gridCols${cols}`}>{children}</div>;
}
